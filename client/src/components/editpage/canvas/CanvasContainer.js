import React, { useState, useRef, useEffect } from "react";
import "./css/CanvasContainer.css";
import Canvas from "./Canvas";
import CanvasEditor from "./CanvasEditor";
const CanvasContainer = () => {
  const canvasPageRef = useRef();
  const [canvasPageWidth, setCanvasPageWidth] = useState();
  const [canvasStyle, setCanvasStyle] = useState({
    width: "",
    height: "",
    backgroundColor: "#FFFFFF",
  });
  useEffect(() => {
    if (canvasPageRef.current) {
      const canvasWidth = canvasPageRef.current.clientWidth;
      setCanvasStyle({
        ...canvasStyle,
        width: (canvasWidth > 950 ? 950 : canvasWidth) * 0.8,
        height: ((canvasWidth > 950 ? 950 : canvasWidth) * 0.8 * 2) / 3,
      });
    }
  }, []);
  window.onresize = (e) => {
    if (canvasPageRef.current) {
      const canvasWidth = canvasPageRef.current.clientWidth;
      setCanvasStyle({
        ...canvasStyle,
        width: (canvasWidth > 950 ? 950 : canvasWidth) * 0.8,
        height: ((canvasWidth > 950 ? 950 : canvasWidth) * 0.8 * 2) / 3,
      });
    }
  };
  const handleColor = (e) => {
    setCanvasStyle({
      ...canvasStyle,
      backgroundColor: e.target.value,
    });
  };
  return (
    <div className="canvas-container">
      <div className="canvas-menu">
        <div className="canvas-menu-L">
          <div id="colorPicker">
            <input
              type="color"
              value={canvasStyle.backgroundColor}
              onChange={(e) => handleColor(e)}
            ></input>
          </div>
          <div>New</div>
          <div>Copy</div>
          <div>Delete</div>
          <div>GridView</div>
        </div>
        <div className="canvas-menu-R">
          <div>Download</div>
          <div>Save</div>
        </div>
      </div>
      <div className="canvas-box">
        <div className="canvas-page" ref={canvasPageRef}>
          {canvasPageRef.current && <Canvas canvasStyle={canvasStyle} />}
        </div>
        <div className="canvas-editor">
          <CanvasEditor />
        </div>
      </div>
    </div>
  );
};

export default CanvasContainer;
