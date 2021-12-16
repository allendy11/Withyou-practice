import React from "react";
import "./css/Canvas.css";
const Canvas = ({ canvasStyle }) => {
  return (
    <div
      id="canvas"
      style={{
        backgroundColor: `${canvasStyle.backgroundColor}`,
        width: `${canvasStyle.width}px`,
        height: `${canvasStyle.height}px`,
      }}
    ></div>
  );
};

export default Canvas;
