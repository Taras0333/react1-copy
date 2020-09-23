import React from "react";
const RenderMain = (props) => (
  <div className="bottom-container">
    <div className="top-wrap">
      <div className="main-img"></div>
    </div>
    <div className="bot-wrap">
      <div className="bot-items">
        <img className="logo" src={props.mes} />
        <span>482</span>
      </div>
      <div className="bot-items">
        <img className="logo" src={props.share} />
        <span>146</span>
      </div>
      <div className="bot-items">
        <img className="logo" src={props.heart} />
        <span>887</span>
      </div>
      <div className="bot-items">
        <img className="logo" src={props.post} />
      </div>
    </div>
  </div>
);
export default RenderMain;
