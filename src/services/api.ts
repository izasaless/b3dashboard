
export const login = async (username: string, password: string): Promise<string | null> => {
    const validUsername = '123';
    const validPassword = '123';
  
 
    if (username === validUsername && password === validPassword) {
      return 'fake-jwt-token';
    } else {
      return null;
    }
  };

  export const logout = async (): Promise<void> => {
  };
  