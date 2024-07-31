import ArtistCard from '@/app/(root)/_components/artist-card';
import { TunesType } from '@/app/(root)/_types';
import Filters from '@/shared/components/filters';
import Paginations from '@/shared/components/paginations';
import { LIMIT_PER_PAGE } from '@/shared/lib/constants';

type ArtistProps = {
  search: string;
  entity: string;
  data: TunesType;
};

const Artist = async ({ data, search, entity }: ArtistProps) => {
  return (
    <section className="flex flex-col items-center gap-5">
      {(data.results?.length > 0 || entity) && search && <Filters />}

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

      {data.resultCount > LIMIT_PER_PAGE && <Paginations totalPages={data.resultCount} />}
    </section>
  );
};

export default Artist;
