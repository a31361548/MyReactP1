import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navigation from './componets/Navigation';
import Home from './pages/Home';
import Gsap from './pages/Gsap';
import Scroll from './pages/ScrollAnimate';
import DataGraphics from './pages/DataGraphics';
import Settings from './pages/admin/setting.js'
import ModalTab from './componets/ModalTab'; 
import { AuthProvider } from './AuthContext';

function App() {
  const [isModalTabOpen, setIsModalTabOpen] = useState(false);

  const token = localStorage.getItem('token');

  const openModalTab = () => {
    setIsModalTabOpen(true);
  };

  const closeModalTab = () => {
    setIsModalTabOpen(false);
  };

  return (
    <AuthProvider>
    <Router>
      <Navigation onModalTabClick={openModalTab} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gsap" element={<Gsap />} />
        <Route path="/scroll"element={token ? <Scroll /> : <Navigate to="/" />}  />
        <Route path="/datagraphics" element={<DataGraphics />} />
        <Route path="/settings" element ={<Settings/>}/>
      </Routes>
      <ModalTab
        isOpen={isModalTabOpen}
        onRequestClose={closeModalTab}
      />
    </Router>
    </AuthProvider>
  );
}

export default App;
