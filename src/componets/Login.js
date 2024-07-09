import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext'; // 确保路径正确

const Login = ({ onRequestClose }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ account, password });
      if (response.success) {
        setMessage('Login successful');
        onRequestClose(); // 关闭模态框或执行其他逻辑
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage(error.response ? error.response.data.message : 'Server error');
    }
  };

  return (
    <div className="flex items-center justify-center w-[40vw] h-[50vh] bg-gray-100">
      <div className="w-[40vw] h-[50vh] bg-white px-8 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Account</label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition duration-300 mb-4"
          >
            Login
          </button>
          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
