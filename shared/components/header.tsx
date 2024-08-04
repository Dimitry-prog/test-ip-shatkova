'use client';

import { HeartIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/components/ui/button';
import { useFavorites } from '@/shared/hooks/use-favorites';
import { useSearch } from '@/shared/hooks/use-search';
import { cn } from '@/shared/lib/utils';

const Header = () => {
  const router = useRouter();
  const { favorites } = useFavorites();
  const { onClearSearch } = useSearch();

  return (
    <header className="sticky top-0 z-50 border border-b bg-background p-4">
      <nav className="container">
        <ul className="flex items-center justify-between">
          <li>
            <Button
              onClick={() => {
                onClearSearch();
                router.push('/');
              }}
              variant="ghost"
            >
              Home
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost">
              <Link href="/favorites" className="relative">
                <HeartIcon
                  className={cn('size-4', favorites.length > 0 && 'fill-red-500 stroke-red-500')}
                />
                {favorites.length > 0 && (
                  <span className="absolute -top-0.5 right-2.5 z-50">{favorites.length}</span>
                )}
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
