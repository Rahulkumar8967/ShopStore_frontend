//
import api, { API_BASE_URL } from "../../config/apiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "./ActionType";

// Action to fetch products based on filters
export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });

  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("Product data:", data);
    dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.message;
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: errorMessage });
  }
};

// Action to fetch a product by its ID
export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  const { productId } = reqData;

  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("Fetched product data:", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.message;
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: errorMessage });
  }
};

export const createProduct=(product)=>async(dispatch)=>{
  try{
  dispatch({type:CREATE_PRODUCT_REQUEST})
  const {data}=await api.post(`${API_BASE_URL}/api/admin/products`,product.data);

  dispatch({
    type:CREATE_PRODUCT_SUCCESS,
    payload:data,
  })

  }catch(error){
 
    const errorMessage = error.message;
    dispatch({ type:CREATE_PRODUCT_FAILURE, payload: errorMessage });

  }
};

export const deleteProduct=(productId)=>async(dispatch)=>{
  try{
  dispatch({type:DELETE_PRODUCT_REQUEST})
  const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
  console.log("delete product",data);

  dispatch({
    type:DELETE_PRODUCT_SUCCESS,
    payload:productId,
  })

  }catch(error){
 
    const errorMessage = error.message;
    dispatch({ type:CREATE_PRODUCT_FAILURE, payload: errorMessage });

  }
};
