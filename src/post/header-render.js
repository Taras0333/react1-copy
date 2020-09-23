import React from "react";
const Render = (props) => (
  <div className="top-bar">
    <div className="img-cont"></div>
    <div className="content-wrap">
      <div className="user-info">
        <span className="user">{props.name}</span>
        <div className="check"></div>
        <span className="nick">{props.nick}</span>
        <span className="date">{props.date}</span>
        <div className="header-arrow"></div>
      </div>
      <span className="parag">{props.parag}</span>
    </div>
  </div>
);
export default Render;
