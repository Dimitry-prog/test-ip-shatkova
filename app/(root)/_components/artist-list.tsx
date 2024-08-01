'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ArtistCard from '@/app/(root)/_components/artist-card';
import { TunesDTOType, TunesType } from '@/app/(root)/_types';
import Paginations from '@/shared/components/paginations';
import { LIMIT_PER_PAGE } from '@/shared/lib/constants';

type ArtistListProps = {
  data: TunesType;
};

const ArtistList = ({ data }: ArtistListProps) => {
  const params = useSearchParams();
  const page = Number(params.get('page') || '1');

  const [favorites, setFavorites] = useState<TunesDTOType[]>([]);

  const handleToggleFavorite = (item: TunesDTOType) => {
    const isFavorite = favorites.some((fav) => fav.previewUrl === item.previewUrl);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.previewUrl !== item.previewUrl);
    } else {
      updatedFavorites = [...favorites, item];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      {data.results?.length > 0 && (
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {data.results
            .slice((page - 1) * LIMIT_PER_PAGE, (page - 1) * LIMIT_PER_PAGE + LIMIT_PER_PAGE)
            .map((item) => (
              <ArtistCard
                data={item}
                key={item.previewUrl}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favorites.some((fav) => fav.previewUrl === item.previewUrl)}
              />
            ))}
        </div>
      )}

      {data.resultCount > LIMIT_PER_PAGE && <Paginations totalPages={data.resultCount} />}
    </>
  );
};

export default ArtistList;
