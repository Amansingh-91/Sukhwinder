import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Components/counter/conterSlice";
import todoReducer from "./Components/todo/todoSlice";
import signupSliceReducer from "./Components/Ecom/signupSlice";
const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo: todoReducer,
        signup:signupSliceReducer,
    }
});

export default store;