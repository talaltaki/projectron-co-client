import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Services />
      <Feedbacks />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
