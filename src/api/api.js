// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:4000/users'; // 更新為 4000 端口

export const register = (userData) => {
  return axios.post(API_URL, userData); // 使用根路由來匹配後端的註冊路由
};

export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
