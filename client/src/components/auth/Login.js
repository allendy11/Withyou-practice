import React, { useState } from "react";
import "./css/Login.css";
import Signup from "./Signup";
const Login = ({ loginBtn, setLoginBtn, signupBtn, setSignupBtn }) => {
  const [errMessage, setErrMessage] = useState(
    "아이디와 비밀번호를 정확히 입력하세요."
  );
  const handleClick = (e) => {
    if (e.target.id === "login-btn") {
      setLoginBtn(true);
    }
    if (e.target.id === "signup-btn") {
      setSignupBtn(true);
    }
    if (e.target.id === "close-btn") {
      setLoginBtn(false);
      setSignupBtn(false);
    }
  };
  return (
    <>
      {signupBtn ? (
        <Signup setLoginBtn={setLoginBtn} setSignupBtn={setSignupBtn} />
      ) : (
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
              <div className="login-errMessage">
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
                <span id="signup-btn" onClick={(e) => handleClick(e)}>
                  가입하기
                </span>
              </div>
            </div>
          </div>
          <div className="login-box login-bot"></div>
        </div>
      )}
      <div id="close-btn" onClick={(e) => handleClick(e)}>
        X
      </div>
    </>
  );
};

export default Login;
