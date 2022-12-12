import React from "react";
import dynamic from "next/dynamic";

const LazyModel = dynamic(() => import("../components/Model"), { ssr: false });

const ThreeDModel = () => {
  return (
    <div>
      <div className="row container-fluid p-left-right-0 m-left-right-0">
        <h1>3D Model Viewer</h1>
        <h2>
          <a href="https://modelviewer.dev/"> Model Viewer Lib</a>
        </h2>

        <LazyModel />
      </div>
    </div>
  );
};

export default ThreeDModel;
