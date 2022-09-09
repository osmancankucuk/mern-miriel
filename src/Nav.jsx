import React from "react";

import axios from "axios";
import "./css/Nav.css";

import "./css/General.css";
const Nav = () => {
  const logoutUser = async () => {
    const authAxios = axios.create({
      baseURL: "http://localhost:5000/users/logout",
    });
    try {
      localStorage.removeItem("userToken");
      const result = await authAxios.get();
      console.log(result?.message);
    } catch (error) {
      console.log(error);
    }
  };
  const token = localStorage.getItem("userToken");
  console.log(token);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  navbar-light  "
        style={{
          height: "7em",
        }}
      >
        <div
          className="container-fluid "
          style={{
            zIndex: "1000",
            position: "fixed",
            background: "white",
            height: "7em",

            color: "white",
          }}
        >
          <h3 className="mt-1">
            <a style={{ color: "#7A4988" }} href="/home">
              Miriel Estate
            </a>
          </h3>
          <div
            className="collapse navbar-collapse mx-1"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="text-decoration-none nav-link active"
                  // style={{ color: "grey" }}
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="text-decoration-none nav-link active"
                  style={{ color: "grey" }}
                  href="/articles"
                >
                  Articles
                </a>
              </li>
            </ul>
            {token !== null && token !== undefined ? (
              <ul
                style={{ listStyleType: "none" }}
                className="d-flex mt-3 me-5"
              >
                <li className="logButton">
                  <a href="/register">
                    <button
                      className="btn btn-outline-primary mx-1"
                      onClick={() => logoutUser()}
                    >
                      Logout
                    </button>
                  </a>
                </li>
              </ul>
            ) : (
              <ul
                style={{ listStyleType: "none" }}
                className="d-flex mt-3 me-5 "
              >
                <li className="logButton">
                  <a href="/register">
                    <button className="btn ">Register</button>
                  </a>
                </li>
                <li className="logButton">
                  <a href={`/login`} className="me-2 ms-1">
                    <button className="btn ">Login</button>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
