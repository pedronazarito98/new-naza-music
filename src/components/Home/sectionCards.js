import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "../../css/styleCard.scss";
import Modals from "../../pages/news";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SectionCards = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="ModalStyle PaperModal">
      <Modals />
    </div>
  );

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
        <section className="card-container">
          <div className="card-s">
            <div className="card-imag"></div>
            <div className="conteudo">
              <span>01/01/2020</span>

              <h1>News</h1>
              <h2>Conteudo</h2>
            </div>
          </div>
          <div className="card-s">
            <div className="card-imag"></div>
            <div className="conteudo" onClick={handleOpen}>
              <span>01/01/2020</span>
              <h1>News</h1>
              <h2>Conteudo</h2>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              arial-labelledby="simple-modal-title"
              arial-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionCards;
