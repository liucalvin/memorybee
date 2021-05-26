import { createContext, useContext } from 'react';

const axios = require('axios').default;

const baseUrl = 'http://localhost:5000/api/users'

export const startLogin = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      email: email,
      password: password
    });
    return response.data
  } catch (error) {
    return error.message;
  }
}

export const startRegistration = async (email, username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, {
      email: email,
      username: username,
      password: password
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

export function onLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  console.log(localStorage.getItem('token'));
}

export function useAuth() {
  return useContext(authContext);
}
const authContext = createContext();