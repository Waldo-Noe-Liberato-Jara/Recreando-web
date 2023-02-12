import React from 'react';

var contador = 0;
function Clickear() {
  contador = contador + 1;
  console.log(contador);
}

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <div className='remover-personaje' style={{ textAlign: props.estilo_btn_remover }}>
        <span className='btn-remover' onClick={() => Clickear()}>x</span>
      </div>

      <img style={{ order: props.estilo_imagen }} className='imagen-testimonio' src={require(`../imagenes/${props.imagen}`)} alt={props.nombre} />
      <div style={{ order: props.estilo_texto }} className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.ciudad}</p>
        <p className='cargo-testimonio'>{props.cargo} de {props.empresa}</p>
        <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: props.testimonio }} ></p>
      </div>
    </div>
  );
}

export default Testimonio;