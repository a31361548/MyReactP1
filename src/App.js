import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './componets/Navigation';
import Home from './pages/Home';
import Gsap from './pages/Gsap'
import Scroll from './pages/ScrollAnimate'
import DataGraphics from './pages/DataGraphics'


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gsap" element={<Gsap />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/datagraphics" element={<DataGraphics />} />
      </Routes>
    </Router>
  );
}

export default App;
