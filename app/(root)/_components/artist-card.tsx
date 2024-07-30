import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { TunesDTOType } from '@/app/(root)/_types';
import { getCategoryType } from '@/app/(root)/utils';
import DownloadButton from '@/shared/components/download-button';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { formatDate } from '@/shared/lib/utils';

type ArtistCardProps = {
  data: TunesDTOType;
};

const ArtistCard = ({ data }: ArtistCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="w-ful relative aspect-video h-auto">
        <Image
          src={data.artworkUrl100}
          alt={data.trackName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader className="flex-1">
        <CardTitle>{data.trackCensoredName}</CardTitle>
        <CardDescription>{data.collectionCensoredName}</CardDescription>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <p>{getCategoryType(data.kind)}</p>
        <div className="flex items-center justify-between gap-4">
          <p>{data.country}</p>
          {data.trackPrice && <p className="text-xl font-semibold">{data.trackPrice}$</p>}
        </div>
        <p> {formatDate(data.releaseDate)}</p>
      </CardContent>

      <CardFooter className="flex justify-end gap-4">
        <DownloadButton
          title={data.trackCensoredName}
          href={data.previewUrl}
          type={data.kind === 'song' ? 'song' : 'video'}
        />

        {data.collectionViewUrl && (
          <Button asChild variant="outline">
            <Link href={data.collectionViewUrl} target="_blank">
              <EyeIcon className="size-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ArtistCard;
