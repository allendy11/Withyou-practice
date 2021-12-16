import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./css/MenuElements.css";
const MenuElements = () => {
  const state = useSelector((state) => state.adminReducer);
  const { adminElements } = state;
  // useEffect(()=> {

  // },[]) //서버에서 엘리먼트 주소를 받아오도록 해야함 현재는 더미주소

  return (
    <div className="elements-container">
      <div className="elements-top">
        <div className="elements-title">elements</div>
        <div className="elements-addBtn">Add</div>
      </div>
      <div className="elements-contents">
        {adminElements.map((el) => (
          <div className="element-image">
            <img
              src={require(`images/elements/${el.src}`).default}
              alt={el.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuElements;
