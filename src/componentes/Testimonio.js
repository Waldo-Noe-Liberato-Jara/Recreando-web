import React from 'react';
import Rick from '../imagenes/rick-grimes.jpg';

function Testimonio() {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={Rick} alt='Rick Grimes' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Rick Grimes en Alexandría</p>
        <p className='cargo-testimonio'>Líder de Alexandría</p>
        <p className='texto-testimonio'>No lamento todo lo que dije ayer, sólo siento no haberlo dicho antes</p>
      </div>
    </div>
  );
}

export default Testimonio;