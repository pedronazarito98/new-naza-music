import React from "react";
import { Image } from "react-bootstrap";
import "./banner.css";
import { Parallax } from "react-parallax";
import fonseecImg from "../images/fonseec-card3.png";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  
};

const styleIcons = {
  display: "flex",
  justifyItems: "center",
  alignItems: 'center',
  marginLeft: 15,
  color: "#fff",
};
const styleTitle = {
  color: "#fff",
  marginTop: '20px',
}
const image = fonseecImg;

function Banner() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src="/fonseec-card3.png"
              alt="Fonseec"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Fonseec </h1>
            <p style={{color: "#fff", fontSize:"20px"}}> Rapper </p>
            <ul style={{display:"flex", justifyContent:"center"}} >
          <a
            style={styleIcons}
            href="https://www.instagram.com/fonseecoficial/"
            title="Instagram"
          >
            {" "}
            <i class="fab fa-instagram"></i>
          </a>
          <a
            style={styleIcons}
            href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag"
            title="Spotify"
          >
            {" "}
            <i class="fab fa-spotify"></i>{" "}
          </a>
          <a
            style={styleIcons}
            href="https://www.facebook.com/fonseecoficial"
            title="Facebook"
          >
            {" "}
            <i class="fab fa-facebook"></i>
          </a>
          <a
            style={styleIcons}
            href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
            title="Youtube"
          >
            {" "}
            <i class="fab fa-youtube"></i>{" "}
          </a>
        </ul>
          </div>
        </div>
        
      </Parallax>
    </div>
  );
}

export default Banner;
