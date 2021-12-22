import React from "react";
import MenuTemplates from "./MenuTemplates";
import MenuElements from "./MenuElements";
import MenuImage from "./MenuImage";
import MenuText from "./MenuText";
import "./css/EditMenuContents.css";
import { useSelector, useDispatch } from "react-redux";
const EditMenuContents = ({ selectMenu }) => {
  return (
    <div className="editMenu-contents">
      {selectMenu === "templates" && <MenuTemplates />}
      {selectMenu === "elements" && <MenuElements />}
      {selectMenu === "image" && <MenuImage />}
      {selectMenu === "text" && <MenuText />}
    </div>
  );
};

export default EditMenuContents;
