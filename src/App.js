import './App.css';
import Testimonio from './componentes/Testimonio.js';

const Testimonios = [
  { nombre: 'Rick Grimes', ciudad: 'Alexandría', cargo: 'Líder', empresa: 'Alexandría', imagen: 'rick-grimes.jpg', testimonio: "No lamento todo lo que dije <strong>ayer</strong>, sólo siento no haberlo dicho antes." },
  { nombre: 'Shane', ciudad: 'Georgia', cargo: 'Sheriff', empresa: 'Condado de King', imagen: 'shane.jpg', testimonio: "Sobrevivir, amigo. Significa tomar decisiones difíciles." },
  { nombre: 'Gobernador', ciudad: 'Georgia', cargo: 'Líder', empresa: 'Woodbury', imagen: 'gobernador.jpg', testimonio: 'Te unes a mí. Te prometo que nunca tendrás que preocuparte por hacer lo correcto o lo incorrecto.' },
  { nombre: 'Negan', ciudad: 'Washington, D.C.', cargo: 'Líder', empresa: 'Los Salvadores', imagen: 'negan.jpg', testimonio: 'El castigo es algo imprescindible. La penitencia, esa es la base de todo lo que tenemos.' },
];

var cantidad = 5;
var order = 1;
        
for(var i = 1; i <= Testimonios.length; i++){
    console.log(order);
    order = order + 1;
    if(order > 2){
        order = 1;
    }
}

function App() {
  return (
    <div className='App'>
      <h1 className='Titulo'>Personajes de The Walking Dead</h1>

      {
        Testimonios.map((elemento, index) => {
          return (
            <Testimonio
              key={index}
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
