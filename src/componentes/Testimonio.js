import React from 'react';
import Rick from '../imagenes/rick-grimes.jpg';

function Testimonio() {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={Rick} />
    </div>
  );
}