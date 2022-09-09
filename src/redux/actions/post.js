import * as types from "./types";
import * as api from "../../api/index";

export const fetchPosts = () => async (dispatch) => {
  const { data } = await api.fetchPost();

  try {
    dispatch({
      type: types.FETCH_POSTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const fetchSinglePost = (id) => async (dispatch) => {
  const { data } = await api.fetchSinglePost(id);
  try {
    dispatch({
      type: types.FETCH_SINGLE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addUser = (user) => async (dispatch) => {
  const { userData } = await api.addUser(user);
  try {
    dispatch({
      type: types.ADD_USER,
      payload: userData,
    });
  } catch (error) {
    console.log(error);
  }
};
export const fetchUser = (id) => async (dispatch) => {
  const userDatas = await api.fetchUser(id);

  try {
    dispatch({
      type: types.LOGIN_USER,
      payload: userDatas.data,
    });
  } catch (error) {
    console.log(error);
  }
};
