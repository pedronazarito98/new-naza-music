import React from "react";
import { Image } from "react-bootstrap";
import '../components/Artistas/Banner/banner.css'
import  {Parallax}  from "react-parallax";
import TadeuImg from '../components/Artistas/images/tadeuSlide3.png';
import CardTadeu from '../components/Artistas/Cards/CardTadeu'
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
const image = TadeuImg;

function BannerTadeu() {
  return (
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src={TadeuImg}
              alt="Tadeu Franco"
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> Tadeu Franco </h1>
            <p style={{color: "#fff", fontSize:"20px"}}> Cantor </p>
            <ul style={{display:"flex", justifyContent:"center"}} >
          <a
            style={styleIcons}
            href="https://www.instagram.com/tadeufrancooficial/"
            title="Instagram"
            target="_blank" rel="noopener noreferrer"
          >
            {" "}
            <i class="fab fa-instagram"></i>
          </a>
          <a
            style={styleIcons}
            href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
            title="Spotify"
            target="_blank" rel="noopener noreferrer"
          >
            {" "}
            <i class="fab fa-spotify"></i>{" "}
          </a>
          <a
            style={styleIcons}
            href="https://open.spotify.com/artist/5dkV6Utwjf4MjWWNlsKWfp?autoplay=true"
            title="Facebook"
            target="_blank" rel="noopener noreferrer"
          >
            {" "}
            <i class="fab fa-facebook"></i>
          </a>
          <a
            style={styleIcons}
            href="https://www.youtube.com/channel/UCsrIo0Rq5jnGtzAH5BeOErw"
            title="Youtube"
            target="_blank"  rel="noopener noreferrer"
          >
            {" "}
            <i class="fab fa-youtube"></i>{" "}
          </a>
        </ul>
          </div>
        </div>
      </Parallax>
      <div className="releaseArtista ">
        <h1 style={{ marginBottom: "2%" }}> Tadeu Franco </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem sIpsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div
        style={{ width: "auto", height: "300px", backgroundColor: "#dcdcdc" }}
      >
        <h1
          style={{
            margin: "0 auto 2% auto",
            width: "200px",
            paddingTop: "2rem",
            paddingBottom: "0.5%",
            borderBottom: "2px solid #d20020 ",
          }}
        >
          {" "}
          Discografia{" "}
        </h1>
          <CardTadeu />
      </div>
    </div>
  );
}

export default BannerTadeu;
