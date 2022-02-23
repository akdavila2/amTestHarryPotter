import React from "react";
import iconFavCard from "../assets/Rectangle.png";
const Student = ({ student }) => {
  const casa = {
    gryffindor: "gryffindor",
    slytherin: "slytherin",
    ravenclaw: "ravenclaw",
    hufflepuff: "hufflepuff",
  };
  console.log(2, student)
  const house= student.house.toLowerCase();
  const cls = `content-card${
    casa[house] ? ` content-card--${house}` : ""
  }`;
  return (
    <div className={cls}>
      <div className="card-pic">
        <img src={`${student.image}`} alt={`${student.name}`} />
      </div>
      <div className="card-info">
        <ul>
          <section className="card-header">
            <li className="state-student">
              <span>
                {`${student.alive === false ? "MUERTO" : "VIVO"}`}/
                {`${student.name}`}
              </span>
              <img src={iconFavCard} alt="icono favorito" />
            </li>
            <li>
              <h3>{`${student.name}`}</h3>
            </li>
          </section>
          <section className="card-form">
            <li className="info-container">
              <p className="clave">Cumpleaños:</p>
              <span>{`${student.dateOfBirth}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Género:</p>
              <span>{`${student.gender}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Color de ojos:</p>
              <span>{`${student.eyeColour}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Color de pelo:</p>
              <span>{`${student.hairColour}`}</span>
            </li>
          </section>
        </ul>
      </div>
    </div>
  );
};

export default Student;
