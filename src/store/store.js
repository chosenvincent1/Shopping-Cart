import { configureStore } from "@reduxjs/toolkit";
import itemCounterReducer from "./itemCounterSlice";
import cartCounterReducer from "./cartCounterSlice";

export const store = configureStore({
    reducer: {
        itemCounter: itemCounterReducer,
        cartCounter: cartCounterReducer,
    },
})