import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./Components/counter/conterSlice";
const store = configureStore({
    reducer:{
        counter:counterReducer
    }
});

export default store;