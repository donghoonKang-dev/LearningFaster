import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);
const ToggleContext = createContext(null);

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const onToggleLogin = () => setIsLogin(prev => !prev);

  return (
    <AuthContext.Provider value={isLogin}>
      <ToggleContext.Provider value={onToggleLogin}>
        {children}
      </ToggleContext.Provider>
    </AuthContext.Provider>
  );
}

export const useLoginState = () => {
  const context = useContext(AuthContext);
  if (context === null) throw new Error('asd');
  return context;
};

export const useToggleLogin = () => {
  const context = useContext(ToggleContext);
  if (context === null) throw new Error('asd2');
  return context;
};