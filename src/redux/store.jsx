import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import boutiquesSlice from "./reducers/boutiquesReducer";
export const store = configureStore({
    reducer: {
        boutiques: boutiquesSlice,
        
    }
})
