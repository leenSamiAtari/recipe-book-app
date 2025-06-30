import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children })  {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    setFavorites((prev) => {
      const exists = prev.find((r) => r.id === recipe.id);
      if (exists) {
        return prev.filter((r) => r.id !== recipe.id);
      } else {
        return [...prev, recipe];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some((r) => r.id === id);
  };

  const clearFavorites = () => {
  setFavorites([]);
};


  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
