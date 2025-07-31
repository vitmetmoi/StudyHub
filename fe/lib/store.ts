import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/userSlice';
import { userApi } from '@/app/services/userAPI';

export const makeStore = () => {
    return configureStore({
        reducer: {
            users: userSlice.reducer,
            [userApi.reducerPath]: userApi.reducer
        },

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userApi.middleware),

    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']