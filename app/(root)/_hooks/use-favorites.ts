import { useContext } from 'react';

import { FavoritesContext } from '@/shared/components/favorite-provider';

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
