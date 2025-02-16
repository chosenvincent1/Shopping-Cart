import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    buttonStates: {},
}

export const cartCounterSlice = createSlice({
    name: "cartCounter",
    initialState,
    reducers: {
        cartIncrement: (state) => {
            console.log(state)
            state.value += 1;
        },
        cartDecrement: (state) => {
            state.value -= 1;
        },
        btnDisabled: (state, action) => {
            const itemId = action.payload;
            state.buttonStates[itemId] = true;
        }
    }
})

console.log(cartCounterSlice.reducer.cartIncrement)

export const {cartIncrement, cartDecrement, btnDisabled} = cartCounterSlice.actions;
export default cartCounterSlice.reducer;