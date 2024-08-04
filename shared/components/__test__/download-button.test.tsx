import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { toast } from 'sonner';

import DownloadButton from '@/shared/components/download-button';

jest.mock('sonner', () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe('DownloadButton', () => {
  const mockHref = 'https://example.com/file.mp4';
  const mockTitle = 'Test File';

  let mockFetch: jest.Mock;

  beforeEach(() => {
    mockFetch = jest.fn().mockResolvedValue({
      blob: jest.fn().mockResolvedValue(new Blob(['content'], { type: 'video/mp4' })),
    });
    global.fetch = mockFetch;
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('it should render the button', () => {
    render(<DownloadButton type="video" href={mockHref} title={mockTitle} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('');
  });

  it('it should trigger download for song type', () => {
    render(<DownloadButton type="song" href={mockHref} title={mockTitle} />);

    const linkSpy = jest.spyOn(document, 'createElement');
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(linkSpy).toHaveBeenCalledWith('a');
    expect(linkSpy.mock.results[0].value.href).toBe(mockHref);
    expect(linkSpy.mock.results[0].value.download).toBe(`${mockTitle}.m4a`);
  });

  it('it should trigger download for video type', async () => {
    render(<DownloadButton type="video" href={mockHref} title={mockTitle} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(mockHref);
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });

  it('it should show error toast on download failure', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<DownloadButton type="video" href={mockHref} title={mockTitle} />);

    const button = screen.getByRole('button');
    await fireEvent.click(button);

    expect(toast.error).toHaveBeenCalledWith('Failed to download');
  });

  it('it should show loader during download', () => {
    render(<DownloadButton type="video" href={mockHref} title={mockTitle} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('it should disable the button while pending', async () => {
    render(<DownloadButton type="video" href={mockHref} title={mockTitle} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toBeDisabled();
  });
});
