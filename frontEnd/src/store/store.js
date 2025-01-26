import { configureStore } from "@reduxjs/toolkit";
import loanReducer from "./reducers/loanSlice";

export const store = configureStore({
    reducer: {
        loan: loanReducer, // Ensure the key matches the slice name
    },
});
