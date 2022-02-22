import React from 'react';
import profilePic from "../assets/prfile pic.png";
import iconFavCard from "../assets/Rectangle.png";

const Cards = () => {
    return (
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
    );
};

export default Cards;