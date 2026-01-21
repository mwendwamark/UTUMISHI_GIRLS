import React from "react";
import "./Principals.css";
import PreTitle from "../../../components/PreTitle/PreTitle";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import principalImg from "../../../assets/home/principal.webp";
import schoolImg from "../../../assets/home/HomeHero.webp";

const Principals = () => {
  return (
    <section className="principals_section section">
      <div className="principals_container container">
        <PreTitle preTitle={"Welcome to Utumishi Girls Academy"} />
        <h2 className="principals_heading">A Message from the Principal</h2>

        <div className="principals_content two_col_even_header">
          {/* Left: Image with Offset */}
          <div className="principals_image_wrapper">
            <div className="image_offset"></div>
            <img
              src={schoolImg}
              alt="Utumishi Girls Academy"
              className="principal_img"
            />
          </div>

          {/* Right: Content */}
          <div className="principals_text_content">
            <div className="quote_icon_top">
              <FaQuoteLeft />
              <div className="horizontal_line"></div>
            </div>

            <p className="principal_message">
              "Welcome to Utumishi Girls Academy, a center of excellence where
              we nurture future leaders. Our commitment is to provide a holistic
              education that empowers every girl to achieve her full potential.
              We believe in discipline, hard work, and integrity as the pillars
              of success. Join us in shaping a generation of empowered,
              knowledgeable, and virtuous women ready to serve and lead."
            </p>

            <div className="principal_details">
              <img
                src={principalImg}
                alt="Dr. Pauline Njoroge"
                className="principal_avatar"
              />
              <h4>Dr. Pauline Njoroge - Principal Utumishi Girls</h4>
            </div>

            <div className="quote_icon_bottom">
              <div className="horizontal_line"></div>
              <FaQuoteRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principals;
