import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    data:[],
    loading : true,
}
const boutiquesSlice = createSlice({
    name:"boutiques",
    initialState,
    reducers:{
      getAllBoutiques:{
        reducer(state,action){
            state.data = action.payload,
            state.loading = false
        },
        prepare(data){
            return{
                payload:data,
            }
        }
      }
    }
})
export const {getAllBoutiques} = boutiquesSlice.actions;
export default boutiquesSlice.reducer;