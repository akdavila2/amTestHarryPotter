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
        <label for="name">NOMBRE</label>
        <input id="name" type="text" />
        <label for="cumpleanos">CUMPLEAÑOS</label>
        <input id="cumpleanos" type="text" />
        <label for="ojos">COLOR DE OJOS</label>
        <input id="ojos" type="text" />
        <label for="pelo">COLOR DE PELO</label>
        <input id="pelo" type="text" />
        <label for="genero">GENERO</label>
        <input id="genero" type="radio" value="Mujer"/>
        <input id="genero" type="radio" value="Hombre"/>
        <label for="genero">POSICION</label>
        <input id="posicion" type="radio" value="Estudiante"/>
        <input id="posicion" type="radio" value="Staff"/>
        <label for="foto">FOTOGRAFIA</label>
        <input id="FOTO" type="url" />
        <button className="primary-button">GUARDAR</button>
      </form>
    </div>
  );
};

export default Modal;
