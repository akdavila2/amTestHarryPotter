import React from "react";
import iconClose from "../assets/iconclose.png";

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal-title">
        <p>Agrega un personaje</p>
        <img src={iconClose} alt="icon close" />
      </div>
      <form>
        <div className="form-section">
          <section>
            <label for="name">NOMBRE</label>
            <input id="name" type="text" required />
          </section>
          <section>
            <label for="cumpleanos">CUMPLEAÑOS</label>
            <input id="cumpleanos" type="text" required />
          </section>
        </div>
        <div className="form-section">
          <section className="section-div">
            <label for="ojos">COLOR DE OJOS</label>
            <input id="ojos" type="text" required />
          </section>
          <section className="section-div">
            <label for="pelo">COLOR DE PELO</label>
            <input id="pelo" type="text" required />
          </section>
        </div>
        <div className="form-section">
          <section className="section-div">
            <label for="genero">GENERO</label><br />
            <input className="radio" id="genero1" type="radio" value="Mujer" />
            Mujer
            <input className="radio" id="genero2" type="radio" value="Hombre" />
            Hombre
          </section>
          <section className="section-div">
            <label for="genero">POSICION</label><br />
            <input
              className="radio"
              id="posicion"
              type="radio"
              value="Estudiante"
            />
            Estudiante
            <input className="radio" id="posicion" type="radio" value="Staff" />
            Staff
          </section>
        </div>
        <div className="form-section">
          <section className="section-div">
            <label for="casa">CASA</label>
            <br />
            <input
              className="radio"
              id="casa"
              type="radio"
              value="Gryffindor"
            />
            Gryffindor
            <input
              className="radio"
              id="casa1"
              type="radio"
              value="Slytherin"
            />
            Slytherin
            <input
              className="radio"
              id="casa2"
              type="radio"
              value="Ravenclaw"
            />
            Ravenclaw
            <input
              className="radio"
              id="casa3"
              type="radio"
              value="Hufflepuff"
            />
            Hufflepuff
          </section>
          <section className="section-div">
            <label for="estado">ESTADO</label><br />
            <input className="radio" id="estado" type="radio" value="Vivo" />Vivo
            <input className="radio" id="estado1" type="radio" value="Muerto" />Muerto
          </section>
        </div>

        <section >
          <label for="foto">FOTOGRAFIA</label>
          <input id="FOTO" type="url" />
        </section>
        <section className="content-btn">
          <button className="primary-button">GUARDAR</button>
        </section>
      </form>
    </div>
  );
};

export default Modal;
