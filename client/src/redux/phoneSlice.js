import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
    name: "phone",
    initialState: {
        phoneData: null
    },
    reducers: {
        // reducer to add the data in phone data 
        addCodes: (state, action) => {
            state.phoneData = action.payload
        }
    }
});

export const { addCodes } = phoneSlice.actions;

export default phoneSlice.reducer;