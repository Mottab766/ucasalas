import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Meubanner from './componentes/Banner/Banner';
import Menuprincipal from './componentes/MenuPrincipal/menu';
import Senna from './componentes/Personas/Senna';
import AndarPrim from './componentes/PrimAndar/PrimAndar';
import AndarSeg from './componentes/SegAndar/SegAndar';
import Rodape from './componentes/Rodape/Rodape';
import AndarTerc from './componentes/TercAndar/TercAndar';
import Terreo from './componentes/Terreo/terreo';
import Lelia from './componentes/Personas/Lelia';
import Heitor from './componentes/Personas/Heitor';
import SalaOperacoes from './componentes/Personas/SalaOp';
import LojaModelo from './componentes/Personas/LojaMod';
import Clarice from './componentes/Personas/ClariceLis';
import Dandara from './componentes/Personas/Dandara';
import Cacique from './componentes/Personas/Cacique';
import CarlosChagas from './componentes/Personas/CarlosChagas';
import Tarsila from './componentes/Personas/Tarsila';
import SantosDumont from './componentes/Personas/SantosDumont';
import Vinicius from './componentes/Personas/Vinicius';
import TomJobim from './componentes/Personas/TomJobim';

function App() {
  return (
    <div className="App">
      <Router>
        <Menuprincipal /> {/* Aparece em todas as rotas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Meubanner />
                <Terreo />
                <AndarPrim />
                <AndarSeg />
                <AndarTerc />
              </>
            }
          />
          <Route path="/senna" element={<Senna />} /> 
          <Route path="/Lelia" element={<Lelia />} />{/* Exemplo de outra rota */}
          <Route path="/Heitor" element={<Heitor />} />{/* Exemplo de outra rota */}
          <Route path="/SalaOperacoes" element={<SalaOperacoes />} />{/* Exemplo de outra rota */}
          <Route path="/LojaModelo" element={<LojaModelo />} />{/* Exemplo de outra rota */}
          <Route path="/Clarice" element={<Clarice />} />{/* Exemplo de outra rota */}
          <Route path="/Dandara" element={<Dandara />} />{/* Exemplo de outra rota */}
          <Route path="/Cacique" element={<Cacique />} />{/* Exemplo de outra rota */}
          <Route path="/CarlosChagas" element={<CarlosChagas />} />{/* Exemplo de outra rota */}
          <Route path="/Tarsila" element={<Tarsila />} />{/* Exemplo de outra rota */}
          <Route path="/SantosDumont" element={<SantosDumont />} />{/* Exemplo de outra rota */}
          <Route path="/ViniciusDeMoraes" element={<Vinicius />} />{/* Exemplo de outra rota */}
          <Route path="/TomJobim" element={<TomJobim />} />{/* Exemplo de outra rota */}






          {/* Adicione outras rotas conforme necessário */}
        </Routes>
        <Rodape /> {/* Aparece em todas as rotas */}
      </Router>
    </div>
  );
}

export default App;