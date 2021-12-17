import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setElement, addElement, putElement } from "redux/actions";
import "./css/MenuElements.css";
const MenuElements = () => {
  const state = useSelector((state) => state.adminReducer);
  const { adminElements } = state;
  const canvasState = useSelector((state) => state.canvasReducer);
  const elementState = useSelector((state) => state.elementReducer);
  const { canvas, currentCanvas } = canvasState;
  const { elements, currentElement } = elementState;
  const dispatch = useDispatch();
  const imgRef = useRef([]);
  const handleClick = (e) => {
    const imgId = e.target.id.slice(3);
    dispatch(
      putElement(currentCanvas.id, {
        type: "image",
        src: imgRef.current[imgId].src,
      })
    );
  };
  // useEffect(()=> {

  // },[]) //서버에서 엘리먼트 주소를 받아오도록 해야함 현재는 더미주소
  return (
    <div className="elements-container">
      <div className="elements-top">
        <div className="elements-title">elements</div>
        <div className="elements-addBtn">Add</div>
      </div>
      <div className="elements-contents">
        {adminElements.map((el, idx) => (
          <div
            id={`img${idx}`}
            className="element-image"
            onClick={(e) => handleClick(e)}
          >
            <img
              src={require(`images/elements/${el.src}`).default}
              alt={el.id}
              ref={(el) => (imgRef.current[idx] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuElements;
