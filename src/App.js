import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <h1 className='Titulo'>Personajes de The Walking Dead</h1>
      <Testimonio
      nombre='Rick Grimes'
      ciudad='Alexandría'
      cargo='Líder'
      empresa='Alexandría'
      imagen='rick-grimes.jpg'
      testimonio='No lamento todo lo que dije ayer, sólo siento no haberlo dicho antes.' />

      <Testimonio
      nombre='Shane'
      ciudad='Georgia'
      cargo='Sheriff'
      empresa='Condado de King'
      imagen='shane.jpg'
      testimonio='Sobrevivir, amigo. Significa tomar decisiones difíciles.' />

      <Testimonio
      nombre='Gobernador'
      ciudad='Georgia'
      cargo='Líder'
      empresa='Woodbury'
      imagen='gobernador.jpg'
      testimonio='Te unes a mí. Te prometo que nunca tendrás que preocuparte por hacer lo correcto o lo incorrecto.' />
        
      <Testimonio 
      nombre='Negan'
      ciudad='Washington, D.C.'
      cargo='Líder'
      empresa='Los Salvadores'
      imagen='negan.jpg'
      testimonio='El castigo es algo imprescindible. La penitencia, esa es la base de todo lo que tenemos.' />
    </div>
  );
}

export default App;
