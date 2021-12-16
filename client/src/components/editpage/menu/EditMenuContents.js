import React from "react";
import MenuTemplates from "./MenuTemplates";
import MenuElements from "./MenuElements";
import MenuImage from "./MenuImage";
import MenuText from "./MenuText";
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
