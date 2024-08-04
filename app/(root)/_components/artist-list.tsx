'use client';

import { useSearchParams } from 'next/navigation';

import ArtistCard from '@/app/(root)/_components/artist-card';
import { TunesType } from '@/app/(root)/_types';
import Paginations from '@/shared/components/paginations';
import { LIMIT_PER_PAGE } from '@/shared/lib/constants';

type ArtistListProps = {
  data: TunesType;
};

const ArtistList = ({ data }: ArtistListProps) => {
  const params = useSearchParams();
  const page = Number(params.get('page') || '1');

  return (
    <>
      {data.results?.length > 0 && (
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {data.results
            .slice((page - 1) * LIMIT_PER_PAGE, (page - 1) * LIMIT_PER_PAGE + LIMIT_PER_PAGE)
            .map((item) => (
              <ArtistCard data={item} key={item.previewUrl} />
            ))}
        </div>
      )}

      {data.resultCount > LIMIT_PER_PAGE && <Paginations totalPages={data.resultCount} />}
    </>
  );
};

export default ArtistList;
