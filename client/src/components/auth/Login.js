import React, { useState } from "react";
import "./css/Login.css";
const Login = ({ loginBtn, setLoginBtn }) => {
  const [errMessage, setErrMessage] = useState(
    "아이디와 비밀번호를 정확히 입력하세요."
  );
  const handleClick = (e) => {
    if (e.target.id === "login-btn") {
      console.log("login");
    }
    if (e.target.id === "join-btn") {
      console.log("join");
    }
    if (e.target.id === "close-btn") {
      setLoginBtn(false);
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div>Withyou</div>
      </div>
      <div className="login-box login-mid">
        <div className="login-midTop">
          <div>계정 로그인</div>
        </div>
        <div className="login-midMid">
          <div className="login-input input-email">
            <input placeholder="Email"></input>
            <label>Email</label>
          </div>
          <div className="login-input input-password">
            <input placeholder="Password"></input>
            <label>Password</label>
          </div>
        </div>
        <div className="login-midBot">
          <div className="login-err-message">
            {errMessage ? (
              <div>
                <div>{errMessage}</div>
              </div>
            ) : null}
          </div>
          <div id="login-btn" onClick={(e) => handleClick(e)}>
            로그인
          </div>
          <div>
            <span>처음 오셨나요?</span>
            <span id="join-btn" onClick={(e) => handleClick(e)}>
              가입하기
            </span>
          </div>
        </div>
      </div>
      <div className="login-box login-bot"></div>
      <div id="close-btn" onClick={(e) => handleClick(e)}>
        X
      </div>
    </div>
  );
};

export default Login;
