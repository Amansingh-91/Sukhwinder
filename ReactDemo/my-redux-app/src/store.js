import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Components/counter/conterSlice";
import todoReducer from "./Components/todo/todoSlice";
const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo: todoReducer
    }
});

export default store;