import React from "react";
import iconFavorite from "../assets/icons-save.png";
import iconAdd from "../assets/User_fill_add.png";
import letters from "../assets/letters.png";
import profilePic from "../assets/prfile pic.png";
import iconFavCard from "../assets/Rectangle.png";

const Home = () => {
  return (
    <div className="home-container">
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
      <header>
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
              <section className="card-header">
                <li className="state-student">
                  <span>VIVO/ESTUDIANTE</span>
                  <img src={iconFavCard} alt="icono favorito" />
                </li>
                <li>
                  <h3>Estudiante</h3>
                </li>
              </section>
              <section className="card-form">
                <li className="info-container">
                  <p className="clave">Cumpleaños:</p>
                  <span>31-07-1980</span>
                </li>
                <li className="info-container">
                  <p className="clave">Género:</p>
                  <span>Male</span>
                </li>
                <li className="info-container">
                  <p className="clave">Color de ojos:</p>
                  <span>Green</span>
                </li>
                <li className="info-container">
                  <p className="clave">Color de pelo:</p>
                  <span>Black</span>
                </li>
              </section>
            </ul>
          </div>
        </div>
        <div className="content-card">
          <div className="card-pic">
            <img src={profilePic} alt="foto personaje" />
          </div>

          <div className="card-info">
            <ul>
              <li className="state-student">
                <span>VIVO/ESTUDIANTE</span>
                <img src={iconFavCard} alt="icono favorito" />
              </li>
              <li>
                <h3>Estudiante</h3>
              </li>
              <section className="card-form">
                <li className="info-container">
                  <p className="clave">Cumpleaños:</p>
                  <span>31-07-1980</span>
                </li>
                <li className="info-container">
                  <p className="clave">Género:</p>
                  <span>Male</span>
                </li>
                <li className="info-container">
                  <p className="clave">Color de ojos:</p>
                  <span>Green</span>
                </li>
                <li className="info-container">
                  <p className="clave">Color de pelo:</p>
                  <span>Black</span>
                </li>
              </section>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
