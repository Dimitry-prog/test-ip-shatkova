'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import ArtistList from '@/app/(root)/_components/artist-list';
import { useFavorites } from '@/app/(root)/_hooks/use-favorites';
import { Button } from '@/shared/components/ui/button';

const FavoritesPage = () => {
  const router = useRouter();
  const { favorites } = useFavorites();

  return (
    <section className="flex flex-col gap-5">
      <Button
        onClick={() => {
          router.back();
        }}
        variant="outline"
        className="w-fit gap-2"
      >
        <ArrowLeft className="size-4" />
        Back
      </Button>

      {favorites.length === 0 && (
        <p className="text-center text-xl">You do not have any favorites artists</p>
      )}

      <ArtistList
        data={{
          resultCount: favorites.length,
          results: favorites,
        }}
      />
    </section>
  );
};

export default FavoritesPage;
