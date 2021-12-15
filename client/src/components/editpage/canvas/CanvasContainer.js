import React, { useState, useRef, useEffect } from "react";
import "./css/CanvasContainer.css";
import Canvas from "./Canvas";
import CanvasEditor from "./CanvasEditor";
const CanvasContainer = () => {
  const canvasPageRef = useRef();
  const [canvasPageWidth, setCanvasPageWidth] = useState();
  useEffect(() => {
    if (canvasPageRef.current) {
      setCanvasPageWidth(canvasPageRef.current.clientWidth);
    }
  }, []);
  window.onresize = (e) => {
    setCanvasPageWidth(canvasPageRef.current.clientWidth);
  };
  return (
    <div className="canvas-container">
      <div className="canvas-menu">
        <div className="canvas-menu-L">
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
          {canvasPageWidth && <Canvas canvasPageWidth={canvasPageWidth} />}
        </div>
        <div className="canvas-editor">
          <CanvasEditor />
        </div>
      </div>
    </div>
  );
};

export default CanvasContainer;
