import React, { useRef, useEffect } from "react";
import elements from "images/icon/menu_icon/elements.png";
import image from "images/icon/menu_icon/image.png";
import template from "images/icon/menu_icon/template.png";
import text from "images/icon/menu_icon/text.png";
import "./css/EditMenuBar.css";
const EditMenuBar = ({ selectMenu, setSelectMenu }) => {
  const iconRef = useRef([]);
  const handleClick = (e) => {
    iconRef.current.map((el) => (el.style.backgroundColor = "unset"));
    if (e.target.id === "templates-icon") {
      setSelectMenu("templates");
    }
    if (e.target.id === "elements-icon") {
      setSelectMenu("elements");
    }
    if (e.target.id === "image-icon") {
      setSelectMenu("image");
    }
    if (e.target.id === "text-icon") {
      setSelectMenu("text");
    }
  };
  useEffect(() => {
    if (selectMenu === "templates") {
      iconRef.current[0].style.backgroundColor = "blue";
    }
    if (selectMenu === "elements") {
      iconRef.current[1].style.backgroundColor = "blue";
    }
    if (selectMenu === "image") {
      iconRef.current[2].style.backgroundColor = "blue";
    }
    if (selectMenu === "text") {
      iconRef.current[3].style.backgroundColor = "blue";
    }
  }, [selectMenu]);
  return (
    <div className="editMenu-bar">
      <div
        id="templates-icon"
        className="editMenu-icon"
        ref={(el) => (iconRef.current[0] = el)}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src={template} alt="template-icon"></img>
      </div>
      <div
        id="elements-icon"
        className="editMenu-icon"
        ref={(el) => (iconRef.current[1] = el)}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src={elements} alt="elements-icon"></img>
      </div>
      <div
        id="image-icon"
        className="editMenu-icon"
        ref={(el) => (iconRef.current[2] = el)}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src={image} alt="image-icon"></img>
      </div>
      <div
        id="text-icon"
        className="editMenu-icon"
        ref={(el) => (iconRef.current[3] = el)}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src={text} alt="text-icon"></img>
      </div>
    </div>
  );
};

export default EditMenuBar;
