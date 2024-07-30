import ArtistCard from '@/app/(root)/_components/artist-card';
import { TunesType } from '@/app/(root)/_types';
import Filters from '@/shared/components/filters';

type ArtistProps = {
  search: string;
  entity: string;
};

const Artist = async ({ search, entity }: ArtistProps) => {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${search}&entity=${entity}`,
    {}
  );
  const data: TunesType = await response.json();

  return (
    <section className="flex flex-col items-center gap-5">
      {(data.results?.length > 0 || entity) && <Filters />}

      {search && data.results?.length === 0 && (
        <p className="text-center text-xl">No results found</p>
      )}

      {data.results?.length > 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.results.map((item, index) => (
            <ArtistCard data={item} key={item.trackId + index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Artist;
