import React from "react";
import "./css/CanvasContainer.css";
import Canvas from "./Canvas";
import CanvasEditor from "./CanvasEditor";
const CanvasContainer = () => {
  return (
    <div className="canvas-container">
      <div className="canvas-menu">
        <div className="canvas-menu-L">
          <div>New</div>
          <div>Copy</div>
          <div>Delete</div>
          <div>GridView</div>
        </div>
        <div className="canvas-menu-R">
          <div>Download</div>
          <div>Save</div>
        </div>
      </div>
      <div className="canvas-box">
        <div className="canvas-page">
          <Canvas />
        </div>
        <div className="canvas-editor">
          <CanvasEditor />
        </div>
      </div>
    </div>
  );
};

export default CanvasContainer;
