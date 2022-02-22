import React from 'react';
import iconFavorite from "../assets/icons-save.png";
import iconAdd from "../assets/User_fill_add.png";

const AccionesHeader = () => {
    return (
        <section className="action-header">
        <button className="btn-header">
          FAVORITOS
          <img src={iconFavorite} alt="favorito" />
        </button>
        <button className="btn-header">
          Agregar
          <img src={iconAdd} alt="agregar" />
        </button>
      </section>
    );
};

export default AccionesHeader;