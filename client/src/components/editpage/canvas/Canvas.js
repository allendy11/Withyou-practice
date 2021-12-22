import React, { useState, useRef } from "react";
import "./css/Canvas.css";
import { useSelector, useDispatch } from "react-redux";
import { updateElement, chooseElement } from "redux/actions";
const Canvas = ({ canvas, canvasWidth }) => {
  const imageRef = useRef([]);
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.elementReducer);
  const { elements, currentElement } = elementState;
  const [initPos, setInitPos] = useState({ x: "", y: "" });
  const handleClick = (e) => {
    imageRef.current.map((el) => (el.style.border = "unset"));
    imageRef.current[e.target.id].style.border = "1px solid blue";
    // console.log(e.nativeEvent.clientX, e.nativeEvent.clientY);
    // console.log(e.nativeEvent.offsetY, e.nativeEvent.offsetY);
    // console.log(imageRef.current[e.target.id].getBoundingClientRect());
    // imageRef.current[e.target.id].style.top += "+10px";
  };
  const onMouseDown = (e) => {
    dispatch(chooseElement(canvas.id, Number(e.target.id)));
    setInitPos({ x: e.nativeEvent.clientX, y: e.nativeEvent.clientY });
  };
  const onMouseMove = (e) => {
    if (currentElement.id) {
      const idx = elements.findIndex((el) => {
        return el.canvasId == canvas.id && el.id == currentElement.id;
      });
      console.log(currentElement);
      console.log("a");
      if (elements[idx].onSelect) {
        const diff_x = e.nativeEvent.clientX - initPos.x;
        const diff_y = e.nativeEvent.clientY - initPos.y;
        console.log(diff_y);
        imageRef.current[e.target.id].style.top = `${diff_y}px`;
        // imageRef.current[e.target.id].style.left = `${diff_x}px`;
      }
    }
    // console.log(idx);
    // console.log(e.target.id);
    // console.log(element.getBoundingClientRect());
    // console.log(diff_x, diff_y);
    // element.style.top += diff_y;
  };
  const onMouseUp = (e) => {};
  const onMouseOver = (e) => {
    imageRef.current[e.target.id].style.border = "1px solid blue";
  };
  const onMouseOut = (e) => {
    const [element] = elements.filter((el) => {
      return el.id == e.target.id;
    });
    if (!element.onSelect) {
      imageRef.current[e.target.id].style.border = "unset";
    }
  };
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
                  id={ele.id}
                  src={ele.src}
                  alt={ele.type}
                  draggable={false}
                  ref={(elem) => (imageRef.current[ele.id] = elem)}
                  style={{
                    ...ele.style,
                    position: "absolute",
                    boxSizing: "border-box",
                    width: `${(canvasWidth / 760) * ele.style.width}px`,
                    // top: "50%",
                    // left: "50%",
                    // transform: "translate(-50%,-50%)",
                  }}
                  onMouseDown={onMouseDown}
                  onMouseMove={onMouseMove}
                  onMouseUp={onMouseUp}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  onClick={(e) => handleClick(e)}
                ></img>
              );
            } else if (ele.type === "text") {
            }
          })}
      </div>
    </div>
  );
};

export default Canvas;
