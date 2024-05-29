import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedin :false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login:(state,action)=>{
            
            const {email,password,users} = action.payload;
            users.forEach(user => {
                if(user.email === email.toLowerCase() && user.password === password){
                    state.isLoggedin = true;
                    console.log("login success");
                    return
                }
            });

        },
        logout:(state)=>{
            state.isLoggedin = false;
        }
    }

});

export const {login,logout} = loginSlice.actions;

export default loginSlice.reducer;