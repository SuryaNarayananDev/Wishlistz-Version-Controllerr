import {
  ADD_ITEM_TO_WISH_FAILURE,
  ADD_ITEM_TO_WISH_REQUEST,
  ADD_ITEM_TO_WISH_SUCCESS,
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

const initialStatewish = {
  wish: null,
  loading: false,
  error: null,
  wishItems: [],
};

const wishReducer = (state = initialStatewish, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISH_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_ITEM_TO_WISH_SUCCESS:
      return {
        ...state,
        wishItems: [...state.wishItems, action.payload.wishItems],
        loading: false,
      };
    case ADD_ITEM_TO_WISH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_WISH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_WISH_SUCCESS:
      return {
        ...state,
        wishItems: action.payload.wishItems,
        wish:action.payload,
        loading: false,
      };
    case GET_WISH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case REMOVE_WISH_ITEM_REQUEST:
    case UPDATE_WISH_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_WISH_ITEM_SUCCESS:
      return {
        ...state,
        wishItems: state.wishItems.filter(
          (item) => item._id !== action.payload
        ),
        loading: false,
      };
    case UPDATE_WISH_ITEM_SUCCESS:
      return {
        ...state,
        wishItems: state.wishItems.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        loading: false,
      };
    case REMOVE_WISH_ITEM_FAILURE:
    case UPDATE_WISH_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default wishReducer;
