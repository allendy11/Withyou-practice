import React, { useState } from "react";
import "./css/Signup.css";
const Signup = ({ setLoginBtn, setSignupBtn }) => {
  const [errMessage, setErrMessage] = useState("모든 항목은 필수입니다.");
  const handleClick = (e) => {
    if (e.target.id === "signup-btn") {
      setSignupBtn(false);
      setLoginBtn(false);
    }
    if (e.target.id === "toLogin-btn") {
      setSignupBtn(false);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div>Withyou</div>
      </div>
      <div className="signup-box signup-mid">
        <div className="signup-midTop">
          <div>계정 만들기</div>
        </div>
        <div className="signup-midBot">
          <div className="signup-input">
            <input placeholder="Email"></input>
            <label>Email</label>
          </div>
          <div className="signup-input">
            <input placeholder="Username"></input>
            <label>Username</label>
          </div>
          <div className="signup-input">
            <input placeholder="Password"></input>
            <label>Password</label>
          </div>
          <div className="signup-input">
            <input placeholder="Confirm Password"></input>
            <label>Confirm Password</label>
          </div>
        </div>
      </div>
      <div className="signup-box signup-bot">
        <div className="signup-errMessage">{errMessage}</div>
        <div className="signup-button">
          <div id="signup-btn" onClick={(e) => handleClick(e)}>
            시작하기
          </div>
        </div>
        <div className="signup-botBot">
          <span>이미 가입하셨나요?</span>
          <span id="toLogin-btn" onClick={(e) => handleClick(e)}>
            로그인
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
