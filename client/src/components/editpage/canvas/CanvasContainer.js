import React, { useState, useRef, useEffect } from "react";
import "./css/CanvasContainer.css";
import Canvas from "./Canvas";
import CanvasEditor from "./CanvasEditor";
import { useSelector, useDispatch } from "react-redux";
import canvasReducer from "redux/reducers/canvasReducer";
import {
  setInitialCanvas,
  setStyleCanvas,
  addCanvas,
  removeCanvas,
  copyCanvas,
} from "redux/actions";
const CanvasContainer = () => {
  const dispatch = useDispatch();
  const canvasPageRef = useRef();
  const canvasState = useSelector((state) => state.canvasReducer);
  const elementState = useSelector((state) => state.elementReducer);
  const { canvas, currentCanvas } = canvasState;
  useEffect(() => {
    if (canvasPageRef.current) {
      const currentCanvasId = currentCanvas.id ? currentCanvas.id : 0;
      const canvasWidth = canvasPageRef.current.clientWidth;
      dispatch(
        setInitialCanvas(currentCanvasId, {
          width: (canvasWidth > 950 ? 950 : canvasWidth) * 0.8,
          height: ((canvasWidth > 950 ? 950 : canvasWidth) * 0.8 * 2) / 3,
          backgroundColor: "#FFFFFF",
        })
      );
    }
  }, []);
  window.onresize = (e) => {
    if (canvasPageRef.current) {
      const currentCanvasId = currentCanvas.id ? currentCanvas.id : 0;
      const canvasWidth = canvasPageRef.current.clientWidth;
      dispatch(
        setStyleCanvas(currentCanvasId, {
          width: (canvasWidth > 950 ? 950 : canvasWidth) * 0.8,
          height: ((canvasWidth > 950 ? 950 : canvasWidth) * 0.8 * 2) / 3,
        })
      );
    }
  };
  const handleChange = (e) => {
    dispatch(
      setStyleCanvas(currentCanvas.id, {
        backgroundColor: e.target.value,
      })
    );
  };
  const handleClick = (e) => {
    if (e.target.id === "new") {
      const canvasWidth = canvasPageRef.current.clientWidth;

      dispatch(
        addCanvas(currentCanvas.id + 1, {
          width: (canvasWidth > 950 ? 950 : canvasWidth) * 0.8,
          height: ((canvasWidth > 950 ? 950 : canvasWidth) * 0.8 * 2) / 3,
          backgroundColor: "#FFFFFF",
        })
      );
    }
    if (e.target.id === "copy") {
      dispatch(copyCanvas(currentCanvas.id));
    }
    if (e.target.id === "delete") {
      console.log(currentCanvas.id);
      dispatch(removeCanvas(currentCanvas.id));
      if (canvas.length === 1) {
        const currentCanvasId = currentCanvas.id ? currentCanvas.id : 0;
        const canvasWidth = canvasPageRef.current.clientWidth;
        dispatch(
          setInitialCanvas(currentCanvasId, {
            width: (canvasWidth > 950 ? 950 : canvasWidth) * 0.8,
            height: ((canvasWidth > 950 ? 950 : canvasWidth) * 0.8 * 2) / 3,
            backgroundColor: "#FFFFFF",
          })
        );
      }
    }
    if (e.target.id === "gridview") {
    }
    if (e.target.id === "download") {
    }
    if (e.target.id === "save") {
    }
  };
  return (
    <div className="canvas-container">
      {console.log(canvas, currentCanvas)}
      <div className="canvas-menu">
        <div className="canvas-menu-L">
          <div id="colorPicker">
            <input
              type="color"
              value={
                canvas[currentCanvas.id]
                  ? canvas[currentCanvas.id].style.backgroundColor
                  : "#FFFFFF"
              }
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div>{currentCanvas.id}</div>
          <div
            id="new"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            New
          </div>
          <div
            id="copy"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Copy
          </div>
          <div
            id="delete"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Delete
          </div>
          <div
            id="gridview"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            GridView
          </div>
        </div>
        <div className="canvas-menu-R">
          <div
            id="download"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Download
          </div>
          <div
            id="save"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Save
          </div>
        </div>
      </div>
      <div className="canvas-box">
        <div className="canvas-page" ref={canvasPageRef}>
          {canvas[currentCanvas.id] && (
            <Canvas canvas={canvas[currentCanvas.id]} />
          )}
        </div>
        <div className="canvas-editor">
          <CanvasEditor />
        </div>
      </div>
    </div>
  );
};

export default CanvasContainer;
