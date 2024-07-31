'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

const Filters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleChange = (value: string) => {
    if (!value) {
      params.delete('entity');
    } else {
      params.set('entity', value);
      params.set('page', '1');
    }

    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <Tabs defaultValue={params.get('entity') || 'all'}>
      <TabsList>
        <TabsTrigger onClick={() => handleChange('')} value="all">
          All
        </TabsTrigger>
        <TabsTrigger onClick={() => handleChange('movie')} value="movie">
          Movies
        </TabsTrigger>
        <TabsTrigger onClick={() => handleChange('audiobook')} value="audiobook">
          Books
        </TabsTrigger>
        <TabsTrigger onClick={() => handleChange('song')} value="song">
          Songs
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default Filters;
