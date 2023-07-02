import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        usersData: null,
        totalItems: 0,
        singleUser: null,
    },
    reducers: {
        // reducer to add the data in users data 
        addUsers: (state, action) => {
            state.usersData = action.payload
        },
        //reducet to set Total item
        setTotalItems: (state, action) => {
            state.totalItems = action.payload
        },
        // reducer to set individual user 
        setUser: (state, action) => {
            state.singleUser = action.payload;
        }
    }
});

export const { addUsers, setTotalItems, setUser } = userSlice.actions;

export default userSlice.reducer;