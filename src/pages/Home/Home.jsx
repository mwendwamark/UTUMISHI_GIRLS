import React from "react";
import PreTitle from "../../components/PreTitle/PreTitle";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";
import Mission from "./Mission/Mission";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <Mission />
    </div>
  );
};

export default Home;
