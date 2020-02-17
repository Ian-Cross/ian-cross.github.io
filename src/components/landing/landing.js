import React from "react";

import { ProjectSlider } from "components";

export function Landing() {
  return (
    <>
      <div className="header-img"></div>
      <div
        id="title-card"
        className="container-fluid full-height flex-center-center"
      >
        <div className="modal-container">
          <h2 className="mg-tp-0 title-container">
            <div className="line-spacer" />
            <span style={{ width: "100%" }}>Ian Cross</span>
            <div className="line-spacer" />
          </h2>
          <h4 className="mg-bt-0">
            Full Stack Developer & Computer Scientist Student
          </h4>
          <h4 className="mg-bt-0 flex-center">
            <div className="line-spacer" />
            <span style={{ width: "100%" }}>Projects</span>
            <div className="line-spacer" />
          </h4>
          <div style={{ marginTop: "10px" }} />
          <ProjectSlider />
        </div>
      </div>
    </>
  );
}
