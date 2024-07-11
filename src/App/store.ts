import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../Features/Theme/ThemeSlice";
import  { cartSlice } from "../Features/Cart/CartSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch