import React from "react";
import "./MeetFuture.css";
import PreTitle from "../../../components/PreTitle/PreTitle";

const MeetFuture = () => {
  return (
    <section className="meet_future_section section">
      <div className="meet_future_container container">
        <div className="meet_future_headers two_col_even_header">
          <div className="meet_future_headers_left section_headers">
            <PreTitle preTitle={"The Ugarians"} />
            <h2 className="meet_future_title section_title">
              Meet the Future Leaders
            </h2>
          </div>

          <div className="meet_future_headers_right">
            <p className="header_desc">
              Utumishi Girls Academy is a beacon of hope and inspiration for
              young girls in Kenya. Our mission is to empower girls with the
              knowledge, skills, and values needed to succeed in life and make a
              positive impact on their communities.
            </p>
          </div>
        </div>

        <div className="meet_future_video">
          <iframe
            src="https://www.youtube.com/embed/_RJYBOahOtw"
            title="video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="700"
            style={{ border: "none" }}
            className="meet_future_video"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MeetFuture;
