import React from "react";
import "./css/Canvas.css";
const Canvas = ({ canvasPageWidth }) => {
  const width = canvasPageWidth > 950 ? 950 : canvasPageWidth;
  return (
    <div
      id="canvas"
      style={{
        width: `${width * 0.8}px`,
        height: `${(width * 0.8 * 2) / 3}px`,
      }}
    ></div>
  );
};

export default Canvas;
