import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";
import axios from "axios";
axios.default.withCredentials = true;
const server_url = "http://localhost:8080";
const Nav = ({
  isLogin,
  setIsLogin,
  loginBtn,
  setLoginBtn,
  signupBtn,
  setSignupBtn,
}) => {
  const handleClick = (e) => {
    if (e.target.id === "login") {
      setLoginBtn(true);
    }
    if (e.target.id === "signup") {
      setLoginBtn(true);
      setSignupBtn(true);
    }
    if (e.target.id === "mypage") {
      window.location.assign("/mypage");
    }
    if (e.target.id === "logout") {
      try {
        axios({
          url: `${server_url}/user/signout`,
          method: "GET",
        });

        setLoginBtn(false);
        window.location.assign("/");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="nav-container">
      <div className="nav-box nav-title">
        <Link to="/">
          <div id="Withyou">Withyou</div>
        </Link>
      </div>
      {!isLogin ? (
        <div className="nav-box nav-menu">
          <div id="login" onClick={(e) => handleClick(e)}>
            Login
          </div>
          <div id="signup" onClick={(e) => handleClick(e)}>
            Join
          </div>
        </div>
      ) : (
        <div className="nav-box nav-menu">
          <div id="mypage" onClick={(e) => handleClick(e)}>
            Mypage
          </div>
          <div id="logout" onClick={(e) => handleClick(e)}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
