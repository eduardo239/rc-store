import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const ContextUser = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserProvider
      value={{
        setUser,
        user,
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, ContextUser };
