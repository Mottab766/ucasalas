import './App.css';
import Meubanner from './componentes/Banner/Banner';
import Menuprincipal from './componentes/MenuPrincipal/menu';
import AndarPrim from './componentes/PrimAndar/PrimAndar';
import AndarSeg from './componentes/SegAndar/SegAndar';
import Rodape from './componentes/TercAndar/Rodape/Rodape';
import AndarTerc from './componentes/TercAndar/TercAndar';
import Terreo from './componentes/Terreo/terreo';


function App() {
  return (
    <div className="App">
      <Menuprincipal />
      <Meubanner/>
      <Terreo/>
      <AndarPrim/>
      <AndarSeg/>
      <AndarTerc/>
      <Rodape/>
    </div>
  );
}

export default App;
