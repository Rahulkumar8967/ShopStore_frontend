import api from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });


  try {
    const { data } = await api.get(`/api/cart/`);
    dispatch({ type: GET_CART_SUCCESS, payload:
       data });
       console.log("cart",data);

  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : "An error occurred while fetching the cart";
    dispatch({ type: GET_CART_FAILURE, payload: errorMessage });
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    const { data } = await api.put("/api/cart/add", {productId:reqData.productId,quantity:1,size:reqData.size});
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    console.log("add item to cart",data);
    
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : "An error occurred while adding the item to the cart";
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: errorMessage });
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.delete(`/api/cart_items/${cartItemId}`);
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : "An error occurred while removing the item from the cart";
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: errorMessage });
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data);
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : "An error occurred while updating the cart item";
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: errorMessage });
  }
};