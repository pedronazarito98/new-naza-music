import React from "react";
import SingleLineGridList from "../Artistas/cardMusic2";

const SectionArtistas = () => {
  return (
    <React.Fragment>
      <div className="w984 overflowFix ">
        
          <SingleLineGridList />
        </div>

        <div className="release">
          <hr />
          <h4>Fonseec</h4>
          <div className="textoregular">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem sIpsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </span>
            <p>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </span>
            </p>
          </div>
          <hr className="linha" />
        </div>
    </React.Fragment>
  );
};
export default SectionArtistas;
