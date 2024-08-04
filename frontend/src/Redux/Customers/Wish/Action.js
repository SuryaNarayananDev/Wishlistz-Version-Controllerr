import axios from "axios";


import { API_BASE_URL } from "../../../config/api";
import {
    ADD_ITEM_TO_WISH_REQUEST,
    ADD_ITEM_TO_WISH_SUCCESS,
    ADD_ITEM_TO_WISH_FAILURE,
  GET_WISH_FAILURE,
  GET_WISH_REQUEST,
  GET_WISH_SUCCESS,
  REMOVE_WISH_ITEM_FAILURE,
  REMOVE_WISH_ITEM_REQUEST,
  REMOVE_WISH_ITEM_SUCCESS,
  UPDATE_WISH_ITEM_FAILURE,
  UPDATE_WISH_ITEM_REQUEST,
  UPDATE_WISH_ITEM_SUCCESS,
} from "./ActionType";

export const addItemToWish = (reqData) => async (dispatch) => {
    console.log("req data 1 **",reqData)
  try {
   
    dispatch({ type: ADD_ITEM_TO_WISH_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(`${API_BASE_URL}/api/wish/add`, 
      reqData.data,
      config,
    );
console.log("add item to WISH ",data)
    dispatch({
      type: ADD_ITEM_TO_WISH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_WISH_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getWish = (jwt) => async (dispatch) => {
  try {
    dispatch({ type: GET_WISH_REQUEST });
    const config = {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type":"application/json"
        },
      };
    const { data } = await axios.get(`${API_BASE_URL}/api/wish/`,config);
console.log("WISH ",data)
    dispatch({
      type: GET_WISH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_WISH_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeWishItem = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: REMOVE_WISH_ITEM_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
          "Content-Type":"application/json"
        },
      };
      await axios.delete(`${API_BASE_URL}/api/wish_items/${reqData.wishItemId}`,config);
  
      dispatch({
        type: REMOVE_WISH_ITEM_SUCCESS,
        payload: reqData.wishItemId,
      });
    } catch (error) {
      dispatch({
        type: REMOVE_WISH_ITEM_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const updateWishItem = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_WISH_ITEM_REQUEST });
      const config = {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
          "Content-Type":"application/json"
        },
      };
      const { data } = await axios.get(
        `${API_BASE_URL}/api/wish_items/${reqData.wishItemId}`,
        reqData.data,config
      );
  console.log("udated WISHitem ",data)
      dispatch({
        type: UPDATE_WISH_ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_WISH_ITEM_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  