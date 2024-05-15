import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks : [],

}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add: (state)=>{
          state = [{id:1,item:"cake"}]
        },
        complete : (state)=>{
            state = [{id:3,item:"chips"}]

        },
        del : (state)=>{
            state = [{id:2,item:"coke"}]
        }
    }
})

export const {add,complete,del} = todoSlice.actions;

export default todoSlice.reducer;