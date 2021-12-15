import React from "react";
import "./css/Editpage.css";
import CanvasContainer from "../components/editpage/canvas/CanvasContainer";
import EditMenuContainer from "../components/editpage/menu/EditMenuContainer";
const Editpage = () => {
  return (
    <div className="edit-container">
      <EditMenuContainer />
      <CanvasContainer />
    </div>
  );
};

export default Editpage;
