import React from "react";
import "./css/Canvas.css";
const Canvas = ({ canvasPageWidth }) => {
  return (
    <div
      id="canvas"
      style={{
        width: `${canvasPageWidth * 0.8}px`,
        height: `${(canvasPageWidth * 0.8 * 2) / 3}px`,
      }}
    ></div>
  );
};

export default Canvas;
