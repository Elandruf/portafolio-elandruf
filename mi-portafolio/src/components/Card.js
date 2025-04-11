import React from 'react';

function Card({ title, description, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver más</a>
    </div>
  );
}

export default Card;