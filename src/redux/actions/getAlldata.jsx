import axios from "axios";
import { getAllBoutiques } from "../reducers/boutiquesReducer";
export const getBoutiques = () => async(dispatch)=>{
     try{
        let response = await axios.get("http://localhost:9006/api/Boutiques");
        console.log(response.data)
        dispatch(getAllBoutiques(response.data))
        return response.data;
     }catch(e){
        console.log(e)
     }
}
 