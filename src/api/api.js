// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:4000/users'; // 更新為 4000 端口

export const register = (userData) => {
  return axios.post(API_URL, userData); // 使用根路由來匹配後端的註冊路由
};

export const login = async (data) => {
  try {
    const response = await axios.post('http://localhost:4000/users/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.delete(`${API_URL}/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};