import React from 'react';
import './style.css';
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom';
import CategoryMenu from '../CategoryMenu/CategoryMenu';


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
            <CategoryMenu />
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