import React, { useState } from "react";
import "./css/EditMenuContainer.css";
import EditMenuBar from "./EditMenuBar";
import EditMenuContents from "./EditMenuContents";
const EditMenuContainer = () => {
  const [selectMenu, setSelectMenu] = useState("elements");
  return (
    <div className="editMenu-container">
      <EditMenuBar selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
      <EditMenuContents selectMenu={selectMenu} />
    </div>
  );
};

export default EditMenuContainer;
