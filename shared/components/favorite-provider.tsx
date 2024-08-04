'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';

import { TunesDTOType } from '@/app/(root)/_types';

type FavoritesContextType = {
  favorites: TunesDTOType[];
  onToggleFavorite: (item: TunesDTOType) => void;
  isFavorite: (item: TunesDTOType) => boolean;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<TunesDTOType[]>([]);

  const handleToggleFavorite = (item: TunesDTOType) => {
    const isFavorite = favorites.some((fav) => fav.previewUrl === item.previewUrl);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.previewUrl !== item.previewUrl)
      : [...favorites, item];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (item: TunesDTOType) => {
    return favorites.some((fav) => fav.previewUrl === item.previewUrl);
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, onToggleFavorite: handleToggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
