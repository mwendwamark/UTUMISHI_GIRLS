import React from "react";
import "./Hero.css";
import homeHero from "../../../assets/home/HomeHero.webp";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="home_hero_section">
      <div className="home_hero_bg">
        <img src={homeHero} alt="Utumishi Girls Academy" />
      </div>
      <div className="home_hero_overlay"></div>

      <div className="home_hero_content container">
        <div className="hero_text_left">
          <h1 className="hero_title">
            UTUMISHI GIRLS <br /> ACADEMY
          </h1>
          <p className="hero_subtitle">Motto: Greatness In Humility</p>
        </div>

       
        <div className="hero_text_right">
          <h3 className="hero_news_title">
            Congratulations to the Class of 2025 on their KCSE Results
          </h3>
          <p className="hero_news_desc">
            Our School Community is extremely proud of all the Grammarians who
            just completed their VCE. With a median ATAR of 94.3, MGGS is ranked
            as the number 1 independent school in Victoria.
          </p>
          <a className="hero_news_footer">KCSE results 2025  <FaArrowRight/></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
