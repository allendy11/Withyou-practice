import React from "react";
import "./css/Footer.css";
import github_logo from "../images/github.png";
import LinkToGitHub from "./LinkToGithub";
const Footer = () => {
  const front = [
    { github: "nick0726", name: "김남현" },
    { github: "Melona0105", name: "박덕원" },
  ];
  const back = [
    { github: "onniseonmi", name: "최선미" },
    { github: "allendy11", name: "윤대희" },
  ];
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-title">
          <span>Made by</span>
          <span>Withyou</span>
        </div>
      </div>
      <div className="footer-box">
        <div className="footer-github">
          <a
            href="https://github.com/codestates/Withyou"
            rel="noreferrer"
            target="_blank"
          >
            <div className="github-logo">
              <img src={github_logo} alt="github_logo"></img>
            </div>
            <span>Github</span>
          </a>
        </div>
        <div className="footer-developer">
          <div className="developer-row">
            {front.map((el, idx) => (
              <LinkToGitHub key={idx} github={el.github} name={el.name} />
            ))}
          </div>
          <div className="developer-row">
            {back.map((el, idx) => (
              <LinkToGitHub key={idx} github={el.github} name={el.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
