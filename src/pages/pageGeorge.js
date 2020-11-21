import React from "react";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import GeorgeImg from "../pages/img-george.png"
import CardGeorge from "../components/Artistas/Cards/CardGeorge";

const styleIcons = {
  display: "flex",
  justifyContent: " space-between",
  justifyItems: "center",
  alignItems: 'center',
  marginLeft: 15,
  color: "#fff",
};
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


const styleTitle = {
  color: "#fff",
  marginTop: "20px",
};

const image = GeorgeImg;

const SectionGeorge = () => {


  return (
    <>
    <div style={styles}>
      <Parallax bgImage={image} blur={{ min: 1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <Image
              src="/img-george.png"
              alt="George "
              roundedCircle
              className="img-circle"
            />
            <h1 style={styleTitle}> George  </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}> Rapper </p>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <a
                style={styleIcons}
                href="https://www.instagram.com/George oficial/"
                title="Instagram"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a
                style={styleIcons}
                href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag"
                title="Spotify"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-spotify"></i>{" "}
              </a>
              <a
                style={styleIcons}
                href="https://www.facebook.com/George oficial"
                title="Facebook"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-facebook"></i>
              </a>
              <a
                style={styleIcons}
                href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured"
                title="Youtube"
                target="_blank" rel="noopener noreferrer"
              >
                {" "}
                <i class="fab fa-youtube"></i>{" "}
              </a>
            </ul>
          </div>
        </div>
      </Parallax>
    </div>
    <div className="releaseArtista ">
        <h1 style={{ marginBottom: "2%" }}> George </h1>
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
        <CardGeorge />
      </div>
    </>
  );
};

export default SectionGeorge;