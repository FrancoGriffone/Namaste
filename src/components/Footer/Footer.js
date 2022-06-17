import React from "react";
import "./style.css";
import Yoga from "./files/yoga.png"
import Facebook from "./files/facebook.png"
import Instagram from "./files/instagram.png"
import Whatsapp from "./files/whatsapp.png"

const Footer = () => {
    return (
      <div className="footerContenedor">
        <div>
          <img src= {  Yoga  } alt="logo" width="60px"></img>
        </div>
        <div className="guiaDatos">
            <h3><a href="#inicio" className="footerInicio">Inicio</a></h3>
            <h3>Productos</h3>
            <h3>Sobre mí</h3>
        </div>
        <div className="redes" id="redes">
            <img src= { Facebook } alt="logo" width="30px" className="facebook"></img>
            <img src= { Instagram } alt="logo" width="30px" className="instagram"></img>
            <img src= { Whatsapp } alt="logo" width="30px" className="whatsapp"></img>
        </div>
        <div className="derechosReservados">
            <h4>Todos los derechos reservados</h4>
        </div>
      </div>
    );
  };

export default Footer