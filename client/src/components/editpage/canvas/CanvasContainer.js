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
  const { elements, currentElement } = elementState;
  const [canvasWidth, setCanvasWidth] = useState();
  useEffect(() => {
    if (canvasPageRef.current) {
      const canvasWidth = canvasPageRef.current.clientWidth;
      setCanvasWidth((canvasWidth > 950 ? 950 : canvasWidth) * 0.8);
      const currentCanvasId = currentCanvas.id ? currentCanvas.id : 0;
      dispatch(
        setInitialCanvas(currentCanvasId, {
          backgroundColor: "#FFFFFF",
        })
      );
    }
  }, []);
  window.onresize = (e) => {
    const canvasWidth = canvasPageRef.current.clientWidth;
    setCanvasWidth((canvasWidth > 950 ? 950 : canvasWidth) * 0.8);
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
      dispatch(
        addCanvas(currentCanvas.id + 1, {
          backgroundColor: "#FFFFFF",
        })
      );
    }
    if (e.target.id === "copy") {
      dispatch(copyCanvas(currentCanvas.id));
    }
    if (e.target.id === "delete") {
      dispatch(removeCanvas(currentCanvas.id));
      if (canvas.length === 1) {
        const currentCanvasId = currentCanvas.id ? currentCanvas.id : 0;
        dispatch(
          setInitialCanvas(currentCanvasId, {
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
            <Canvas
              canvas={canvas[currentCanvas.id]}
              canvasWidth={canvasWidth}
            />
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
