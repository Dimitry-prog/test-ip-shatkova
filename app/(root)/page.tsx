import Artist from '@/app/(root)/_components/artist';
import Search from '@/shared/components/search';
import { SearchParamsType } from '@/shared/types';

const Home = async ({ searchParams }: SearchParamsType) => {
  const search = searchParams?.search || '';
  const entity = searchParams?.entity || '';

  const response = await fetch(`https://itunes.apple.com/search?term=${search}&entity=${entity}`, {
    cache: 'force-cache',
  });
  const data = await response.json();

  return (
    <>
      <section className="mb-6">
        <Search />
      </section>

      <Artist data={data} search={search} entity={entity} />
    </>
  );
};

export default Home;
