import React from "react";
import "./PreTitle.css";

const PreTitle = ({ preTitle }) => {
  return (
    <div className="pre_title">
      <div className="police_colors">
        <div className="police_blue"></div>
        <div className="police_light_blue"></div>
        <div className="police_red"></div>
        <div className="police_yellow"></div>
      </div>
      <div className="pre_title_text">{preTitle}</div>
    </div>
  );
};

export default PreTitle;
