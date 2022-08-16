import React from "react";
import SectionHome from "../components/Home/sectionHome";
import SectionServicos from "../components/Home/sectionServicos";
import Slide from "../components/Slide/index";

const PageHome = () => {
  return (
    <>
      <Slide />

      <SectionHome />

      <SectionServicos />
    </>
  );
};

export default PageHome;
