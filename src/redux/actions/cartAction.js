import axios from "axios";
import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../constants/cartContants";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:3000/Products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      description: data.description,
      category: data.category,
      brand: data.brand,
      rating: data.rating,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart=(id)=>(dispatch,getState)=>{
  dispatch({type:CART_DELETE_ITEM,payload:id});
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));

}