import React from "react";
import iconFavorite from "../assets/icons-save.png";
import iconAdd from "../assets/User_fill_add.png";
import letters from "../assets/letters.png";
import profilePic from "../assets/prfile pic.png";
import iconFavCard from "../assets/Rectangle.png"

const Home = () => {
  return (
    <div className="home-container">
      <header>
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

        <section className="titles">
          <img src={letters} alt="harry potter" />
          <p>Selecciona tu filtro</p>
        </section>
      </header>
      <section className="filter">
        <button className="primary-button">ESTUDIANTES</button>
        <button className="primary-button">STAFF</button>
      </section>
      <section className="cards-container">
        <div className="content-card">
          <div className="card-pic">
            <img src={profilePic} alt="foto personaje" />
          </div>

          <div className="card-info">
            <ul>
              <li>
                <span>VIVO/ESTUDIANTE</span><img src={iconFavCard} alt="icono favorito"/>
              </li>
              <li>
                <h2>Estudiante</h2>
              </li>
              <li>
                <h5>Cumpleaños:</h5>
                <span>31-07-1980</span>
              </li>
              <li>
                <h5>Género:</h5>
                <span>Male</span>
              </li>
              <li>
                <h5>Color de ojos:</h5>
                <span>Green</span>
              </li>
              <li>
                <h5>Color de pelo:</h5>
                <span>Black</span>
              </li>
            </ul>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default Home;
