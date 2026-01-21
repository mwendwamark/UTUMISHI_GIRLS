import React from "react";
import PreTitle from "../../components/PreTitle/PreTitle";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import Mission from "./Mission/Mission";
import Principals from "./Principals/Principals";

const Home = () => {
  return (
    <div className="home_page">
      <Hero />
      <Intro />
      <Mission />
      <Principals />
    </div>
  );
};

export default Home;
