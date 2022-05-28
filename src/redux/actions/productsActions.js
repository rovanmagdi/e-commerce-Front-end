import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL


} from "../constants/productContants";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("http://localhost:3000/Products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: err.message });
  }
};
export const detailsProducts = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST,
    payload:id
  });
  try {
    const { data } = await axios.get(`http://localhost:3000/Products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: err.message });
  }
};
