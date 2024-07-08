// App.js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // BrowserRouter 靜態網頁用 HashRouter 比較合適
import Navigation from './componets/Navigation';
import Home from './pages/Home';
import Gsap from './pages/Gsap';
import Scroll from './pages/ScrollAnimate';
import DataGraphics from './pages/DataGraphics';
import RegisterModal from './componets/Register';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  return (
    <Router>
      <Navigation onRegisterClick={openRegisterModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gsap" element={<Gsap />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/datagraphics" element={<DataGraphics />} />
      </Routes>
      <RegisterModal
        isOpen={isRegisterOpen}
        onRequestClose={closeRegisterModal}
      />
    </Router>
  );
}

export default App;
