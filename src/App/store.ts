import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../Features/Theme/ThemeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch