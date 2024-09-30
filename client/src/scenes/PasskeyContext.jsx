import React, { createContext, useContext, useState } from "react";

const PasskeyContext = createContext();

export const PasskeyProvider = ({ children }) => {
  const [isPasskeyEntered, setIsPasskeyEntered] = useState(false);

  return (
    <PasskeyContext.Provider value={{ isPasskeyEntered, setIsPasskeyEntered }}>
      {children}
    </PasskeyContext.Provider>
  );
};

export const usePasskey = () => useContext(PasskeyContext);
