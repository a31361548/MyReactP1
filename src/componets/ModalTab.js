// ModalTab.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import Login from './Login';
import Register from './Register';

const ModalTab = ({ isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  const switchToLogin = () => {
    setActiveTab('login');
  };

  const switchToRegister = () => {
    setActiveTab('register');
  };

  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Auth Modal"
        className="p-8 bg-white rounded shadow-lg w-[40vw]  mt-10 "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
      >
      <div className="tab-container ">
      <div className="flex justify-center mb-4">
          <button
            onClick={switchToLogin}
            className={`px-4 py-2 ${activeTab === 'login' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button
            onClick={switchToRegister}
            className={`px-4 py-2 ${activeTab === 'register' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          >
            Register
          </button>
        </div>
        <div className="py-4 bg-gray-100 rounded flex justify-center">
          {activeTab === 'login' && <Login onRequestClose={onRequestClose} />}
          {activeTab === 'register' && <Register onRequestClose={onRequestClose} switchToLogin={switchToLogin} />}
        </div>
      </div>
    </Modal>
  );
};

export default ModalTab;
