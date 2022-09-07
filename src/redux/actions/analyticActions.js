import { ActionTypesAnalytics } from "../constants/actionTypesAnalytics";
import axios from "axios";

//THIS FUNCTION RETURNS THE LAST PING FOR EACH VESSEL
export const fetchAllVesselsConnection = () => async (dispatch) => {
  const response = await axios.get("/api/vessel");
  dispatch({
    type: ActionTypesAnalytics.FETCH_ALL_VESSEL_CONNECTION,
    payload: response.data.ret,
  })
}




