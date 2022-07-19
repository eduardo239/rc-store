import React, { useEffect, useState } from 'react';
import itemsJson from '../api/items.json';

const ItemContext = React.createContext();

const ItemsProvider = ItemContext.Provider;

const ContextItems = ({ children }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(itemsJson);
  }, []);

  console.log(items);

  return (
    <ItemsProvider
      value={{
        setItems,
        items,
      }}
    >
      {children}
    </ItemsProvider>
  );
};

export { ItemContext, ContextItems };
