import ArtistList from '@/app/(root)/_components/artist-list';
import Filters from '@/shared/components/filters';
import Search from '@/shared/components/search';
import { SearchParamsType } from '@/shared/types';

const Home = async ({ searchParams }: SearchParamsType) => {
  const search = searchParams?.search || '';
  const entity = searchParams?.entity || '';

  const response = await fetch(
    `http://localhost:3000/api/artists/?search=${search}&entity=${entity}`
  );
  const data = await response.json();

  return (
    <>
      <Search className="mb-6" />

      <section className="flex flex-col gap-5">
        {(data.results?.length > 0 || entity) && search && <Filters className="self-center" />}

        {search && data.results?.length === 0 && (
          <p className="text-center text-xl">No results found</p>
        )}

        <ArtistList data={data} />
      </section>
    </>
  );
};

export default Home;
