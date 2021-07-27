import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Services />
      <Feedbacks />
    </div>
  );
};

export default Home;
