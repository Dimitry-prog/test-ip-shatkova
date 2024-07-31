import ArtistCard from '@/app/(root)/_components/artist-card';
import { TunesType } from '@/app/(root)/_types';
import Filters from '@/shared/components/filters';
import Paginations from '@/shared/components/paginations';
import { LIMIT_PER_PAGE } from '@/shared/lib/constants';

type ArtistProps = {
  search: string;
  entity: string;
  page: number;
  data: TunesType;
};

const Artist = ({ data, search, entity, page }: ArtistProps) => {
  return (
    <section className="flex flex-col gap-5">
      {(data.results?.length > 0 || entity) && search && <Filters />}

      {search && data.results?.length === 0 && (
        <p className="text-center text-xl">No results found</p>
      )}

      {data.results?.length > 0 && (
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {data.results
            .slice((page - 1) * LIMIT_PER_PAGE, (page - 1) * LIMIT_PER_PAGE + LIMIT_PER_PAGE)
            .map((item) => (
              <ArtistCard data={item} key={item.trackId} />
            ))}
        </div>
      )}

      {data.resultCount > LIMIT_PER_PAGE && <Paginations totalPages={data.resultCount} />}
    </section>
  );
};

export default Artist;
