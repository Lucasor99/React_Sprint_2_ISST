import './App.css';
import './MiPerfil.css';
import './Evaluaciones.css';
import NavBarFinal from './Components/NavBarFinal';
import { Routes, Route } from 'react-router-dom';
import Resumenes from "./Resumenes";
import Creadores from './Creadores';
import MiPerfil from './MiPerfil';
import Premium from './ComponentsPremium/Premium';
import './ComponentsPremium/Premium.css'
import Evaluaciones from './ComponentsEval/Evaluacion';
import Enviar from './ComponentsEval/Enviar';
import Login from './Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">

      <NavBarFinal/>

      <Routes>
        <Route path='/' element={<Resumenes/>}/>
        <Route path='/resumenes' element={<Resumenes/>}/>
        <Route path='/miPerfil' element={<MiPerfil/>}/>
        <Route path='/creadores' element={<Creadores/>}/>
        <Route path='/evaluaciones' element={<Evaluaciones/>}/>
        <Route path='/premium' element={<Premium/>}/>
        <Route path="/enviar" element={<Enviar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/registrar" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
