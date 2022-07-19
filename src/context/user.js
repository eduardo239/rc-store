import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const ContextUser = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

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
