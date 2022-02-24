import iconClose from "../assets/iconclose.png";
export const ModalContent = ({ onClose }) => {
  return (
    <div className="modal-shadow">
      <div className="modal-container">
        <div className="modal-title">
          <p>Agrega un personaje</p>
          <img src={iconClose} alt="icon close" onClick={onClose} />
        </div>
        <form>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="name">NOMBRE</label>
              <input id="name" type="text" required />
            </section>
            <section className="section-div">
              <label htmlFor="cumpleanos">CUMPLEAÑOS</label>
              <input id="cumpleanos" type="text" required />
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="ojos">COLOR DE OJOS</label>
              <input id="ojos" type="text" required />
            </section>
            <section className="section-div">
              <label htmlFor="pelo">COLOR DE PELO</label>
              <input id="pelo" type="text" required />
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="genero">GENERO</label>
              <br />
              <div className="form-radio">
                <input
                  className="radio"
                  id="genero1"
                  type="radio"
                  value="Mujer"
                />
                Mujer
                <input
                  className="radio"
                  id="genero2"
                  type="radio"
                  value="Hombre"
                />
                Hombre
              </div>
            </section>
            <section className="section-div">
              <label htmlFor="genero">POSICION</label>
              <br />
              <div className="form-radio">
                <input
                  className="radio"
                  id="posicion"
                  type="radio"
                  value="Estudiante"
                />
                Estudiante
                <input
                  className="radio"
                  id="posicion"
                  type="radio"
                  value="Staff"
                />
                Staff
              </div>
            </section>
          </div>
          <div className="form-section">
            <section className="section-div">
              <label htmlFor="foto">FOTOGRAFIA</label>
              <input id="FOTO" type="url" />
            </section>
            <section className="section-div">
              <label htmlFor="estado">ESTADO</label>
              <br />
              <div className="form-radio">
                <input
                  className="radio"
                  id="estado"
                  type="radio"
                  value="Vivo"
                />
                Vivo
                <input
                  className="radio"
                  id="estado1"
                  type="radio"
                  value="Muerto"
                />
                Muerto
              </div>
            </section>
          </div>
          <section className="section-div">
            <label htmlFor="casa">CASA</label>
            <br />
            <div className="form-radio">
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
            </div>
          </section>

          <section className="content-btn">
            <button className="primary-button">GUARDAR</button>
          </section>
        </form>
      </div>
    </div>
  );
};
