import { configureStore } from "@reduxjs/toolkit";
import boutiquesSlice from "./reducers/boutiquesReducer";
import restaurantsSlice from "./reducers/restaurantsReducer";
import loisirsSlice from "./reducers/loisirReducer";
import loginSlice from "./reducers/loginReducer";
export const store = configureStore({
    reducer: {
        boutiques: boutiquesSlice,
        restaurants: restaurantsSlice,
        loisirs: loisirsSlice,
        login: loginSlice,
    }
})
