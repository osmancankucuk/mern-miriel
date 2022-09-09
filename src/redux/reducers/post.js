import * as types from "../actions/types";

const initialState = {
  posts: [],
  currentPost: null,
  users: [],
  loginUser: null,
  loginUserData: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return { ...state, posts: action.payload };
    case types.FETCH_SINGLE_POST:
      return { ...state, currentPost: action.payload };
    case types.ADD_USER:
      return { ...state, users: action.payload };
    case types.LOGIN_USER:
      return { ...state, loginUser: action.payload };
    // case types.FETCH_USER:
    //   return { ...state, loginUserData: action.payload };
    default:
      return { ...state };
  }
};

export default postReducer;
