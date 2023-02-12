import { useState } from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

const Testimonios = [
  { nombre: 'Rick Grimes', ciudad: 'Alexandría', cargo: 'Líder', empresa: 'Alexandría', imagen: 'rick-grimes.jpg', testimonio: "No lamento todo lo que dije <strong>ayer</strong>, sólo siento no haberlo dicho antes." },
  { nombre: 'Shane', ciudad: 'Georgia', cargo: 'Sheriff', empresa: 'Condado de King', imagen: 'shane.jpg', testimonio: "Sobrevivir, amigo. Significa tomar decisiones difíciles." },
  { nombre: 'Gobernador', ciudad: 'Georgia', cargo: 'Líder', empresa: 'Woodbury', imagen: 'gobernador.jpg', testimonio: 'Si te unes a mí. Te prometo que nunca tendrás que preocuparte por hacer lo correcto o lo incorrecto.' },
  { nombre: 'Negan', ciudad: 'Washington, D.C.', cargo: 'Líder', empresa: 'Los Salvadores', imagen: 'negan.jpg', testimonio: 'El castigo es algo imprescindible. La penitencia, esa es la base de todo lo que tenemos.' },
];

function App() {
  const [testimonio, setTestimonio] = useState(Testimonios);
  const AgregarTestimonio = () => {
    setTestimonio([...testimonio, { nombre: 'Rick Grimes', ciudad: 'Alexandría', cargo: 'Líder', empresa: 'Alexandría', imagen: 'rick-grimes_02.jpg', testimonio: "No lamento todo lo que dije <strong>ayer</strong>, sólo siento no haberlo dicho antes." }]);
  }

  return (
    <div className='App'>
      <h1 className='Titulo'>Personajes de The Walking Dead</h1>
      <button onClick={AgregarTestimonio}>Agregar Personaje</button>
      <script>console.log("a");</script>
      {
        testimonio.map((elemento, index) => {
          return (
            <Testimonio
              key={index}
              estilo_btn_remover={(index % 2 === 0) ? "end" : "start"}
              estilo_imagen={(index % 2 === 0) ? 1 : 2}
              estilo_texto={(index % 2 === 0) ? 2 : 1}
              nombre={elemento.nombre}
              ciudad={elemento.ciudad}
              cargo={elemento.cargo}
              empresa={elemento.empresa}
              imagen={elemento.imagen}
              testimonio={elemento.testimonio}
            />
          );
        }
        )
      }

    </div>
  );
}

export default App;
