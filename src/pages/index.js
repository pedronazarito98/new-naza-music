import React from "react";
import Slide from "../components/Slide/index";
import SectionHome from "../components/Home/sectionHome";
import SectionCards from "../components/Home/sectionCards";
import SectionServicos from "../components/Home/sectionServicos";

const Home = () => {
  return (
    <>
      <Slide />
      <SectionHome />
      <SectionCards />
      <SectionServicos />
    </>
  );
};

export default Home;
