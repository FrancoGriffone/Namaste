import React from 'react';
import './style.css';
import CartWidget from "./CartWidget"


const Navbar = () => {
    return (
      <nav className="clase-navbar">
        <div>
        <ul className="lista1" id='inicio'>
            <li>
                <a href="/">
                    Namasté
                </a>
            </li>
        </ul>
        <ul className="lista2">
          <li>
            <a href="/" title="Recargar web">
              Inicio
            </a>
          </li>
          <li>
            <a href="#productos" title="Descubre la variedad de productos que comercializamos">
              Productos
            </a>
          </li>
          <li>
            <a href="/" title="Descubre sobre mi personalidad">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#redes" title="Entra en contacto conmigo">
              Contacto
            </a>
          </li>
          <CartWidget />
        </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;