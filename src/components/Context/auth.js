import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState({ token });
  const [id, setId] = useState({ id });
  const [curso, setCurso] = useState({ curso });

  return (
    <AuthContext.Provider
      value={{ token, setToken, id, setId, curso, setCurso }}
    >
      {children}
    </AuthContext.Provider>
  );
}
