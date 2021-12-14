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
  joinBtn,
  setJoinBtn,
}) => {
  const handleClick = (e) => {
    if (e.target.id === "Login") {
      setLoginBtn(true);
    }
    if (e.target.id === "Join") {
      setLoginBtn(true);
      setJoinBtn(true);
    }
    if (e.target.id === "Mypage") {
      window.location.assign("/mypage");
    }
    if (e.target.id === "Logout") {
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
          <div id="Login" onClick={(e) => handleClick(e)}>
            Login
          </div>
          <div id="Join" onClick={(e) => handleClick(e)}>
            Join
          </div>
        </div>
      ) : (
        <div className="nav-box nav-menu">
          <div id="Mypage" onClick={(e) => handleClick(e)}>
            Mypage
          </div>
          <div id="Logout" onClick={(e) => handleClick(e)}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
