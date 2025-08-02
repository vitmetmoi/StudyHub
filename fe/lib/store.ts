import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/userSlice';
import { userApi } from '@/app/services/userAPI';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users'] // Only persist users state
}

const rootReducer = combineReducers({
    users: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(userApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch