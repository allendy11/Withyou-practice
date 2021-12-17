import React from "react";
import "./css/Canvas.css";
import { useSelector } from "react-redux";
const Canvas = ({ canvas, canvasWidth }) => {
  const elementState = useSelector((state) => state.elementReducer);
  const { elements, currentElement } = elementState;
  return (
    <div
      id={canvas.id}
      className="canvas"
      style={{
        backgroundColor: `${canvas.style.backgroundColor}`,
        width: `${canvasWidth}px`,
        height: `${(canvasWidth * 2) / 3}px`,
      }}
    >
      <div id="canvas">
        {elements
          .filter((el) => el.canvasId === canvas.id)
          .map((ele) => {
            if (ele.type === "image") {
              return (
                <img
                  src={ele.src}
                  alt={ele.type}
                  style={{
                    ...ele.style,
                    width: `${canvasWidth * 0.2}px`,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                ></img>
              );
            } else if (ele.type === "text") {
            }
          })}
      </div>
      {console.log(elements, currentElement)}
    </div>
  );
};

export default Canvas;
