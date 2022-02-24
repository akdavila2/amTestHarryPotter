import React from "react";
import iconFavCard from "../assets/Rectangle.png";
const Card = ({ item }) => {
  const casa = {
    gryffindor: "gryffindor",
    slytherin: "slytherin",
    ravenclaw: "ravenclaw",
    hufflepuff: "hufflepuff",
  };
  const house = item.house.toLowerCase();
  const alive = item.alive;
  let cls = `content-card${casa[house] ? ` content-card--${house}` : ""}`;
  let clsInfo=   (alive) ?  `card-info`: `card-info content-card--alive`;
  console.log(alive);
  return (
    <div className={cls}>
      <div className="card-pic">
        <img src={`${item.image}`} alt={`${item.name}`} />
      </div>
      <div className={clsInfo}>
        <ul>
          <section className="card-header">
            <li className="state-item">
              <span>
                {`${item.alive === false ? "MUERTO" : "VIVO"}`}/ {`${item.hogwartsStudent === false ? "STAFF" : "ESTUDIANTE"}`}
              </span>
              <img src={iconFavCard} alt="icono favorito" />
            </li>
            <li>
              <h3>{`${item.name}`}</h3>
            </li>
          </section>
          <section className="card-form">
            <li className="info-container">
              <p className="clave">Cumpleaños:</p>
              <span>{`${item.dateOfBirth}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Género:</p>
              <span>{`${item.gender}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Color de ojos:</p>
              <span>{`${item.eyeColour}`}</span>
            </li>
            <li className="info-container">
              <p className="clave">Color de pelo:</p>
              <span>{`${item.hairColour}`}</span>
            </li>
          </section>
        </ul>
      </div>
    </div>
  );
};

export default Card;
