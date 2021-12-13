import React from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";
const Nav = ({ isLogin, setIsLogin }) => {
  return (
    <div className="nav-container">
      <div className="nav-box">
        <div className="nav-title">
          <Link to="/">
            <span>Withyou</span>
          </Link>
        </div>
      </div>
      {!isLogin ? (
        <div className="nav-box nav-menu">
          <div className="login">
            <span>Login</span>
          </div>
          <div className="join">
            <span>Join</span>
          </div>
        </div>
      ) : (
        <div className="nav-box nav-menu">
          <div className="Mypage">
            <span>Mypage</span>
          </div>
          <div className="Logout">
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
