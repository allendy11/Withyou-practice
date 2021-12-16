import React from "react";
import "./css/Canvas.css";
const Canvas = ({ canvas }) => {
  return (
    <div
      id={canvas.id}
      className="canvas"
      style={{
        backgroundColor: `${canvas.style.backgroundColor}`,
        width: `${canvas.style.width}px`,
        height: `${canvas.style.height}px`,
      }}
    ></div>
  );
};

export default Canvas;
