import React from "react";
import PreTitle from "../../components/PreTitle/PreTitle";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import Mission from "./Mission/Mission";
import Principals from "./Principals/Principals";
import About from "./About/About";

const Home = () => {
  return (
    <div className="home_page">
      <Hero />
      <Intro />
      <Mission />
      <Principals />
      <About />
    </div>
  );
};

export default Home;
