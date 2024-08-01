import ArtistList from '@/app/(root)/_components/artist-list';
import { TunesType } from '@/app/(root)/_types';
import Filters from '@/shared/components/filters';

type ArtistProps = {
  search: string;
  entity: string;
  data: TunesType;
};

const Artist = ({ data, search, entity }: ArtistProps) => {
  return (
    <section className="flex flex-col gap-5">
      {(data.results?.length > 0 || entity) && search && <Filters />}

      {search && data.results?.length === 0 && (
        <p className="text-center text-xl">No results found</p>
      )}

      <ArtistList data={data} />
    </section>
  );
};

export default Artist;
