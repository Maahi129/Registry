import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
    },
    reducers:{
        submit: (state,action) => {
            state.user=action.payload;
        },

        login: (state,action) => {
            state.action=action.payload;
        },

        pdf: (state,action) => {
            state.action=action.payload;
        },

        checkbox: (state,action) => {
            state.action = action.payload;
        },
        edit: (state) => {
            return {
                
               ...state.user
               

                
            }
                
            
        },
        image: (state,action) => {
            state.action = action.payload;
        }

    }
    
})

export const {submit, login, pdf, checkbox, edit, image} = userSlice.actions;


export default userSlice.reducer;

export const selectUser = (state) =>state.user.user;  // user 

export const selectAction = (state) => state.user.action;



