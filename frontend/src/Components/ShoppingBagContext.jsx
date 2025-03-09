import React, { useState, createContext } from "react";


// Create the context
export const ShoppingBagContext = createContext();

// Create the provider component
export const ShoppingBagProvider = () => {
  const [bagCount, setBagCount] = useState(0);

  return (
    <ShoppingBagContext.Provider value={{ bagCount, setBagCount }}>
      <ProductPage />
    </ShoppingBagContext.Provider>
  );
};
