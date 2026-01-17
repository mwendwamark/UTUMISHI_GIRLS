import React from "react";
import "./Intro.css";
import PreTitle from "../../../components/PreTitle/PreTitle";

const Intro = () => {
  return (
    <section className="intro_section section">
      <div className="intro_container container">
        <div className="intro_content two_col_uneven_header">
          <PreTitle preTitle={"Introduction"} />
          <h2>
            Empowering young women through academic excellence and disciplined
            leadership, Utumishi Girls Academy fosters a nurturing environment
            where every student thrives and succeeds.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;
