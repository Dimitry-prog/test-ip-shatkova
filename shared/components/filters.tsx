'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';
import { FILTER_TABS_HOME } from '@/shared/lib/constants';
import { cn } from '@/shared/lib/utils';
import { FilterTabType } from '@/shared/types';

type FiltersProps = {
  tabs?: FilterTabType[];
  className?: string;
};

const Filters = ({ tabs = FILTER_TABS_HOME, className }: FiltersProps) => {
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
    <Tabs defaultValue={params.get('entity') || ''} className={cn(className)}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger onClick={() => handleChange(tab.value)} value={tab.value} key={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default Filters;
