import React from "react";
import "./Hero.css";
import homeHero from "../../../assets/home/HomeHero.webp";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="home_hero_section">
      <div className="home_hero_bg">
        <img src={homeHero} alt="Utumishi Girls Academy" />
      </div>
      <div className="home_hero_overlay"></div>

      <div className="home_hero_content container">
        <div className="hero_title_contents">
          <h1 className="hero_title">
            UTUMISHI GIRLS <br /> ACADEMY
          </h1>
          <p className="hero_subtitle"> Greatness In Humility</p>
          <div className="home_hero_buttons">
            <button className="btn btn_outline_white">Explore More</button>
            <NavLink to="/" className="btn hero_btn_kcse">
              KCSE 2025
              <FaArrowRight />
            </NavLink>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll_indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="scroll_text">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
