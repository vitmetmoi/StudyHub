import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
    email: string,
    userName: string,
    role: number
}

// Define the initial state using that type
const initialState = {
    email: '',
    userName: '',
    role: 0
} satisfies UserState as UserState

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateUserData: (state, action: PayloadAction<UserState>) => {
            console.log('userData slice', action.payload)
            if (action.payload && action.payload.email) {
                state.email = action.payload.email;
                state.role = 0;
                state.userName = action.payload.userName
            }
            console.log('state', state.email)
        },

        remove: (state) => {
            state.email = '';
            state.userName = '';
            state.role = 0;
        }
    },
})

export const { updateUserData, remove } = userSlice.actions
export default userSlice.reducer