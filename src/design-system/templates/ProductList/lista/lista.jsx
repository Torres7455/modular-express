import React from 'react';
import './lista.css';

export default function Lista({ products }) {
  return (
    <div className="lista-container">
      {products.map((item, index) => (
        <div key={index} className="card">
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
          </div>
        </div>
      ))}
    </div>
  );
}

