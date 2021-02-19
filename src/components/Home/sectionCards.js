import React, { useState } from "react";
import ImageC from "../Artistas/images/bruno-card.jpg";
import NewCard from "../Card/CardNew";
const SectionCards = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <NewCard title="Noticias" image={ImageC} text="oi" />
      </div>
    </>
  );
};

export default SectionCards;
