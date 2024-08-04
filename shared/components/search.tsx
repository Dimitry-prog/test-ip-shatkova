'use client';

import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Input } from '@/shared/components/ui/input';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { cn } from '@/shared/lib/utils';

type SearchProps = {
  placeholder?: string;
  className?: string;
};

const Search = ({ placeholder = 'Search something', className }: SearchProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const debouncedSearch = useDebounce(search);

  const handleChangeURLSearch = () => {
    if (!debouncedSearch) {
      params.delete('search');
      params.delete('entity');
      params.delete('page');
    } else {
      params.set('search', debouncedSearch);
    }

    router.replace(`${pathname}?${params}`, { scroll: false });
  };

  useEffect(() => {
    handleChangeURLSearch();
  }, [debouncedSearch]);

  return (
    <div
      className={cn(
        'flex items-center rounded-xl border border-input bg-background px-4 py-2 hover:border-gray-400',
        className
      )}
    >
      <SearchIcon className="size-4" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="border-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
