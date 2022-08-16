import React from "react";
import Slide from "../components/Slide/index";
import SectionHome from "../components/Home/sectionHome";
import SectionServicos from "../components/Home/sectionServicos";

const Home = () => {
  return (
    <>
      <Slide />
      <SectionHome />
      <SectionServicos />
    </>
  );
};

export default Home;
