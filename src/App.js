import Navbar from './components/navbar';
import Home from './pages/home';
import Compare from './pages/compare';
import Explore from './pages/explore';

import MotorCard from './pages/explore';
import MotorDetail from './pages/enginedetails';

import './App.css';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/explore" element={<Explore />} />
        
        <Route path="/" element={<MotorCard />} />
        <Route path="/motor/:id" element={<MotorDetail />} />
      </Routes>
    </>
  );
}

export default App;
