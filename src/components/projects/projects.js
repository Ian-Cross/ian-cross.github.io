import React, { useState } from "react";
import { ClickMe } from "./";

export function Projects() {
  let projects = { ClickMe };
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
            <span style={{ width: "100%" }}>Projects</span>
            <div className="line-spacer" />
          </h2>
          <h4 className="mg-bt-0">
            A collection of little do das and things I have put together
          </h4>
          {projects.map(item => {
            return <div>Test</div>;
          })}
        </div>
      </div>
    </>
  );
}
