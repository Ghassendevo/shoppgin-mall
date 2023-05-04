import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data:[],
    loading : true,
}
export const fetchBoutiques = createAsyncThunk('boutiques/fetchBoutiques', async() => {
    try {
        const response = await axios.get("http://localhost:9006/api/Boutiques")
        return response.data
    } catch (err) {
        return err.message;
    }
})

const boutiquesSlice = createSlice({
    name:"boutiques",
    initialState,
    reducers:{
      getAllBoutiques:{
        reducer(state,action){
            // state.data = action.payload,
            // state.loading = false
        },
        prepare(data){
            return{
                payload:data,
            }
        }
      }
    },
    extraReducers(builder){
        builder.addCase(fetchBoutiques.fulfilled,(state,action)=>{
            state.data = action.payload,
            state.loading = false
        })
    }
})
export const {getAllBoutiques} = boutiquesSlice.actions;
export default boutiquesSlice.reducer;