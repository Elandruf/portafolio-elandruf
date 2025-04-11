import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './layout/Main.jsx';
import About from './layout/About.jsx'; 
import Home from './views/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />         {/* Ruta principal */}
        <Route path="/about" element={<About />} />   {/* Ruta para "Acerca de" */}
        <Route path="/home" element={<Home />} />   {/* Ruta para "Acerca de" */}
      </Routes>
    </Router>
  );
}

export default App;