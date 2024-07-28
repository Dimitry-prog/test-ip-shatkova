'use client';

import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

import { Input } from '@/shared/components/ui/input';

const Search = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      params.delete('search');
    } else {
      params.set('search', e.target.value);
    }

    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <div className="flex items-center rounded-xl border border-input bg-background px-4 py-2 hover:border-gray-400">
      <SearchIcon className="size-4" />
      <Input
        onChange={handleChange}
        placeholder="Seach something"
        className="border-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
