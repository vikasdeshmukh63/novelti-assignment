import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false
    },
    // reducer to set loading value
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer; 