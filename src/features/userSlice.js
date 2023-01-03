import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
    },
    reducers:{
        submit: (state,action) => {
            state.user=action.payload;
        }
    }
    
})

export const {submit} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state) =>state.user.user;  // user 