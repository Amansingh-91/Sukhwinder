import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks : [{id:1,item:"cake",complete:true},{id:2,item:"coke",complete:true},{id:3,item:"chips",complete:false}],

}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add: (state,action)=>{
            const newItem = {id: Date.now(),item:action.payload.item}
            state.tasks = [...state.tasks,newItem]
            // state.tasks = [...state.tasks,action.payload.newItem]

        },
        complete : (state,action)=>{
            const completeId = action.payload.id;
            // console.log(completeId,action.payload);
            const completeItem = state.tasks.map(task =>{
                if(task.id == completeId){
                    task.complete = !task.complete;
                }
                return task;
            });
            state.tasks = completeItem;
        },
        del : (state,action)=>{
            const delId = action.payload.id;
            // console.log(delId);
            const remainingItem = state.tasks.filter(task => task.id != delId);
            state.tasks = remainingItem;
        }
    }
})

export const {add,complete,del} = todoSlice.actions;

export default todoSlice.reducer;