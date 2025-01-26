import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loan: [], // Initial state for loan
};

const loanSlice = createSlice({
    name: "loan",
    initialState, // Ensure initialState is properly set
    reducers: {
        addLoan: (state, { payload }) => {
            state.loan.push(payload);
            console.log(payload);
            
        },
    },
});

export const { addLoan } = loanSlice.actions;

export default loanSlice.reducer;
