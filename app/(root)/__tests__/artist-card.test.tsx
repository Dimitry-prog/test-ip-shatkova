import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import ArtistCard from '@/app/(root)/_components/artist-card';
import { TunesDTOType } from '@/app/(root)/_types';
import { formatDate } from '@/shared/lib/utils';

const data: TunesDTOType = {
  wrapperType: 'track',
  kind: 'song',
  artistId: 268006611,
  collectionId: 268006604,
  trackId: 268012013,
  artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
  collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
  trackName: "Vivaldi's Rediscovery",
  collectionCensoredName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
  trackCensoredName: "Vivaldi's Rediscovery",
  artistViewUrl:
    'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
  collectionViewUrl:
    'https://music.apple.com/us/album/vivaldis-rediscovery/268006604?i=268012013&uo=4',
  trackViewUrl: 'https://music.apple.com/us/album/vivaldis-rediscovery/268006604?i=268012013&uo=4',
  previewUrl:
    'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/60/62/5a/60625a85-b969-3f81-230b-f07babb8cae6/mzaf_9980940527502954321.plus.aac.p.m4a',
  artworkUrl30:
    'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
  artworkUrl60:
    'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
  artworkUrl100:
    'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
  collectionPrice: 9.99,
  trackPrice: 0.99,
  releaseDate: '2007-10-16T12:00:00Z',
  collectionExplicitness: 'notExplicit',
  trackExplicitness: 'notExplicit',
  discCount: 1,
  discNumber: 1,
  trackCount: 18,
  trackNumber: 18,
  trackTimeMillis: 247293,
  country: 'USA',
  currency: 'USD',
  primaryGenreName: 'Classical',
  isStreamable: true,
};

describe('ArtistCard', () => {
  const onToggleFavorite = jest.fn();

  it('it should render the component', () => {
    render(<ArtistCard data={data} onToggleFavorite={onToggleFavorite} isFavorite={false} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(data.trackCensoredName)).toBeInTheDocument();
    expect(screen.getByText(formatDate(data.releaseDate))).toBeInTheDocument();
    expect(screen.getByText(data.country)).toBeInTheDocument();
    expect(screen.getByText(`${data.trackPrice}$`)).toBeInTheDocument();
  });

  it('it should call onToggleFavorite when the favorite button is clicked', () => {
    render(<ArtistCard data={data} onToggleFavorite={onToggleFavorite} isFavorite={false} />);

    const favoriteButton = screen.getByTestId('toggle-favorite');
    fireEvent.click(favoriteButton);

    expect(onToggleFavorite).toHaveBeenCalledWith(data);
  });

  it('it should render the view link when collectionViewUrl is provided', () => {
    render(<ArtistCard data={data} onToggleFavorite={onToggleFavorite} isFavorite={false} />);

    const viewLink = screen.getByTestId('view-link');

    expect(viewLink).toBeInTheDocument();
    expect(viewLink).toHaveAttribute('target', '_blank');
    expect(viewLink).toHaveAttribute('href', data.collectionViewUrl);
  });

  it('it should not render the view link when collectionViewUrl is not provided', () => {
    const mockDat = {
      ...data,
      collectionViewUrl: '',
    };
    render(<ArtistCard data={mockDat} onToggleFavorite={onToggleFavorite} isFavorite={false} />);

    const viewLink = screen.queryByTestId('view-link');

    expect(viewLink).not.toBeInTheDocument();
  });
});
