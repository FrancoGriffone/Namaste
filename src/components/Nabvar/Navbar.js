import React from 'react';
import './style.css';
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <nav className="clase-navbar">
        <div>
        <ul className="lista1" id='inicio'>
            <li>
            <Link to={"/"}>Namasté</Link>
            </li>
        </ul>
        <ul className="lista2">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <a href="#productos" title="Descubre la variedad de productos que comercializamos">
              Productos
            </a>

            {/* <Link to={`/category/fisicos`}></Link>
            <Link to={`/category/espirituales`}></Link>
            <Link to={`/category/otros`}></Link> */}
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