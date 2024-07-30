export const getCategoryType = (category: string) => {
  switch (category) {
    case 'feature-movie':
      return 'Movie';
    case 'song':
      return 'Song';
    default:
      return 'Book';
  }
};
