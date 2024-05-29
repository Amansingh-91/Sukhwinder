import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[]
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const newUser ={};
            const data = action.payload;
            newUser.email = data.email.toLowerCase();
            newUser.password = data.password;
            newUser.name = data.name
            state.users = [...state.users,newUser];
            console.log(state.users);
        }
    }

});

export const {addUser} = signupSlice.actions;

export default signupSlice.reducer;