import React, { useState, useCallback } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


const LoggedUserPage = () => {
  const [users, setUser] = useState([]);
  const navigateAndDelToken = () => {
    localStorage.removeItem("userToken");
    window.location.replace(
      "https://stunning-bienenstitch-c89b8e.netlify.app/posts"
    );
  };

  const userToken = localStorage.getItem("userToken");
  const authAxios = axios.create({
    baseURL: "https://mern-miriel.herokuapp.com/users/private",
    headers: {
      auth: `Bearer ${userToken}`,
    },
  });

  const fetchData = useCallback(async () => {
    try {
      const result = await authAxios.get();
      setUser(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("userToken");
    }
  });

  return (
    <>
      {console.log(userToken)}
      <button
        onClick={() => {
          fetchData();
        }}
      >
        show Data
      </button>
      {console.log(users?.success)}
      {users.success === true && <Navigate to={users.payload.id} />}
      {users.success === false && navigateAndDelToken()}
    </>
  );
};

export default LoggedUserPage;
