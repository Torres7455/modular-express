import React from 'react';
import './lista.css';
import { useNavigate } from "react-router-dom";

export default function Lista({ products }) {
  const navigate = useNavigate();

  return (
    <div className="lista-container">
      {products.map((item) => (
        <div key={item.id} className="card">
          <img
            src={`/img/${item.imagen_default}`}
            alt={item.tipo}
            className="card-img"
          />
          <div className="card-body">
            <h3>{item.tipo}</h3>
            <p><strong>Descripción:</strong> {item.descripcion}</p>
            <p><strong>Dirección:</strong> {item.direccion}</p>
            <p><strong>Detalles:</strong> {item.detalles}</p>
            <p><strong>Precio:</strong> ${item.precio.toLocaleString()}</p>

            <button
              className="buy-button"
              onClick={() => navigate(`/producto?id=${item.id}`)}
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}




