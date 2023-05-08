import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data:[],
    loading : true,
}
export const fetchLoisir = createAsyncThunk('loisirs/fetchLoisir', async() => {
    try {
        const response = await axios.get("http://localhost:9006/api/loisirs")
        return response.data
    } catch (err) {
        return err.message;
    }
})

const loisirsSlice = createSlice({
    name:"loisirs",
    initialState,
    reducers:{
      getAllLoisirs:{
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
        builder.addCase(fetchLoisir.fulfilled,(state,action)=>{
            state.data = action.payload,
            state.loading = false
        })
    }
})
export const {getAllLoisirs} = loisirsSlice.actions;
export default loisirsSlice.reducer;