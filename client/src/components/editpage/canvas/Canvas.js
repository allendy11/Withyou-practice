import React, { useState, useRef } from "react";
import "./css/Canvas.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateElement,
  selectOnElement,
  selectOffElement,
  moveOnElement,
  moveOffElement,
} from "redux/actions";
const Canvas = ({ canvas, canvasWidth }) => {
  const [moveOn, setMoveOn] = useState(false);
  const [initMousePos, setInitMousePos] = useState({ x: "", y: "" });
  const [initDiffPos, setInitDiffPos] = useState({ x: "", y: "" });
  const [initElementPos, setInitElementPos] = useState({ top: "", left: "" });
  const canvasRef = useRef();
  const imageRef = useRef([]);
  const dispatch = useDispatch();
  const elementState = useSelector((state) => state.elementReducer);
  const { elements, currentElement } = elementState;
  const onMouseDown = (e) => {
    setMoveOn(true);
    // type1
    // setInitDiffPos({
    //   x:
    //     e.nativeEvent.clientX -
    //     imageRef.current[e.target.id].getBoundingClientRect().left,
    //   y:
    //     e.nativeEvent.clientY -
    //     imageRef.current[e.target.id].getBoundingClientRect().top,
    // });

    //type2
    setInitMousePos({
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    });
    const [element] = elements.filter((el) => {
      return el.canvasId == canvas.id && el.id == e.target.id;
    });
    if (element.style.top && element.style.left) {
      const { top, left } = element.style;
      console.log(top, left);
      setInitElementPos({
        top,
        left,
      });
    } else {
      setInitElementPos({
        top:
          canvasRef.current.offsetHeight / 2 -
          imageRef.current[e.target.id].offsetHeight / 2,
        left:
          canvasRef.current.offsetWidth / 2 -
          imageRef.current[e.target.id].offsetWidth / 2,
      });
    }
  };
  const onMouseMove = (e) => {
    if (moveOn) {
      // type1 마우스 최종 위치에 따라 엘리먼트 위치변경 (엘리먼트 안에서의 마우스 위치 저장)
      // const top =
      //   e.nativeEvent.clientY -
      //   initDiffPos.y -
      //   canvasRef.current.getBoundingClientRect().top;
      // const left =
      //   e.nativeEvent.clientX -
      //   initDiffPos.x -
      //   canvasRef.current.getBoundingClientRect().left;
      // imageRef.current[e.target.id].style.top = `${top}px`;
      // imageRef.current[e.target.id].style.left = `${left}px`;

      // type2: 마우스 처음 위치와 나중위치의 차이만큼 엘리먼트 위치변경 (마우스 이동량 저장)
      const diff_x = e.nativeEvent.clientX - initMousePos.x;
      const diff_y = e.nativeEvent.clientY - initMousePos.y;
      const top = initElementPos.top + diff_y;
      const left = initElementPos.left + diff_x;
      imageRef.current[e.target.id].style.top = `${top}px`;
      imageRef.current[e.target.id].style.left = `${left}px`;
      dispatch(
        updateElement(canvas.id, Number(e.target.id), {
          top,
          left,
        })
      );
    }
  };
  const onMouseUp = (e) => {
    setMoveOn(false);
  };
  const onMouseOver = (e) => {};
  const onMouseOut = (e) => {
    // setMoveOn(false);
  };
  const handleClick = (e) => {};
  return (
    <div
      id={canvas.id}
      className="canvas"
      ref={canvasRef}
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
                  ref={(el) => (imageRef.current[ele.id] = el)}
                  style={{
                    ...ele.style,
                    position: "absolute",
                    boxSizing: "border-box",
                    width: `${(canvasWidth / 760) * ele.style.width}px`,
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
