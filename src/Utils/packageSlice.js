import { createSlice } from "@reduxjs/toolkit";

const packageSlice = createSlice({
    name:"packages",
    initialState:[],
    reducers:{
        setPackageData:(state,action)=>{
            return action.payload
        }
    }
})

export const {setPackageData}= packageSlice.actions;
export default packageSlice.reducer;