import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './componets/Navigation';
import Home from './pages/Home';
import Gsap from './pages/Gsap'
import Fallow from './componets/FallowGif'

function App() {
  return (
    <Router>
      <Navigation />
      <Fallow/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gsap" element={<Gsap />} />
      </Routes>
    </Router>
  );
}

export default App;
