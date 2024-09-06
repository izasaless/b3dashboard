// src/services/authService.ts
import { login as apiLogin, logout as apiLogout } from './api';

export const login = async (username: string, password: string): Promise<string | null> => {
  try {
    const token = await apiLogin(username, password);
    return token; 
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};


export const logout = async (): Promise<void> => {
  try {
    await apiLogout(); 
    localStorage.removeItem('token'); 
  } catch (error) {
    console.error('Logout error:', error);
  }
};


export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token; 
};
