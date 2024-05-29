import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Components/counter/conterSlice";
import todoReducer from "./Components/todo/todoSlice";
import signupSliceReducer from "./Components/Ecom/signupSlice";
import loginSliceReducer from "./Components/Ecom/loginSlice";
const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo: todoReducer,
        signup:signupSliceReducer,
        login:loginSliceReducer,
    }
});

export default store;