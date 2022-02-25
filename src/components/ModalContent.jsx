import React, { useState } from "react";
import iconClose from "../assets/iconclose.png";
import axios from "axios";
import unique from "unique";

export const ModalContent = ({ onClose }) => {
  const [form, setForm] = useState({
    id: unique(),
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    hogwartsStudent: null,
    hogwartsStaff: null,
    image: "",
    house: "",
    alive: null,
  });

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
    console.log(form);
  };

  const handlePostData = async (e) => {
    e.preventDefault();
    console.log("estoy aqui")
    const apiUrl = `https://api-eromexico.herokuapp.com/students`;
    await axios
      .post(apiUrl, form)
      .then((response) => {
        const allResponse = response.data;
        console.log('allResponse', allResponse);
        console.log("estoy aqui")
        
      })
      .catch((error) => {
        console.log(error);
      });
      window.location.reload(true)
  };
  //  const attrs = {};
  //  const inComplete=Object.keys(form).find(item=>["", undefined].includes(item))
  //     if (inComplete.length>0) attrs.disabled = true;

  return (
    <div className="modal-shadow">
      <div className="modal-container">
        <div className="modal-title">
          <p>Agrega un personaje</p>
          <img src={iconClose} alt="icon close" onClick={onClose} />
        </div>
        <form >
          <div className="form-section">
            <section className="section-div">
              <label>NOMBRE</label>
              <input name="name" type="text" onChange={handleChange} required />
            </section>
            <section className="section-div">
              <label>CUMPLEAÑOS</label>
              <input
                name="dateOfBirth"
                type="text"
                onChange={handleChange}
                required
              />
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label>COLOR DE OJOS</label>
              <input
                name="eyeColour"
                type="text"
                onChange={handleChange}
                required
              />
            </section>
            <section className="section-div">
              <label>COLOR DE PELO</label>
              <input
                name="hairColour"
                type="text"
                onChange={handleChange}
                required
              />
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label>GENERO</label>

              <div className="form-radio">
                <input
                  className="radio"
                  type="radio"
                  value="female"
                  onChange={handleChange}
                  name="gender"
                  checked={form.gender === "female"}
                />
                Mujer
                <input
                  className="radio"
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={handleChange}
                  checked={form.gender === "male"}
                />
                Hombre
              </div>
            </section>
            <section className="section-div">
              <label>POSICION</label>

              <div className="form-radio">
                <input
                  className="radio"
                  name="hogwartsStudent"
                  type="radio"
                  value={true}
                  onChange={handleChange}
                  checked={form.hogwartsStudent === true}
                />
                Estudiante
                <input
                  className="radio"
                  name="hogwartsStaff"
                  type="radio"
                  value={true}
                  onChange={handleChange}
                  checked={form.hogwartsStaff === true}
                />
                Staff
              </div>
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label>FOTOGRAFIA</label>
              <input name="image" type="url" onChange={handleChange} required />
            </section>
            <section className="section-div">
              <label>Vivo</label>

              <select name="alive" onClick={handleChange}>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </section>
          </div>
          <div className="form-section">
          <section className="section-div">
            <label>CASA</label>

            <select name="house" onClick={handleChange}>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Hufflepuff">Hufflepuff</option>
            </select>
          </section>
          </div>

          <section className="content-btn">
            <button
              // {...attrs}
              type="submit"
              className="primary-button"
              onClick={handlePostData}
            >
              GUARDAR
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};
