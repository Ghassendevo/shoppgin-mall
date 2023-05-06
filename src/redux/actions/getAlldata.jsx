import axios from "axios";
import { getAllBoutiques } from "../reducers/boutiquesReducer";
import { getAllRestaurants } from "../reducers/restaurantsReducer";

export const getBoutiques = () => async (dispatch) => {
   try {
      let response = await axios.get("http://localhost:9006/api/Boutiques");
      dispatch(getAllBoutiques(response.data))
      return response.data;
   } catch (e) {
      console.log(e)
   }
}
export const getRestaurants = () => async (dispatch) => {
   try {
      let response = await axios.get("http://localhost:9006/api/restaurants")
      dispatch(getAllRestaurants(response.data))
      return response.data
   } catch (e) {
      console.log(e)
   }
}
