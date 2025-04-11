import React from 'react';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre mí</a></li>
          <li><a href="/projects">Proyectos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;