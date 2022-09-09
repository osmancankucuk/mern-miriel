import axios from "axios";

const apiEndPoint = "https://mern-miriel.herokuapp.com/posts/";
const apiRegister = "https://mern-miriel.herokuapp.com/users/";

export const fetchPost = async () => await axios.get(apiEndPoint);
export const fetchSinglePost = async (id) =>
  await axios.get(`${apiEndPoint}${id}`);
export const addUser = async (user) => await axios.post(apiRegister, user);
export const fetchUser = async (id) =>
  await axios.get(`https://mern-miriel.herokuapp.com/users/profile/${id}`);
  
// export const userLogin = async (user) =>
//   await axios.post(`${apiRegister}/login`, user).then((res) => {
//     if (res.status) {
//       localStorage.setItem("userToken", res.data.token);
//       console.log(res.data);
//       return res;
//     }
//   });
// export const tokenServerControl =async(token) => await axios.get(`${apiRegister}private`)

