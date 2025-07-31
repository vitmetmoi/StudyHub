import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
    name: string,
    age: number,
    class: string
}

// Define the initial state using that type
const initialState: UserState = {
    name: '',
    age: 0,
    class: 'EL1'
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updateUserData: (state, action: PayloadAction<UserState>) => {
            console.log('userData', action.payload)
            state = action.payload;
        },

        remove: (state) => {
            state = initialState
        }


    },
})

export const { updateUserData, remove } = userSlice.actions
export default userSlice.reducer