'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

const Filters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleChange = (value: string) => {
    params.set('page', '1');
    if (!value) {
      params.delete('entity');
    } else {
      params.set('entity', value);
    }

    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <Tabs defaultValue={params.get('entity') || 'all'} className="self-center">
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
