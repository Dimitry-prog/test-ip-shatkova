import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';

import Artist from '@/app/(root)/_components/artist';
import Search from '@/shared/components/search';
import { SearchParamsType } from '@/shared/types';

const Home = ({ searchParams }: SearchParamsType) => {
  const searchStr = searchParams?.search || '';
  const entity = searchParams?.entity || '';

  return (
    <>
      <section className="mb-6">
        <Search />
      </section>

      <Suspense fallback={<Loader2 className="size-44 animate-spin" />}>
        <Artist search={searchStr} entity={entity} />
      </Suspense>
    </>
  );
};

export default Home;
