'use client';

import { DownloadIcon, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/shared/components/ui/button';

type DownloadButtonProps = {
  type: 'song' | 'video';
  href: string;
  title: string;
};

const DownloadButton = ({ type, href, title }: DownloadButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  const handleDownload = async () => {
    setIsPending(true);
    try {
      if (type === 'song') {
        const link = document.createElement('a');
        link.href = href;
        link.download = `${title}.m4a`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const response = await fetch(href);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `${title}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      }
    } catch (e) {
      console.log(e);
      toast.error('Failed to download');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button onClick={handleDownload} disabled={isPending} variant="outline">
      {isPending ? (
        <Loader2 className="size-4 animate-spin" data-testid="loader" />
      ) : (
        <DownloadIcon className="size-4" />
      )}
    </Button>
  );
};

export default DownloadButton;
