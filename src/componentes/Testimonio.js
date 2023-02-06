import React from 'react';

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={ require(`../imagenes/${props.imagen}`) } alt={props.nombre} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.ciudad}</p>
        <p className='cargo-testimonio'>{props.cargo} de {props.empresa}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;