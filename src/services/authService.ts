export const login = async (username: string, password: string): Promise<string | null> => {
  const validUsername = 'admin';
  const validPassword = 'admin';
  
  if (username === validUsername && password === validPassword) {
    console.log('Login successful, token: fake-jwt-token'); // Adicione este log
    return 'fake-jwt-token';
  } else {
    return null;
  }
};

export const logout = async (): Promise<void> => {
  // Implementação do logout se necessário
};
