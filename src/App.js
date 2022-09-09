import React, { useState } from "react";


import CartItem from "./CardItem";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./css/General.css";

import PostDetails from "./PostDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../src/Nav";
import "./css/App.css";
import RegisterUser from "./RegisterUser";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import LoginUser from "./LoginUser";
import LoggedUserPage from "./LoggedUserPage";
import Articles from "./Articles";

import Profile from "./Profile";


const App = () => {
  const [layout, setLayout] = useState(4);
  const userToken = localStorage.getItem("userToken");

  return (
    <>
      <Navbar />

      <div id="main">
        <div className="container-md ">
          <div className="d-flex align-center justify-center">
            <button
              id="gridButton"
              className="btn shadow-none mt-1"
              onClick={() => setLayout(layout === 4 ? 3 : 4)}
              style={{ backgroundColor: layout === 4 ? "white" : "#152F4F" }}
            >
              <FontAwesomeIcon
                style={{ color: layout === 4 ? "#152F4F" : "white" }}
                icon={faBorderAll}
              />
            </button>
          </div>
          {/* <hr /> */}
        </div>

        <div className="row">
          <Routes>
            <Route
              exact
              path="/posts"
              element={<CartItem layout={layout} />}
            ></Route>
            <Route exact path="posts/:id" element={<PostDetails />} />
            <Route exact path="*" element={<Navigate to="/posts" replace />} />
            <Route exact path="/register" element={<RegisterUser />}></Route>
            <Route exact path="/about" element={<AboutUs />}></Route>
            <Route exact path="/login" element={<LoginUser />}></Route>
            <Route exact path="/articles" element={<Articles />}>
              {" "}
            </Route>

            <Route
              // exact
              path="userPage"
              element={<LoggedUserPage />}
            ></Route>
            <Route exact path="userPage/:id" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
