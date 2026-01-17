import React, { useState } from "react";
import "./Mission.css";
import PreTitle from "../../../components/PreTitle/PreTitle";

const Mission = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission:
      "To educate is to make an intervention into the lives of others. When we intervene, we do so with certain assumptions about the value of what we are doing and why. Building students' capacity for future readiness is a moral-ethical learning endeavour and one that cannot be left to chance.",
    vision:
      "To achieve this, Utumishi Girls Academy promotes a progressive, contemporary community of practice committed to providing personalised high quality curriculum, wellbeing and co-curricular programs that enable lifelong learning for every student.",
    values:
      "We are future focused and committed to inspiring our Grammarians and equipping them with the values, knowledge and skills to be ready to make their mark on the world.",
  };

  return (
    <section className="home_mission_section section">
      <div className="home_mission_container container">
        <PreTitle preTitle={"Mission, Vision and Values"} />
        <div className="mission_content two_col_even_header">
          <div className="home_mission_headers">
            <h2
              className={`home_mission_title ${
                activeTab === "mission" ? "active" : ""
              }`}
              onClick={() => setActiveTab("mission")}
            >
              MISSION
            </h2>
            <h2
              className={`home_mission_title ${
                activeTab === "vision" ? "active" : ""
              }`}
              onClick={() => setActiveTab("vision")}
            >
              VISION
            </h2>
            <h2
              className={`home_mission_title ${
                activeTab === "values" ? "active" : ""
              }`}
              onClick={() => setActiveTab("values")}
            >
              VALUES
            </h2>
          </div>
          <div className="home_mission_content">
            <p key={activeTab} className="fade_in_text">
              {content[activeTab]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
