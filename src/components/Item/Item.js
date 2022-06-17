import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 


export const Item = ({ item }) => {
        return (
                <div className="card" style={{ margin: "4rem"}}>
                <Link  to={`/product/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <div className="card-body">
                        <img src={item.image} style={{ width: "100%"}} alt={item.title}/>
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                            <div className="d-grid">
                            <Button className="btn btn-block">Agregar al carrito</Button>
                            </div>
                    </div>
                </Link>
                </div>
                )
};