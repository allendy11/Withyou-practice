import React from "react";
import "./css/Landingpage.css";
import { Link } from "react-router-dom";
import Footer from "components/Footer";

const Landingpage = () => {
  return (
    <div className="landing-container">
      <Link to="/editpage">
        <div id="start">
          <span>Start</span>
        </div>
      </Link>
    </div>
  );
};

export default Landingpage;
