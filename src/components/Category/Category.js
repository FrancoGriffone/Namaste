import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';


const Category = () =>{
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    const removeActiveClasses = () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    };

    return (
      <>
        <h2 className='fraseProductos'>Descubre las distintas formas de mejorar tu vida</h2>
        <div className='body'>
        <div className="containerPanels">
          <div className="panel active" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/yoga-app-f6019.appspot.com/o/respiracion.jpg?alt=media&token=8fc24c26-6871-4a34-a2be-b8c0737e8aaf)" }}>
          <Link to={`/products`}><h3>Todos los cursos</h3></Link>
          </div>
          <div className="panel active" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/yoga-app-f6019.appspot.com/o/kaca.jpg?alt=media&token=4e056f03-3db2-4ecb-bce4-5ab4292d94b3)" }}>
          <Link to={`/category/espirituales`}><h3>Cursos espirituales</h3></Link>
          </div>
          <div className="panel active" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/yoga-app-f6019.appspot.com/o/mudras.jpg?alt=media&token=8746c8f0-d3a5-4189-be4f-f84627a5dd17)" }}>
          <Link to={`/category/fisicos`}><h3>Cursos físicos</h3></Link>
          </div>
          <div className="panel active" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/yoga-app-f6019.appspot.com/o/comunidad.jpg?alt=media&token=fa285583-a2b6-4a4a-9a6e-a5665657c956)" }}>
          <Link to={`/category/otros`}><h3>Otros cursos</h3></Link>
          </div>
        </div>
        </div>
      </>
    );
}

export default Category