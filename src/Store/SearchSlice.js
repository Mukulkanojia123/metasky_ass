import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState :{
        searchtext : ""
    },
    reducers :{
        setSearch : (state,action)=>{
            state.searchtext = action.payload;

        }
    }
})
 export const {setSearch} = searchSlice.actions;
export default searchSlice.reducer;