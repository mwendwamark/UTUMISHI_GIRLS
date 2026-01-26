import React from "react";
import "./About.css";
import {
  FaMicroscope,
  FaBuilding,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { LuShieldPlus } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import PreTitle from "../../../components/PreTitle/PreTitle";

const About = () => {
  return (
    <section className="home_about_section section">
      <div className="home_about_container container">
        <div className="home_about_top_headers two_col_even_header">
          <div className="home_about_headers section_headers">
            <PreTitle preTitle={"About Utumishi Girls Academy"} />
            <h2 className="home_about_heading">
              The best place for the girl child to be
            </h2>
          </div>

          <div className="home_about_top_content">
            <p className="header_desc">
              Our curriculum focuses on academic excellence, spiritual growth,
              and co-curricular activities to ensure every student reaches her
              full potential.
            </p>
            {/* <NavLink to="/about" className="btn btn_outline_black">
              View More
            </NavLink> */}
          </div>
        </div>

        <div className="home_about_bottom_cards">
          {/* Blue Card */}
          <div className="home_about_card blue_card">
            <FaMicroscope className="card_icon" />

            <div className="home_about_card_contents">
              <h3>Modern Facilities</h3>
              <p>
                We go beyond the syllabus to instill values of integrity,
                service, and self-discipline, grooming the next generation of
                ethical Kenyan women leaders.
              </p>
              <div className="card_arrow_wrapper">
                <FaArrowRight className="card_arrow" />
              </div>
            </div>
          </div>

          {/* Light Blue Card */}
          <div className="home_about_card light_blue_card">
            <FaBuilding className="card_icon" />

            <div className="home_about_card_contents">
              <h3>Holistic Development</h3>
              <p>
                Our curriculum focuses on academic excellence, spiritual growth,
                and co-curricular activities to ensure every student reaches her
                full potential.
              </p>
              <div className="card_arrow_wrapper">
                <FaArrowRight className="card_arrow" />
              </div>
            </div>
          </div>

          {/* Red Card */}
          <div className="home_about_card red_card">
            <LuShieldPlus className="card_icon" />

            <div className="home_about_card_contents">
              <h3>Secure Environment</h3>
              <p>
                We provide a safe, nurturing, and disciplined environment where
                students can focus on their studies and personal growth with
                peace of mind.
              </p>
              <div className="card_arrow_wrapper">
                <FaArrowRight className="card_arrow" />
              </div>
            </div>
          </div>

          {/* Yellow Card */}
          <div className="home_about_card yellow_card">
            <FaUsers className="card_icon" />

            <div className="home_about_card_contents">
              <h3>Dedicated Staff</h3>
              <p>
                Our experienced and committed teachers work tirelessly to
                mentor, guide, and inspire students to achieve excellence in all
                spheres of life.
              </p>
              <div className="card_arrow_wrapper">
                <FaArrowRight className="card_arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
