import React, { useState } from "react";
import iconClose from "../assets/iconclose.png";

export const ModalContent = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    hogwartsStudent: "",
    image: "",
    house: "",
    alive: "",
  });

  const handleChange = (target) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };
  // const endPoint= (e)=>{
  //   if(e.currentTarget.dataset.radio)
  // }
  const API = `https://api-eromexico.herokuapp.com/students`;
  const handlePostData = async () => {
    const location = window.location.hostname;

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(API, settings);
      const data = await fetchResponse.json();
      console.log("data", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="modal-shadow">
      <div className="modal-container">
        <div className="modal-title">
          <p>Agrega un personaje</p>
          <img src={iconClose} alt="icon close" onClick={onClose} />
        </div>
        <form onSubmit={handlePostData}>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="name">NOMBRE</label>
              <input id="name" type="text" onChange={handleChange} required />
            </section>
            <section className="section-div">
              <label htmlFor="cumpleanos">CUMPLEAÑOS</label>
              <input
                id="cumpleanos"
                type="text"
                onChange={handleChange}
                required
              />
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="ojos">COLOR DE OJOS</label>
              <input id="ojos" type="text" onChange={handleChange} required />
            </section>
            <section className="section-div">
              <label htmlFor="pelo">COLOR DE PELO</label>
              <input id="pelo" type="text" onChange={handleChange} required />
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="genero">GENERO</label>

              <div className="form-radio">
                <input
                  className="radio"
                  id="genero1"
                  type="radio"
                  value="Mujer"
                  onChange={handleChange}
                />
                Mujer
                <input
                  className="radio"
                  id="genero2"
                  type="radio"
                  value="Hombre"
                  onChange={handleChange}
                />
                Hombre
              </div>
            </section>
            <section className="section-div">
              <label htmlFor="genero">POSICION</label>

              <div className="form-radio">
                <input
                  className="radio"
                  id="posicion"
                  type="radio"
                  value="Estudiante"
                  onChange={handleChange}
                  // data-radio="students"
                />
                Estudiante
                <input
                  className="radio"
                  id="posicion"
                  type="radio"
                  value="Staff"
                  onChange={handleChange}
                  // data-radio="staff"
                />
                Staff
              </div>
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="foto">FOTOGRAFIA</label>
              <input id="FOTO" type="url" onChange={handleChange} required />
            </section>
            <section className="section-div">
              <label htmlFor="estado">ESTADO</label>

              <div className="form-radio">
                <input
                  className="radio"
                  id="estado"
                  type="radio"
                  value="Vivo"
                  onChange={handleChange}
                />
                Vivo
                <input
                  className="radio"
                  id="estado1"
                  type="radio"
                  value="Muerto"
                  onChange={handleChange}
                />
                Muerto
              </div>
            </section>
          </div>
          <section className="section-div">
            <label htmlFor="casa">CASA</label>

            <div className="form-radio">
              <input
                className="radio"
                id="casa"
                type="radio"
                value="Gryffindor"
                onChange={handleChange}
              />
              Gryffindor
              <input
                className="radio"
                id="casa1"
                type="radio"
                value="Slytherin"
                onChange={handleChange}
              />
              Slytherin
              <input
                className="radio"
                id="casa2"
                type="radio"
                value="Ravenclaw"
                onChange={handleChange}
              />
              Ravenclaw
              <input
                className="radio"
                id="casa3"
                type="radio"
                value="Hufflepuff"
                onChange={handleChange}
              />
              Hufflepuff
            </div>
          </section>

          <section className="content-btn">
            <button
              type="submit"
              className="primary-button"
              onClick={() => console.log("clicking")}
            >
              GUARDAR
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
