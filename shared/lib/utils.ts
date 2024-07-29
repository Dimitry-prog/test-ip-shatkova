import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | string) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'numeric',
    year: 'numeric',
    day: 'numeric',
  };

  return new Date(date).toLocaleString('en-US', dateOptions);
};
