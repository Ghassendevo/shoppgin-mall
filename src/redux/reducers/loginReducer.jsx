import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState={
    loading :false,
    inlogin : false,
    data:null,
}

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        inlogin(state,action){
            state.inlogin = action.payload
        },
        loginauth(state,action){
            state.inlogin = false,
            state.data = action.payload
        }
    }
})
export const {inlogin,loginauth} = loginSlice.actions;
export default loginSlice.reducer;