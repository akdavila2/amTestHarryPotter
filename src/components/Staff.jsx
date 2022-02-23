import React from "react";
import iconFavCard from "../assets/Rectangle.png";

const Staff = ({ staff }) => {
    const casa = {
        gryffindor: "gryffindor",
        slytherin: "slytherin",
        ravenclaw: "ravenclaw",
        hufflepuff: "hufflepuff",
      };
      
      const house= staff.house.toLowerCase();
      const cls = `content-card${
        casa[house] ? ` content-card--${house}` : ""
      }`;
  return (
    <div className={cls}>
      <div className="card-pic">
        <img src={`${staff.image}`} alt={`${staff.name}`} />
      </div>
      <div className="card-info">
        <ul>
          <section className="card-header">
            <li className="state-staff">
              <span>
                {`${staff.alive === false ? "MUERTO" : "VIVO"}`}/ STAFF
              </span>
              <img src={iconFavCard} alt="icono favorito" />
            </li>
            <li>
              <h3>{`${staff.name}`}</h3>
            </li>
          </section>
          <section className="card-form">
            <li className="info-container">
              <p className="clave">Cumpleaños:</p>
              <span>{`${staff.dateOfBirth}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Género:</p>
              <span>{`${staff.gender}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Color de ojos:</p>
              <span>{`${staff.eyeColour}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Color de pelo:</p>
              <span>{`${staff.hairColour}`}</span>
            </li>
          </section>
        </ul>
      </div>
    </div>
  );
};

export default Staff;
