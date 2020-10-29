import React from "react";
import SingleLineGridList from "../Artistas/cardMusic2";

const SectionArtistas = () => {
  return (
    <React.Fragment>
      <div className="w984 overflowFix ">
        <div className="h40"></div>
        <h1 className="upper">
          <div className="left"> Fonseec </div>
          <a
            className="icon"
            href="https://www.instagram.com/fonseecoficial/"
            title="Instagram"
          >
            {" "}
            <img src="./instagram-icon.png" alt="" />{" "}
          </a>
          <a
            className="icon"
            href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag"
            title="Spotify"
          >
            {" "}
            <img src="./spotify_icon.png" alt="" />{" "}
          </a>
          <a
            className="icon"
            href="https://www.facebook.com/fonseecoficial"
            title="Facebook"
          >
            {" "}
            <img src="./FB_icon.png" alt="" />{" "}
          </a>
          <a
            className="icon"
            href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
            title="Youtube"
          >
            {" "}
            <img src="./youtube_icon.png" alt="" />{" "}
          </a>
          <div className="clear"></div>
        </h1>
        <div>
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
      </div>
    </React.Fragment>
  );
};
export default SectionArtistas;
