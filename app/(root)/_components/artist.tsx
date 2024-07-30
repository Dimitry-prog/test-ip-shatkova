import ArtistCard from '@/app/(root)/_components/artist-card';
import { TunesType } from '@/app/(root)/_types';

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
    <section>
      {search && data.results?.length === 0 && (
        <p className="text-center text-xl">No results found</p>
      )}

      {data.results?.length > 0 && search && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.results.map((item) => (
            <ArtistCard data={item} key={item.trackId} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Artist;
