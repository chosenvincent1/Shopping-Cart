import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

export const itemCounterSlice = createSlice({
    name: 'itemCounter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },

        decrement: (state) => {
            state.value = state.value - 1;
        }
    }
})

export const { increment, decrement } = itemCounterSlice.actions;
export default itemCounterSlice.reducer;