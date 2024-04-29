import Navbar from './components/navbar';
import Home from './pages/home';
import Compare from './pages/compare';
import './App.css';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        
      </Routes>
    </>
  );
}

export default App;
