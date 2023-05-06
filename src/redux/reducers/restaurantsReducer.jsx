import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data:[],
    loading : true,
}
export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async() => {
    try {
        const response = await axios.get("http://localhost:9006/api/restaurants")
        return response.data
    } catch (err) {
        return err.message;
    }
})

const restaurantSlice = createSlice({
    name:"restaurants",
    initialState,
    reducers:{
      getAllRestaurants:{
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
        builder.addCase(fetchRestaurants.fulfilled,(state,action)=>{
            state.data = action.payload,
            state.loading = false
        })
    }
})
export const {getAllRestaurants} = restaurantSlice.actions;
export default restaurantSlice.reducer;