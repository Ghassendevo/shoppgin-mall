import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import boutiquesSlice from "./reducers/boutiquesReducer";
import restaurantsSlice from "./reducers/restaurantsReducer";
import loisirsSlice from "./reducers/loisirReducer";
export const store = configureStore({
    reducer: {
        boutiques: boutiquesSlice,
        restaurants: restaurantsSlice,
        loisirs:loisirsSlice,
    }
})
