import React from 'react';
import letters from "../assets/letters.png";
const Header = () => {
    return(
    <header>
    <section className="titles">
      <img src={letters} alt="harry potter" />
      <p>Selecciona tu filtro</p>
    </section>
  </header>
    );
};

export default Header;