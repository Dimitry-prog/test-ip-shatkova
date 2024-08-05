import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import * as nextRouting from 'next/navigation';

import ArtistList from '@/app/(root)/_components/artist-list';
import { TunesType } from '@/app/(root)/_types';
import { FavoritesProvider } from '@/shared/components/favorite-provider';
import { LIMIT_PER_PAGE } from '@/shared/lib/constants';

const data: TunesType = {
  resultCount: 1,
  results: [
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268012013,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: "Vivaldi's Rediscovery",
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: "Vivaldi's Rediscovery",
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/vivaldis-rediscovery/268006604?i=268012013&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/vivaldis-rediscovery/268006604?i=268012013&uo=4',
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
    },
  ],
};

const dataForPagination: TunesType = {
  resultCount: 48,
  results: [
    {
      wrapperType: 'track',
      kind: 'feature-movie',
      collectionId: 1721258046,
      trackId: 324354714,
      artistName: 'Tony Scott',
      collectionName: 'Columbia Pictures 100th Anniversary Bundle',
      trackName: 'The Taking of Pelham 123',
      collectionCensoredName: 'Columbia Pictures 100th Anniversary Bundle',
      trackCensoredName: 'The Taking of Pelham 123',
      collectionArtistId: 345346702,
      collectionArtistViewUrl:
        'https://itunes.apple.com/us/artist/sony-pictures-entertainment/345346702?uo=4',
      collectionViewUrl:
        'https://itunes.apple.com/us/movie/the-taking-of-pelham-123/id324354714?uo=4',
      trackViewUrl: 'https://itunes.apple.com/us/movie/the-taking-of-pelham-123/id324354714?uo=4',
      previewUrl:
        'https://video-ssl.itunes.apple.com/itunes-assets/Video118/v4/47/f3/e3/47f3e3e3-12db-328d-1b10-d8a7dd0129db/mzvf_5000929573207309300.640x404.h264lc.U.p.m4v',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Video/ad/08/f3/mzi.wgjdslfn.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Video/ad/08/f3/mzi.wgjdslfn.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Video/ad/08/f3/mzi.wgjdslfn.jpg/100x100bb.jpg',
      collectionPrice: 12.99,
      trackPrice: 12.99,
      trackRentalPrice: 3.99,
      collectionHdPrice: 12.99,
      trackHdPrice: 12.99,
      trackHdRentalPrice: 3.99,
      releaseDate: '2009-06-12T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      trackCount: 100,
      trackNumber: 92,
      trackTimeMillis: 6347013,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Action & Adventure',
      contentAdvisoryRating: 'R',
      longDescription:
        "In \"The Taking of Pelham 123,\" Denzel Washington stars as New York City subway dispatcher Walter Garber, whose ordinary day is thrown into chaos by an audacious crime: the hijacking of a subway train. John Travolta stars as Ryder, the criminal mastermind who, as leader of a highly-armed gang of four, threatens to execute the train's passengers unless a large ransom is paid within one hour. As the tension mounts beneath his feet, Garber employs his vast knowledge of the subway system in a battle to outwit Ryder and save the hostages. But there's one riddle Garber can't solve: even if the thieves get the money, how can they possibly escape?",
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 210610033,
      collectionId: 698976850,
      trackId: 698978433,
      artistName: 'Alkaline',
      collectionName: 'Love Tri-Angle Riddim',
      trackName: '123',
      collectionCensoredName: 'Love Tri-Angle Riddim',
      trackCensoredName: '123',
      collectionArtistId: 331122,
      collectionArtistName: 'Various Artists',
      artistViewUrl: 'https://music.apple.com/us/artist/alkaline/210610033?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/698976850?i=698978433&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/698976850?i=698978433&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d4/18/7d/d4187d2f-d933-948c-80ae-d255f59ab398/mzaf_14800568280633569255.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/87/01/26/87012671-51e5-bfc5-9db6-040fcb128ebb/Love_Tri-Angle_Riddim_Cover.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/87/01/26/87012671-51e5-bfc5-9db6-040fcb128ebb/Love_Tri-Angle_Riddim_Cover.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/87/01/26/87012671-51e5-bfc5-9db6-040fcb128ebb/Love_Tri-Angle_Riddim_Cover.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2013-09-03T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 13,
      trackTimeMillis: 183594,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Reggae',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 39917511,
      collectionId: 805580836,
      trackId: 805580863,
      artistName: 'The Motet',
      collectionName: 'The Motet',
      trackName: '123',
      collectionCensoredName: 'The Motet',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/the-motet/39917511?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/805580836?i=805580863&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/805580836?i=805580863&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/56/ea/c0/56eac0b4-8750-c2ad-69b6-d52b2282a7b7/mzaf_5176743420546270861.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/35/2c/29/352c2994-9617-7210-7745-d6096481cff3/859711902383_cover.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/35/2c/29/352c2994-9617-7210-7745-d6096481cff3/859711902383_cover.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/35/2c/29/352c2994-9617-7210-7745-d6096481cff3/859711902383_cover.jpg/100x100bb.jpg',
      collectionPrice: 8.91,
      trackPrice: 0.99,
      releaseDate: '2014-02-10T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 9,
      trackNumber: 2,
      trackTimeMillis: 297640,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 255303209,
      collectionId: 971238498,
      trackId: 971238815,
      artistName: 'Flo Rida',
      collectionName: 'My House',
      trackName: 'GDFR (feat. Sage the Gemini & Lookas)',
      collectionCensoredName: 'My House',
      trackCensoredName: 'GDFR (feat. Sage the Gemini & Lookas)',
      artistViewUrl: 'https://music.apple.com/us/artist/flo-rida/255303209?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/gdfr-feat-sage-the-gemini-lookas/971238498?i=971238815&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/gdfr-feat-sage-the-gemini-lookas/971238498?i=971238815&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/5a/b6/6b/5ab66b5d-aebc-0903-6725-025e775b2537/mzaf_10389079026562184857.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a9/aa/d0/a9aad0bb-e8a3-768f-8555-4b644a17553e/075679930903.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a9/aa/d0/a9aad0bb-e8a3-768f-8555-4b644a17553e/075679930903.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a9/aa/d0/a9aad0bb-e8a3-768f-8555-4b644a17553e/075679930903.jpg/100x100bb.jpg',
      collectionPrice: 8.99,
      trackPrice: 1.29,
      releaseDate: '2014-10-21T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 7,
      trackNumber: 6,
      trackTimeMillis: 190186,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 704309129,
      collectionId: 1463404716,
      trackId: 1463404722,
      artistName: 'Jess Glynne',
      collectionName: 'Always in Between (Deluxe)',
      trackName: '123',
      collectionCensoredName: 'Always in Between (Deluxe)',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/jess-glynne/704309129?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/1463404716?i=1463404722&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/1463404716?i=1463404722&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1b/b0/5f/1bb05fe2-66d7-65ce-0ce3-910624a7800e/mzaf_11179117851097471290.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2f/95/12/2f95123c-6fb0-055d-f018-a540f22848c6/190295416836.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2f/95/12/2f95123c-6fb0-055d-f018-a540f22848c6/190295416836.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2f/95/12/2f95123c-6fb0-055d-f018-a540f22848c6/190295416836.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2018-10-12T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 6,
      trackTimeMillis: 190280,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'feature-movie',
      collectionId: 1396263159,
      trackId: 1080552620,
      artistName: 'David Feiss',
      collectionName: 'Open Season 1-2-3-4',
      trackName: 'Open Season: Scared Silly',
      collectionCensoredName: 'Open Season 1-2-3-4',
      trackCensoredName: 'Open Season: Scared Silly',
      collectionArtistId: 345346702,
      collectionArtistViewUrl:
        'https://itunes.apple.com/us/artist/sony-pictures-entertainment/345346702?uo=4',
      collectionViewUrl:
        'https://itunes.apple.com/us/movie/open-season-scared-silly/id1080552620?uo=4',
      trackViewUrl: 'https://itunes.apple.com/us/movie/open-season-scared-silly/id1080552620?uo=4',
      previewUrl:
        'https://video-ssl.itunes.apple.com/itunes-assets/Video127/v4/ba/db/fc/badbfc16-6c41-ec7b-1e8e-8cc4623f0a19/mzvf_8658178664566024859.640x480.h264lc.U.p.m4v',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Video32/v4/83/bc/2b/83bc2b72-255f-4f19-638e-278e0117ffbd/mzm.innaosxb.lsr/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Video32/v4/83/bc/2b/83bc2b72-255f-4f19-638e-278e0117ffbd/mzm.innaosxb.lsr/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Video32/v4/83/bc/2b/83bc2b72-255f-4f19-638e-278e0117ffbd/mzm.innaosxb.lsr/100x100bb.jpg',
      collectionPrice: 12.99,
      trackPrice: 12.99,
      trackRentalPrice: 3.99,
      collectionHdPrice: 12.99,
      trackHdPrice: 12.99,
      trackHdRentalPrice: 3.99,
      releaseDate: '2016-03-08T08:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 4,
      trackNumber: 4,
      trackTimeMillis: 5089963,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Kids & Family',
      contentAdvisoryRating: 'PG',
      shortDescription:
        'Boog and Elliot are back in an all-new fun-tastic adventure! When Elliot tells a campfire story of a',
      longDescription:
        'Boog and Elliot are back in an all-new fun-tastic adventure! When Elliot tells a campfire story of a monster in the woods, Boog – who has never been the bravest of bears – becomes very scared. His best friend Elliot comes up with a crazy plan to scare the fear out of Boog! With the help of Mr. Weenie, McSquizzy and all your favorite forest friends, they venture on a hilarious journey where the power of friendship helps Boog overcome his fears with lots of laughs and some surprises along the way!',
      hasITunesExtras: true,
    },
    {
      wrapperType: 'track',
      kind: 'tv-episode',
      artistId: 1166316184,
      collectionId: 1166316185,
      trackId: 1176347024,
      artistName: 'Victoria',
      collectionName: 'Victoria, Season 1',
      trackName: 'Doll 123 (UK Edition)',
      collectionCensoredName: 'Victoria, Season 1',
      trackCensoredName: 'Doll 123 (UK Edition)',
      artistViewUrl: 'https://itunes.apple.com/us/tv-show/victoria/id1166316184?uo=4',
      collectionViewUrl:
        'https://itunes.apple.com/us/tv-season/doll-123-uk-edition/id1166316185?i=1176347024&uo=4',
      trackViewUrl:
        'https://itunes.apple.com/us/tv-season/doll-123-uk-edition/id1166316185?i=1176347024&uo=4',
      previewUrl:
        'https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/8c/ba/fd/8cbafd09-8bac-12b4-87c0-130e750c4b11/mzvf_12889238523537417059.640x478.h264lc.U.p.m4v',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/cc/b0/af/ccb0af46-c957-8e8e-6886-044575bf535f/pr_source.lsr/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/cc/b0/af/ccb0af46-c957-8e8e-6886-044575bf535f/pr_source.lsr/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/cc/b0/af/ccb0af46-c957-8e8e-6886-044575bf535f/pr_source.lsr/100x100bb.jpg',
      collectionPrice: 14.99,
      trackPrice: 1.99,
      collectionHdPrice: 19.99,
      trackHdPrice: 2.99,
      releaseDate: '2017-01-15T08:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 19,
      trackNumber: 1,
      trackTimeMillis: 4192223,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Drama',
      contentAdvisoryRating: 'TV-PG',
      shortDescription:
        '18-year-old Alexandrina’s life transforms upon becoming Queen; no longer hidden in Kensington Palace',
      longDescription:
        '18-year-old Alexandrina’s life transforms upon becoming Queen; no longer hidden in Kensington Palace under the repressive system of her mother’s advisor Lord Conroy, she renames herself Victoria and revels in her newfound freedom with the charismatic prime minister Lord Melbourne. But Victoria’s inexperience makes her susceptible to mistakes and ultimately, scandal.',
    },
    {
      wrapperType: 'track',
      kind: 'feature-movie',
      trackId: 279300076,
      artistName: 'Joseph Sargent',
      trackName: 'The Taking of Pelham One Two Three',
      trackCensoredName: 'The Taking of Pelham One Two Three',
      trackViewUrl:
        'https://itunes.apple.com/us/movie/the-taking-of-pelham-one-two-three/id279300076?uo=4',
      previewUrl:
        'https://video-ssl.itunes.apple.com/itunes-assets/Video128/v4/b0/89/94/b0899490-7d39-2ea1-e540-df4f3dc972be/mzvf_7165623465829062450.640x362.h264lc.U.p.m4v',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/2f/d8/fb/2fd8fbc7-50af-9467-45b4-a628ed181adf/ticket.zhkvtyvv.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/2f/d8/fb/2fd8fbc7-50af-9467-45b4-a628ed181adf/ticket.zhkvtyvv.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/2f/d8/fb/2fd8fbc7-50af-9467-45b4-a628ed181adf/ticket.zhkvtyvv.jpg/100x100bb.jpg',
      collectionPrice: 14.99,
      trackPrice: 14.99,
      trackRentalPrice: 3.99,
      collectionHdPrice: 14.99,
      trackHdPrice: 14.99,
      trackHdRentalPrice: 3.99,
      releaseDate: '1974-10-02T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      trackTimeMillis: 6269768,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Action & Adventure',
      contentAdvisoryRating: 'R',
      longDescription:
        "Walter Matthau stars as a New York transit cop who must keep four ruthless terrorists who've hijacked a Bronx subway car from killing hostages (a pimp, a pregnant Puerto Rican woman, a hippie, a prostitute, a WASP, a wino, and a gay man) one by one if their $1,000,000 ransom demand is not met within an hour.",
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 919727,
      collectionId: 193045167,
      trackId: 193045379,
      artistName: 'Gloria Estefan & Miami Sound Machine',
      collectionName: 'Greatest Hits',
      trackName: '1,2,3',
      collectionCensoredName: 'Greatest Hits',
      trackCensoredName: '1,2,3 (Remix)',
      collectionArtistId: 485022,
      collectionArtistName: 'Gloria Estefan',
      collectionArtistViewUrl: 'https://music.apple.com/us/artist/gloria-estefan/485022?uo=4',
      artistViewUrl:
        'https://music.apple.com/us/artist/gloria-estefan-miami-sound-machine/919727?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/1-2-3-remix/193045167?i=193045379&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/1-2-3-remix/193045167?i=193045379&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/25/ac/2e/25ac2e6e-c24e-3b2c-0ba8-8bfcf581426a/mzaf_10014065610653593490.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/af/b9/e9/afb9e91a-fe81-37ec-0695-4fb281acbf11/mzi.caumtamv.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/af/b9/e9/afb9e91a-fe81-37ec-0695-4fb281acbf11/mzi.caumtamv.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/af/b9/e9/afb9e91a-fe81-37ec-0695-4fb281acbf11/mzi.caumtamv.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '1987-01-01T08:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 4,
      trackTimeMillis: 214573,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'tv-episode',
      artistId: 190066649,
      collectionId: 192075238,
      trackId: 253666725,
      artistName: "Grey's Anatomy",
      collectionName: "Grey's Anatomy, Season 3",
      trackName: 'Testing 1-2-3',
      collectionCensoredName: "Grey's Anatomy, Season 3",
      trackCensoredName: 'Testing 1-2-3',
      artistViewUrl: 'https://itunes.apple.com/us/tv-show/greys-anatomy/id190066649?uo=4',
      collectionViewUrl:
        'https://itunes.apple.com/us/tv-season/testing-1-2-3/id192075238?i=253666725&uo=4',
      trackViewUrl:
        'https://itunes.apple.com/us/tv-season/testing-1-2-3/id192075238?i=253666725&uo=4',
      previewUrl:
        'https://video-ssl.itunes.apple.com/itunes-assets/Video126/v4/e1/7e/28/e17e28e6-4e17-476b-bb12-119a21eb4c88/mzvf_10986848767098227749.640x480.h264lc.U.p.m4v',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Video1/v4/fb/5f/7e/fb5f7e00-42e3-ab5a-051b-180b24d4363b/mzl.soexaizu.lsr/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Video1/v4/fb/5f/7e/fb5f7e00-42e3-ab5a-051b-180b24d4363b/mzl.soexaizu.lsr/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Video1/v4/fb/5f/7e/fb5f7e00-42e3-ab5a-051b-180b24d4363b/mzl.soexaizu.lsr/100x100bb.jpg',
      collectionPrice: 19.99,
      trackPrice: 1.99,
      collectionHdPrice: 24.99,
      trackHdPrice: 2.99,
      releaseDate: '2007-05-10T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 25,
      trackNumber: 24,
      trackTimeMillis: 2609857,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Drama',
      contentAdvisoryRating: 'TV-14',
      shortDescription:
        "The interns take the biggest test of their careers, their first-year medical exams, as the residents attend to three injured mountain climbers. Meanwhile Callie's suspicions of George and Izzie grow, and Cristina struggles to write her wedding vows.",
      longDescription:
        "The interns take the biggest test of their careers, their first-year medical exams, as the residents attend to three injured mountain climbers. Meanwhile Callie's suspicions of George and Izzie grow, and Cristina struggles to write her wedding vows.",
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 255303209,
      collectionId: 966411595,
      trackId: 966412058,
      artistName: 'Flo Rida',
      collectionName: 'Furious 7 (Original Motion Picture Soundtrack)',
      trackName: 'GDFR (feat. Sage the Gemini and Lookas) [Noodles Remix]',
      collectionCensoredName: 'Furious 7 (Original Motion Picture Soundtrack)',
      trackCensoredName: 'GDFR (feat. Sage the Gemini and Lookas) [Noodles Remix]',
      collectionArtistId: 36270,
      collectionArtistName: 'Various Artists',
      artistViewUrl: 'https://music.apple.com/us/artist/flo-rida/255303209?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/gdfr-feat-sage-the-gemini-and-lookas-noodles-remix/966411595?i=966412058&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/gdfr-feat-sage-the-gemini-and-lookas-noodles-remix/966411595?i=966412058&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e2/3a/8c/e23a8cbf-6879-bda8-28f4-b0457e6e01aa/mzaf_11282661917692395707.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/8a/68/e68a688e-129e-cb9d-938f-bc3ee37059ae/075679930910.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/8a/68/e68a688e-129e-cb9d-938f-bc3ee37059ae/075679930910.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/8a/68/e68a688e-129e-cb9d-938f-bc3ee37059ae/075679930910.jpg/100x100bb.jpg',
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: '2015-03-17T07:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 16,
      trackNumber: 12,
      trackTimeMillis: 263787,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'tv-episode',
      artistId: 589647829,
      collectionId: 1202984501,
      trackId: 1222786308,
      artistName: 'The Americans',
      collectionName: 'The Americans, Season 5',
      trackName: 'Lotus 1-2-3',
      collectionCensoredName: 'The Americans, Season 5',
      trackCensoredName: 'Lotus 1-2-3',
      artistViewUrl: 'https://itunes.apple.com/us/tv-show/the-americans/id589647829?uo=4',
      collectionViewUrl:
        'https://itunes.apple.com/us/tv-season/lotus-1-2-3/id1202984501?i=1222786308&uo=4',
      trackViewUrl:
        'https://itunes.apple.com/us/tv-season/lotus-1-2-3/id1202984501?i=1222786308&uo=4',
      previewUrl:
        'https://video-ssl.itunes.apple.com/itunes-assets/Video126/v4/a2/94/ed/a294ed3f-56a7-7b9d-b875-ada640f51eaf/mzvf_2664617408367830963.640x480.h264lc.U.p.m4v',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Video111/v4/6e/de/81/6ede814a-13c5-2a34-b5ee-6daba794e80c/mzl.fdepjojn.lsr/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Video111/v4/6e/de/81/6ede814a-13c5-2a34-b5ee-6daba794e80c/mzl.fdepjojn.lsr/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Video111/v4/6e/de/81/6ede814a-13c5-2a34-b5ee-6daba794e80c/mzl.fdepjojn.lsr/100x100bb.jpg',
      collectionPrice: 17.99,
      trackPrice: 1.99,
      collectionHdPrice: 19.99,
      trackHdPrice: 2.99,
      releaseDate: '2017-04-04T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 5,
      trackTimeMillis: 2846815,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Drama',
      contentAdvisoryRating: 'TV-MA',
      shortDescription:
        'Philip and Elizabeth receive surprising news about Henry -- and shattering news about a past',
      longDescription:
        'Philip and Elizabeth receive surprising news about Henry -- and shattering news about a past operation. Stan might be falling in love, but Philip wonders if something darker is going on.',
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 6392055,
      collectionId: 966411595,
      trackId: 966411603,
      artistName: 'Juicy J, Kevin Gates, Future & Sage the Gemini',
      collectionName: 'Furious 7 (Original Motion Picture Soundtrack)',
      trackName: 'Payback',
      collectionCensoredName: 'Furious 7 (Original Motion Picture Soundtrack)',
      trackCensoredName: 'Payback',
      collectionArtistId: 36270,
      collectionArtistName: 'Various Artists',
      artistViewUrl: 'https://music.apple.com/us/artist/juicy-j/6392055?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/payback/966411595?i=966411603&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/payback/966411595?i=966411603&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/36/2f/b1/362fb131-8608-5603-7e45-14615bdcdc5e/mzaf_680509866113104591.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/8a/68/e68a688e-129e-cb9d-938f-bc3ee37059ae/075679930910.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/8a/68/e68a688e-129e-cb9d-938f-bc3ee37059ae/075679930910.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e6/8a/68/e68a688e-129e-cb9d-938f-bc3ee37059ae/075679930910.jpg/100x100bb.jpg',
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: '2015-03-17T07:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 16,
      trackNumber: 8,
      trackTimeMillis: 237997,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 210610033,
      collectionId: 698976850,
      trackId: 698978369,
      artistName: 'Alkaline',
      collectionName: 'Love Tri-Angle Riddim',
      trackName: '123',
      collectionCensoredName: 'Love Tri-Angle Riddim',
      trackCensoredName: '123',
      collectionArtistId: 331122,
      collectionArtistName: 'Various Artists',
      artistViewUrl: 'https://music.apple.com/us/artist/alkaline/210610033?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/698976850?i=698978369&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/698976850?i=698978369&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1d/f7/bf/1df7bfce-33fa-4afa-1d9c-1856f4aceed7/mzaf_3646843605860689251.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/87/01/26/87012671-51e5-bfc5-9db6-040fcb128ebb/Love_Tri-Angle_Riddim_Cover.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/87/01/26/87012671-51e5-bfc5-9db6-040fcb128ebb/Love_Tri-Angle_Riddim_Cover.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/87/01/26/87012671-51e5-bfc5-9db6-040fcb128ebb/Love_Tri-Angle_Riddim_Cover.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2013-09-03T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'cleaned',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 12,
      trackTimeMillis: 183594,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Reggae',
      contentAdvisoryRating: 'Clean',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 396886868,
      collectionId: 797087476,
      trackId: 797087494,
      artistName: 'Matt Webb',
      collectionName: 'Right Direction - EP',
      trackName: '123',
      collectionCensoredName: 'Right Direction - EP',
      trackCensoredName: '123',
      artistViewUrl: 'https://books.apple.com/us/author/matt-webb/id396886868?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/797087476?i=797087494&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/797087476?i=797087494&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d6/98/65/d698656f-dff2-dfec-a05a-2f83c54cc0a9/mzaf_15202416390760333813.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/ba/e7/65/bae76513-368a-6aca-0b49-01aab04471a7/matt_webb_rd_COVER_square.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/ba/e7/65/bae76513-368a-6aca-0b49-01aab04471a7/matt_webb_rd_COVER_square.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/ba/e7/65/bae76513-368a-6aca-0b49-01aab04471a7/matt_webb_rd_COVER_square.jpg/100x100bb.jpg',
      collectionPrice: 6.99,
      trackPrice: 1.29,
      releaseDate: '2014-02-04T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 6,
      trackNumber: 2,
      trackTimeMillis: 148689,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 1472763733,
      collectionId: 1340623924,
      trackId: 1340624255,
      artistName: 'Tunnel Vision',
      collectionName: 'Days Away',
      trackName: '123',
      collectionCensoredName: 'Days Away',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/tunnel-vision/1472763733?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/1340623924?i=1340624255&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/1340623924?i=1340624255&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d4/3d/9e/d43d9eb3-225a-da80-1bd9-77ed30c454de/mzaf_10496487301754963281.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/20/dc/26/20dc265b-2f5f-f084-220a-72d1c84995da/192562118276.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/20/dc/26/20dc265b-2f5f-f084-220a-72d1c84995da/192562118276.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/20/dc/26/20dc265b-2f5f-f084-220a-72d1c84995da/192562118276.jpg/100x100bb.jpg',
      collectionPrice: 7.99,
      trackPrice: 0.99,
      releaseDate: '2018-03-09T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 8,
      trackTimeMillis: 184681,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Reggae',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 704309129,
      collectionId: 1402664799,
      trackId: 1402668846,
      artistName: 'Jess Glynne',
      collectionName: 'Always In Between',
      trackName: '123',
      collectionCensoredName: 'Always In Between',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/jess-glynne/704309129?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/1402664799?i=1402668846&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/1402664799?i=1402668846&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/3f/b1/ef/3fb1efb9-1ee6-745e-f2e8-20e8ca686694/mzaf_4755937413696890203.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/26/b9/7b/26b97bd5-5ff6-74a5-b85e-ad2a85b02026/190295595890.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/26/b9/7b/26b97bd5-5ff6-74a5-b85e-ad2a85b02026/190295595890.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/26/b9/7b/26b97bd5-5ff6-74a5-b85e-ad2a85b02026/190295595890.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2018-10-12T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 12,
      trackNumber: 6,
      trackTimeMillis: 190280,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop',
      isStreamable: false,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 255303209,
      collectionId: 960796894,
      trackId: 960797107,
      artistName: 'Flo Rida',
      collectionName: 'GDFR (feat. Sage the Gemini and Lookas) [Remixes] - Single',
      trackName: 'GDFR (feat. Sage the Gemini and Lookas) [K. Theory Remix]',
      collectionCensoredName: 'GDFR (feat. Sage the Gemini and Lookas) [Remixes] - Single',
      trackCensoredName: 'GDFR (feat. Sage the Gemini and Lookas) [K. Theory Remix]',
      artistViewUrl: 'https://music.apple.com/us/artist/flo-rida/255303209?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/gdfr-feat-sage-the-gemini-and-lookas-k-theory-remix/960796894?i=960797107&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/gdfr-feat-sage-the-gemini-and-lookas-k-theory-remix/960796894?i=960797107&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9a/55/1d/9a551d12-1d1a-bacc-98e2-34320d450373/mzaf_17135636695253544781.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/79/2d/d5/792dd51b-55cb-3be3-cf1b-f49a084fc7eb/075679928825.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/79/2d/d5/792dd51b-55cb-3be3-cf1b-f49a084fc7eb/075679928825.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/79/2d/d5/792dd51b-55cb-3be3-cf1b-f49a084fc7eb/075679928825.jpg/100x100bb.jpg',
      collectionPrice: 3.87,
      trackPrice: 1.29,
      releaseDate: '2014-12-23T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 3,
      trackNumber: 3,
      trackTimeMillis: 187960,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 6557621,
      collectionId: 338696106,
      trackId: 338696211,
      artistName: 'Josh Rouse',
      collectionName: 'Bedroom Classics, Vol. 3',
      trackName: '123',
      collectionCensoredName: 'Bedroom Classics, Vol. 3',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/josh-rouse/6557621?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/338696106?i=338696211&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/338696106?i=338696211&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/07/c9/7e/07c97e15-d72a-0bcf-7c77-2c0cc490e70f/mzaf_1412872546424703247.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1e/32/f7/1e32f765-68d8-057f-b897-14eb1ab7764b/859702547739_cover.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1e/32/f7/1e32f765-68d8-057f-b897-14eb1ab7764b/859702547739_cover.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/1e/32/f7/1e32f765-68d8-057f-b897-14eb1ab7764b/859702547739_cover.jpg/100x100bb.jpg',
      collectionPrice: 4.95,
      trackPrice: 0.99,
      releaseDate: '2008-10-21T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 5,
      trackNumber: 1,
      trackTimeMillis: 194147,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Rock',
      isStreamable: false,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268007080,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons -Vivaldi Violin Concerto In G Minor, Op. 8, No.',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons -Vivaldi Violin Concerto In G Minor, Op. 8, No.',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-g-minor-op-8-no/268006604?i=268007080&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-g-minor-op-8-no/268006604?i=268007080&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b7/37/f3/b737f3d6-37cf-20e1-eeb9-92078c1aab08/mzaf_7384553319996972773.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 4,
      trackTimeMillis: 317333,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 30765903,
      collectionId: 419971342,
      trackId: 419971539,
      artistName: 'Ariella Vaccarino',
      collectionName: 'Voice Lessons To Go for Kids! v.1- Sing Out Proud!',
      trackName: '123',
      collectionCensoredName: 'Voice Lessons To Go for Kids! v.1- Sing Out Proud!',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/ariella-vaccarino/30765903?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/419971342?i=419971539&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/419971342?i=419971539&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/Music/f5/71/26/mzm.bcobqivu.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/97/0c/b5/mzi.crooopox.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/97/0c/b5/mzi.crooopox.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/97/0c/b5/mzi.crooopox.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2011-02-14T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 56,
      trackNumber: 12,
      trackTimeMillis: 46053,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: "Children's Music",
      isStreamable: false,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 739087,
      collectionId: 359217779,
      trackId: 359217789,
      artistName: 'KJ-52',
      collectionName: '7th Avenue',
      trackName: '123',
      collectionCensoredName: '7th Avenue',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/kj-52/739087?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/359217779?i=359217789&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/359217779?i=359217789&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/00/c8/fe/00c8fe67-fe20-e695-1b6b-22481a7bedd9/mzaf_181149169960512111.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/30/f9/7f/mzi.jsiyyxah.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/30/f9/7f/mzi.jsiyyxah.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/30/f9/7f/mzi.jsiyyxah.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '1994-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 16,
      trackNumber: 2,
      trackTimeMillis: 241727,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Christian',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 277345,
      collectionId: 158708041,
      trackId: 158708165,
      artistName:
        'Sir Georg Solti, Vinson Cole, Ann Murray, Renée Fleming, Bryn Terfel, London Voices & London Symphony Orchestra',
      collectionName: 'Immortal Beloved (Original Motion Picture Soundtrack)',
      trackName: 'Missa Solemnis in D Major, Op. 123: Kyrie (excerpt)',
      collectionCensoredName: 'Immortal Beloved',
      trackCensoredName: 'Missa Solemnis in D Major, Op. 123: Kyrie (excerpt) [Voice]',
      collectionArtistId: 29893,
      collectionArtistName: 'London Symphony Orchestra & Sir Georg Solti',
      collectionArtistViewUrl:
        'https://music.apple.com/us/artist/london-symphony-orchestra/29893?uo=4',
      artistViewUrl: 'https://music.apple.com/us/artist/sir-georg-solti/277345?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/missa-solemnis-in-d-major-op-123-kyrie-excerpt-voice/158708041?i=158708165&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/missa-solemnis-in-d-major-op-123-kyrie-excerpt-voice/158708041?i=158708165&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c0/cb/50/c0cb5079-7e69-d048-2549-f6b6838d1289/mzaf_4554229160366999305.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/14/25/db/1425db7c-cccb-f199-081d-3ceb72069a8b/mzi.doubteqd.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/14/25/db/1425db7c-cccb-f199-081d-3ceb72069a8b/mzi.doubteqd.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/14/25/db/1425db7c-cccb-f199-081d-3ceb72069a8b/mzi.doubteqd.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '1994-12-06T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 13,
      trackNumber: 10,
      trackTimeMillis: 363400,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'feature-movie',
      collectionId: 1436363444,
      trackId: 1237445955,
      artistName: 'Tony Giglio',
      collectionName: 'S.W.A.T. 1-2-3',
      trackName: 'S.W.A.T.: Under Siege',
      collectionCensoredName: 'S.W.A.T. 1-2-3',
      trackCensoredName: 'S.W.A.T.: Under Siege',
      collectionArtistId: 345346702,
      collectionArtistViewUrl:
        'https://itunes.apple.com/us/artist/sony-pictures-entertainment/345346702?uo=4',
      collectionViewUrl: 'https://itunes.apple.com/us/movie/s-w-a-t-under-siege/id1237445955?uo=4',
      trackViewUrl: 'https://itunes.apple.com/us/movie/s-w-a-t-under-siege/id1237445955?uo=4',
      previewUrl:
        'https://video-ssl.itunes.apple.com/itunes-assets/Video117/v4/2c/24/3a/2c243aac-6415-2f8e-8994-db67f021e495/mzvf_4796502180596939807.640x480.h264lc.U.p.m4v',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Video51/v4/d8/52/4c/d8524cdf-d15d-fb6a-0f12-8db8ee6c4deb/SWAT_UNDER_SIEGE_2017_TH_MLF-WW-artwork.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Video51/v4/d8/52/4c/d8524cdf-d15d-fb6a-0f12-8db8ee6c4deb/SWAT_UNDER_SIEGE_2017_TH_MLF-WW-artwork.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Video51/v4/d8/52/4c/d8524cdf-d15d-fb6a-0f12-8db8ee6c4deb/SWAT_UNDER_SIEGE_2017_TH_MLF-WW-artwork.jpg/100x100bb.jpg',
      collectionPrice: 12.99,
      trackPrice: 12.99,
      trackRentalPrice: 3.99,
      collectionHdPrice: 12.99,
      trackHdPrice: 12.99,
      trackHdRentalPrice: 3.99,
      releaseDate: '2017-08-01T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 3,
      trackNumber: 3,
      trackTimeMillis: 5352058,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Action & Adventure',
      contentAdvisoryRating: 'R',
      shortDescription:
        'When a D.E.A. and S.W.A.T. cartel takedown ends in a shootout, S.W.A.T. Agent Travis Hall seizes a',
      longDescription:
        'When a D.E.A. and S.W.A.T. cartel takedown ends in a shootout, S.W.A.T. Agent Travis Hall seizes a mysterious prisoner taking him into custody. Before long, the S.W.A.T. compound is under siege by wave-after-wave of assault teams attempting to recover the prisoner known as “The Scorpion” for the tattoo blazed across his back. When Travis discovers that his prisoner is a Secret Ops double agent planted within the cartel, it’s up to him and his expert S.W.A.T. team to keep “The Scorpion” and his billion dollar secrets safe.',
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 757893904,
      collectionId: 1126056943,
      trackId: 1126057007,
      artistName: 'Colony House',
      collectionName: 'Only the Lonely',
      trackName: '1234',
      collectionCensoredName: 'Only the Lonely',
      trackCensoredName: '1234',
      artistViewUrl: 'https://music.apple.com/us/artist/colony-house/757893904?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/1234/1126056943?i=1126057007&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/1234/1126056943?i=1126057007&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fc/20/86/fc2086b2-f028-27fa-4ccd-b327ae209414/mzaf_12916758742475844551.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/03/4e/da/034eda5d-dcf3-5147-18a1-b60083fea3a2/886445974355.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/03/4e/da/034eda5d-dcf3-5147-18a1-b60083fea3a2/886445974355.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/03/4e/da/034eda5d-dcf3-5147-18a1-b60083fea3a2/886445974355.jpg/100x100bb.jpg',
      collectionPrice: 7.99,
      trackPrice: 1.29,
      releaseDate: '2017-01-13T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 12,
      trackNumber: 2,
      trackTimeMillis: 203246,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Alternative',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 210610033,
      collectionId: 816853195,
      trackId: 816853197,
      artistName: 'Alkaline',
      collectionName: '123 - Single',
      trackName: '123',
      collectionCensoredName: '123 - Single',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/alkaline/210610033?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/816853195?i=816853197&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/816853195?i=816853197&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/03/80/1a/03801aa7-0f69-6fec-9d02-3be9b6e33bf5/mzaf_48143964026833673.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/c7/c4/06/c7c406ca-797b-809e-645e-e017b17e192b/781976078629_Cover.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/c7/c4/06/c7c406ca-797b-809e-645e-e017b17e192b/781976078629_Cover.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/c7/c4/06/c7c406ca-797b-809e-645e-e017b17e192b/781976078629_Cover.jpg/100x100bb.jpg',
      collectionPrice: 1.98,
      trackPrice: 0.99,
      releaseDate: '2013-09-03T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 2,
      trackNumber: 1,
      trackTimeMillis: 183475,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Modern Dancehall',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 304661295,
      collectionId: 304661283,
      trackId: 304661294,
      artistName: 'Christian TV',
      collectionName: 'Fired Up! (Original Motion Picture Soundtrack)',
      trackName: '1,2,3 Turnaround',
      collectionCensoredName: 'Fired Up! (Original Motion Picture Soundtrack)',
      trackCensoredName: '1,2,3 Turnaround',
      collectionArtistId: 58631709,
      collectionArtistName: 'Various Artists',
      artistViewUrl: 'https://music.apple.com/us/artist/christian-tv/304661295?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/1-2-3-turnaround/304661283?i=304661294&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/1-2-3-turnaround/304661283?i=304661294&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview19/v4/cf/57/1e/cf571e57-55fe-0bcd-1ee0-ecc391d24f09/mzaf_2248991120828917611.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/e0/f4/82/mzi.fknpkigk.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/e0/f4/82/mzi.fknpkigk.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/e0/f4/82/mzi.fknpkigk.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2009-02-17T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 4,
      trackTimeMillis: 179227,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Soundtrack',
      isStreamable: false,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268006615,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In e Major, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In e Major, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-e-major-op-8-no/268006604?i=268006615&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-e-major-op-8-no/268006604?i=268006615&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cb/03/a5/cb03a508-d77a-8d59-a090-47928a7b2a67/mzaf_6760482730885479853.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 1,
      trackTimeMillis: 205067,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 204891,
      collectionId: 28518205,
      trackId: 28518232,
      artistName: 'Fabolous',
      collectionName: 'Real Talk',
      trackName: 'Real Talk (123)',
      collectionCensoredName: 'Real Talk',
      trackCensoredName: 'Real Talk (123)',
      artistViewUrl: 'https://music.apple.com/us/artist/fabolous/204891?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/real-talk-123/28518205?i=28518232&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/real-talk-123/28518205?i=28518232&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5a/25/0d/5a250dfc-3f06-341a-24dc-c48553abe961/mzaf_2650305855344297919.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/y2004/m11/d04/h10/s06.pcpvkatw.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/y2004/m11/d04/h10/s06.pcpvkatw.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/y2004/m11/d04/h10/s06.pcpvkatw.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2004-11-09T08:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 3,
      trackTimeMillis: 266640,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268007275,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In G Minor, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In G Minor, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-g-minor-op-8-no/268006604?i=268007275&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-g-minor-op-8-no/268006604?i=268007275&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/43/d9/19/43d91933-a9c4-fcbc-1aa4-930187f02789/mzaf_13105830193278233619.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 6,
      trackTimeMillis: 165240,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268007912,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In F Minor, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In F Minor, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-minor-op-8-no/268006604?i=268007912&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-minor-op-8-no/268006604?i=268007912&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/03/42/a9/0342a9cd-5339-06dd-59e1-c733956e042e/mzaf_2278820198288348418.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 10,
      trackTimeMillis: 199600,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 13453308,
      collectionId: 1440837029,
      trackId: 1440837804,
      artistName: 'Feist',
      collectionName: 'The Reminder (Deluxe Version)',
      trackName: '1234',
      collectionCensoredName: 'The Reminder (Deluxe Version)',
      trackCensoredName: '1234',
      artistViewUrl: 'https://music.apple.com/us/artist/feist/13453308?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/1234/1440837029?i=1440837804&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/1234/1440837029?i=1440837804&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e7/ba/2f/e7ba2f8e-4825-5553-6492-d688338b3e6c/mzaf_7729667675021683625.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cc/f4/46/ccf44641-40d8-018d-1bb2-e86ed8b7beeb/00602547820976.rgb.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cc/f4/46/ccf44641-40d8-018d-1bb2-e86ed8b7beeb/00602547820976.rgb.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/cc/f4/46/ccf44641-40d8-018d-1bb2-e86ed8b7beeb/00602547820976.rgb.jpg/100x100bb.jpg',
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: '2007-04-23T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 15,
      trackNumber: 9,
      trackTimeMillis: 183667,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268007390,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In F Major, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In F Major, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-major-op-8-no/268006604?i=268007390&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-major-op-8-no/268006604?i=268007390&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/84/77/88/8477889b-9abb-57b5-6e12-06f9d8777f6c/mzaf_15828320169031382693.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 7,
      trackTimeMillis: 275533,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 250243749,
      collectionId: 374147786,
      trackId: 374147791,
      artistName: 'Sirusho',
      collectionName: 'Havatum Em',
      trackName: '123',
      collectionCensoredName: 'Havatum Em',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/sirusho/250243749?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/374147786?i=374147791&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/374147786?i=374147791&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c8/ec/6c/c8ec6cbe-3029-005c-aee1-5d64e75ee7b5/mzaf_13301190201920821877.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/2d/85/ea/mzi.kaieuzac.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/2d/85/ea/mzi.kaieuzac.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/2d/85/ea/mzi.kaieuzac.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2010-05-22T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 14,
      trackNumber: 3,
      trackTimeMillis: 250677,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 128848721,
      collectionId: 128848719,
      trackId: 128848727,
      artistName: 'Motova8',
      collectionName: 'Marine Corps Hip-Hop Cadence Vol. 1',
      trackName: '1,2,3,4 Marine Corps',
      collectionCensoredName: 'Marine Corps Hip-Hop Cadence Vol. 1',
      trackCensoredName: '1,2,3,4 Marine Corps',
      artistViewUrl: 'https://music.apple.com/us/artist/motova8/128848721?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/1-2-3-4-marine-corps/128848719?i=128848727&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/1-2-3-4-marine-corps/128848719?i=128848727&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ba/7e/b5/ba7eb597-62e4-ce85-755f-913e0058d80f/mzaf_4269958559969993741.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/06/ae/be/06aebe8a-dfdb-53da-768d-e7b14e2e31a6/mzi.ynmidluv.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/06/ae/be/06aebe8a-dfdb-53da-768d-e7b14e2e31a6/mzi.ynmidluv.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/06/ae/be/06aebe8a-dfdb-53da-768d-e7b14e2e31a6/mzi.ynmidluv.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2006-01-19T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 13,
      trackNumber: 2,
      trackTimeMillis: 222173,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 360389344,
      collectionId: 883437284,
      trackId: 883437423,
      artistName: 'Falz',
      collectionName: 'Wazup Guy: The Album (Deluxe Edition)',
      trackName: '123 (feat. Oyinkansola)',
      collectionCensoredName: 'Wazup Guy: The Album (Deluxe Edition)',
      trackCensoredName: '123 (feat. Oyinkansola)',
      artistViewUrl: 'https://music.apple.com/us/artist/falz/360389344?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/123-feat-oyinkansola/883437284?i=883437423&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/123-feat-oyinkansola/883437284?i=883437423&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/93/7f/a4/937fa4d3-7224-c782-2a24-03b5cc23d556/mzaf_14372775319357884805.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/aa/c4/78/aac478ba-bab6-c01e-b905-a95068f7cf0a/cover.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/aa/c4/78/aac478ba-bab6-c01e-b905-a95068f7cf0a/cover.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/aa/c4/78/aac478ba-bab6-c01e-b905-a95068f7cf0a/cover.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2014-05-30T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 15,
      trackTimeMillis: 247040,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Afrobeats',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 6966618,
      collectionId: 1648750181,
      trackId: 1648750633,
      artistName: 'Oro Solido',
      collectionName: 'Top 40',
      trackName: '123',
      collectionCensoredName: 'Top 40',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/oro-solido/6966618?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/1648750181?i=1648750633&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/1648750181?i=1648750633&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/bb/12/e8/bb12e84c-374d-ca15-b822-139f30b9affe/mzaf_2293356121815296981.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/07/fc/a4/07fca40f-2ec4-39c2-887b-69c429c968d9/Cover_190374772525.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/07/fc/a4/07fca40f-2ec4-39c2-887b-69c429c968d9/Cover_190374772525.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/07/fc/a4/07fca40f-2ec4-39c2-887b-69c429c968d9/Cover_190374772525.jpg/100x100bb.jpg',
      collectionPrice: 11.99,
      trackPrice: 1.29,
      releaseDate: '1994-07-03T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 40,
      trackNumber: 32,
      trackTimeMillis: 196173,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Música tropical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 378591595,
      collectionId: 383205179,
      trackId: 383205384,
      artistName: 'LOL Boys',
      collectionName: '123 - Single',
      trackName: '123 (Original Mix)',
      collectionCensoredName: '123 - Single',
      trackCensoredName: '123 (Original Mix)',
      artistViewUrl: 'https://music.apple.com/us/artist/lol-boys/378591595?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/123-original-mix/383205179?i=383205384&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123-original-mix/383205179?i=383205384&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/60/7b/52/607b526b-9f62-92d5-87d8-bc218b7f5feb/mzaf_3043848934491801130.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/4f/68/34/mzi.ezicsajp.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/4f/68/34/mzi.ezicsajp.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/4f/68/34/mzi.ezicsajp.jpg/100x100bb.jpg',
      collectionPrice: 1.98,
      trackPrice: 0.99,
      releaseDate: '2010-08-10T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 2,
      trackNumber: 1,
      trackTimeMillis: 236756,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Electronic',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 306135173,
      collectionId: 401694293,
      trackId: 401694376,
      artistName: 'Christopher von Uckermann',
      collectionName: 'Somos',
      trackName: '123',
      collectionCensoredName: 'Somos',
      trackCensoredName: '123',
      artistViewUrl: 'https://music.apple.com/us/artist/christopher-von-uckermann/306135173?uo=4',
      collectionViewUrl: 'https://music.apple.com/us/album/123/401694293?i=401694376&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/123/401694293?i=401694376&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/Music/v4/c4/06/3a/c4063aaf-d029-d2f4-50b5-0515115f90da/mzaf_2898656056347641554.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/49/80/1c/mzi.loxogehg.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/49/80/1c/mzi.loxogehg.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music/49/80/1c/mzi.loxogehg.jpg/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '2010-11-16T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 12,
      trackNumber: 5,
      trackTimeMillis: 217813,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop Latino',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 191073866,
      collectionId: 213587340,
      trackId: 213587761,
      artistName: 'Loney Dear',
      collectionName: 'Loney, Noir',
      trackName: 'Hard Days 1.2.3.4',
      collectionCensoredName: 'Loney, Noir',
      trackCensoredName: 'Hard Days 1.2.3.4',
      artistViewUrl: 'https://music.apple.com/us/artist/loney-dear/191073866?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/hard-days-1-2-3-4/213587340?i=213587761&uo=4',
      trackViewUrl: 'https://music.apple.com/us/album/hard-days-1-2-3-4/213587340?i=213587761&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/fd/19/59/fd195920-30eb-0f83-1971-615da42ee51d/mzaf_15589975507405328011.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f6/ad/c0/f6adc03b-2ba9-334e-ec51-5bd29ee39857/098787073164.png/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f6/ad/c0/f6adc03b-2ba9-334e-ec51-5bd29ee39857/098787073164.png/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f6/ad/c0/f6adc03b-2ba9-334e-ec51-5bd29ee39857/098787073164.png/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: '2007-02-06T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 10,
      trackNumber: 4,
      trackTimeMillis: 203440,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Alternative',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268008069,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In F Minor, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In F Minor, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-minor-op-8-no/268006604?i=268008069&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-minor-op-8-no/268006604?i=268008069&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/70/d8/a0/70d8a024-287c-d9bb-1465-a3d409694a8a/mzaf_14085335620697953253.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 12,
      trackTimeMillis: 190800,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268007781,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In F Major, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In F Major, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-major-op-8-no/268006604?i=268007781&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-major-op-8-no/268006604?i=268007781&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/67/66/68/6766680b-3708-393a-3961-ecf2344f19d4/mzaf_2731436209387212830.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 9,
      trackTimeMillis: 200133,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 836894017,
      collectionId: 651515410,
      trackId: 651515503,
      artistName: 'GetItDmac',
      collectionName: 'Panoramic (feat. Sage the Gemini & Show Banga) - Single',
      trackName: 'Panoramic (feat. Sage the Gemini & Show Banga)',
      collectionCensoredName: 'Panoramic (feat. Sage the Gemini & Show Banga) - Single',
      trackCensoredName: 'Panoramic (feat. Sage the Gemini & Show Banga)',
      artistViewUrl: 'https://music.apple.com/us/artist/getitdmac/836894017?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/panoramic-feat-sage-the-gemini-show-banga/651515410?i=651515503&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/panoramic-feat-sage-the-gemini-show-banga/651515410?i=651515503&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/31/b8/49/31b849e1-a51c-542c-40d6-157bd507edf4/mzaf_7700242376414590598.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d5/2a/87/d52a8758-7154-56a9-e35d-108b87ca1aa9/res1000x_Pan_iTunes.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d5/2a/87/d52a8758-7154-56a9-e35d-108b87ca1aa9/res1000x_Pan_iTunes.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d5/2a/87/d52a8758-7154-56a9-e35d-108b87ca1aa9/res1000x_Pan_iTunes.jpg/100x100bb.jpg',
      collectionPrice: 1.29,
      trackPrice: 1.29,
      releaseDate: '2013-05-21T12:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 1,
      trackNumber: 1,
      trackTimeMillis: 159500,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Hip-Hop/Rap',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268006897,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In e Major, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In e Major, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-e-major-op-8-no/268006604?i=268006897&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-e-major-op-8-no/268006604?i=268006897&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d7/7b/9f/d77b9f4d-eee5-42ee-4c83-33b94396d107/mzaf_11732412671266198380.plus.aac.p.m4a',
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
      trackNumber: 3,
      trackTimeMillis: 243560,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268007239,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In G Minor, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In G Minor, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-g-minor-op-8-no/268006604?i=268007239&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-g-minor-op-8-no/268006604?i=268007239&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2f/47/89/2f4789e6-f19d-b8dd-7723-5aebe8a5bc35/mzaf_1711858630045879020.plus.aac.p.m4a',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0d/a3/fd/0da3fd5c-0c10-b2e4-6939-08d32ab10f1e/mzi.shgwrxng.tif/100x100bb.jpg',
      collectionPrice: 9.99,
      trackPrice: 0.99,
      releaseDate: '1980-01-01T12:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 5,
      trackTimeMillis: 129760,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268008028,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In F Minor, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In F Minor, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-minor-op-8-no/268006604?i=268008028&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-f-minor-op-8-no/268006604?i=268008028&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a3/d7/f9/a3d7f905-d1b3-5768-469f-f7002ae7fe99/mzaf_5974048804706627776.plus.aac.p.m4a',
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
      trackNumber: 11,
      trackTimeMillis: 131000,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268006826,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: 'The Four Seasons - Vivaldi Violin Concerto In e Major, Op. 8, No',
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: 'The Four Seasons - Vivaldi Violin Concerto In e Major, Op. 8, No',
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-e-major-op-8-no/268006604?i=268006826&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/the-four-seasons-vivaldi-violin-concerto-in-e-major-op-8-no/268006604?i=268006826&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/77/5a/0d/775a0dce-45af-e576-8a76-856a7539b54c/mzaf_13312880284046362408.plus.aac.p.m4a',
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
      trackNumber: 2,
      trackTimeMillis: 172000,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 268006611,
      collectionId: 268006604,
      trackId: 268008245,
      artistName: 'Los Angeles Chamber Orchestra, G. Schwarz, Vivaldi Baroque Group',
      collectionName: 'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackName: "Vivaldi's Life and Music",
      collectionCensoredName:
        'The Four Seasons Vivaldi, Opus VIII, Nos. 1,2,3,4, Musically Speaking',
      trackCensoredName: "Vivaldi's Life and Music",
      artistViewUrl:
        'https://music.apple.com/us/artist/los-angeles-chamber-orchestra-g-schwarz-vivaldi-baroque/268006611?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/vivaldis-life-and-music/268006604?i=268008245&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/vivaldis-life-and-music/268006604?i=268008245&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/24/98/1a/24981a0e-fa69-6aa4-ef5e-f3fe0a6e297a/mzaf_133338251289324337.plus.aac.p.m4a',
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
      trackNumber: 13,
      trackTimeMillis: 560293,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Classical',
      isStreamable: true,
    },
  ],
};

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('ArtistList', () => {
  beforeEach(() => {
    (nextRouting.usePathname as jest.Mock).mockReturnValue('/');
    (nextRouting.useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    (nextRouting.useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
  });

  it('it should render a list with correct length of items', () => {
    render(
      <FavoritesProvider>
        <ArtistList data={data} />
      </FavoritesProvider>
    );

    const artistArray = screen.getAllByRole('img');

    expect(artistArray.length).toBe(1);
  });

  it('it should render a list with h3 tag', () => {
    render(
      <FavoritesProvider>
        <ArtistList data={data} />
      </FavoritesProvider>
    );

    const heading = screen.getByRole('heading', { level: 3 });

    expect(heading).toBeInTheDocument();
  });

  it("it should render a list with text Vivaldi's Rediscovery", () => {
    render(
      <FavoritesProvider>
        <ArtistList data={data} />
      </FavoritesProvider>
    );

    const text = screen.getByText("Vivaldi's Rediscovery");

    expect(text).toHaveTextContent("Vivaldi's Rediscovery");
  });

  it(`it should render link for view`, () => {
    render(
      <FavoritesProvider>
        <ArtistList data={data} />
      </FavoritesProvider>
    );

    const link = screen.getByTestId('view-link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_blank');
  });

  it(`it should not render pagination if data.length < ${LIMIT_PER_PAGE}`, async () => {
    render(
      <FavoritesProvider>
        <ArtistList data={data} />
      </FavoritesProvider>
    );

    const pagination = screen.queryByLabelText('pagination');

    expect(pagination).not.toBeInTheDocument();
  });

  it(`it should render pagination if data.length > ${LIMIT_PER_PAGE}`, () => {
    render(
      <FavoritesProvider>
        <ArtistList data={dataForPagination} />
      </FavoritesProvider>
    );

    const spanPrevious = screen.getByLabelText('Go to previous page');
    const spanNext = screen.getByLabelText('Go to next page');
    const pagination = screen.getByRole('navigation');

    expect(spanPrevious).toHaveTextContent('Previous');
    expect(spanNext).toHaveTextContent('Next');
    expect(pagination).toBeInTheDocument();
  });
});
