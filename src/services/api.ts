
export const login = async (username: string, password: string): Promise<string | null> => {
    const validUsername = 'admin';
    const validPassword = 'admin';
  
 
    if (username === validUsername && password === validPassword) {
      return 'fake-jwt-token';
    } else {
      return null;
    }
  };

  export const logout = async (): Promise<void> => {
  };
  