import React from "react";
import { ActionTypes } from "../constants/actionTypeVessels";
import axios from "axios";


export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response,
  })
}