import React, { useState } from "react";
import Modal from "./Modal";
import iconFavorite from "../assets/icons-save.png";
import iconAdd from "../assets/User_fill_add.png";

const AccionesHeader = () => {
  const [visible, setVisible] = useState(false);

  const onClose = (event) => {
    event.stopPropagation();
    setVisible(false);
  };
  const handleOption = (event) => {
    event.preventDefault();
    setVisible(true);
  };

  return (
    <section className="action-header">
      <button className="btn-header" data-option="favorito">
        FAVORITOS
        <img src={iconFavorite} alt="favorito" />
      </button>
      <button
        className="btn-header"
        data-option="agregar"
        onClick={handleOption}
      >
        {visible && <Modal onClose={onClose} visible={visible} />}
        Agregar
        <img src={iconAdd} alt="agregar" />
      </button>
    </section>
  );
};

export default AccionesHeader;
