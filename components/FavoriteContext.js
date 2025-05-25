import React, { createContext, useState, useContext } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (meal) => {
    if (!meal || !meal.idMeal) return;

    const exists = favorites.find((item) => item.idMeal === meal.idMeal);
    if (exists) {
      setFavorites(favorites.filter((item) => item.idMeal !== meal.idMeal));
    } else {
      setFavorites([...favorites, meal]);
    }
  };

  const isFavorited = (meal) => {
    if (!meal || !meal.idMeal) return false; // 👈 bu satır hatayı engeller
    return favorites.some((item) => item.idMeal === meal.idMeal);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, toggleFavorite, isFavorited }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);
