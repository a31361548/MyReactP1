// src/RegisterModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { register } from '../api/api';

const RegisterModal = ({ isOpen, onRequestClose }) => {
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ account, email, password, phone });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Server error');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Modal"
      className="Modal z-10"
      overlayClassName="Overlay"
    >
      <div className="flex items-center justify-center w-[70vw] h-[70vh] bg-gray-100">
        <div className="w-[70vw] h-[70vh] bg-white px-8 shadow-md rounded">
          <h2 className="text-2xl font-bold mb-2 text-center">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4 ">
              <label className="block text-gray-700 mb-2">Account</label>
              <input
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
