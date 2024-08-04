import { FilterTabType } from '@/shared/types';

export const LIMIT_PER_PAGE = 6;

export const FILTER_TABS_HOME: FilterTabType[] = [
  { value: '', label: 'All' },
  { value: 'movie', label: 'Movies' },
  { value: 'audiobook', label: 'Books' },
  { value: 'song', label: 'Songs' },
];
