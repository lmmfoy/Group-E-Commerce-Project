import { createContext, useState } from "react";

export const ItemsContext = createContext(null);
export const ItemsProvider = ({ children }) => {
  const [selectedCaregory, setSelectedCategory] = useState("");
  const [numCartItems, setNumCartItems] = useState(0);
  return (
    <ItemsContext.Provider
      value={{
        selectedCaregory,
        setSelectedCategory,
        numCartItems,
        setNumCartItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
