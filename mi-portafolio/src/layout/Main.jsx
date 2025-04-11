import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h2>Esto es el componente Main</h2>
      <p>Aquí puedes empezar a construir tu vista principal.</p>
      
      {/* Navegación */}
      <ul>
        <li>
          <Link to="/home">Home</Link>{/* Este enlace lleva al componente Main */}
        </li>
        <li>
          <Link to="/about">Acerca de</Link>{/* Este enlace lleva al componente About */}
        </li>
      </ul>
    </div>
  );
}

export default Main;