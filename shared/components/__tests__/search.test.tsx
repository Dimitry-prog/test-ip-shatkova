import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import * as nextRouting from 'next/navigation';

import Search from '@/shared/components/search';
import { useDebounce } from '@/shared/hooks/use-debounce';

jest.mock('@/shared/hooks/use-debounce');
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('Search Component', () => {
  let pathnameMock: string;
  let routerMock: { replace: jest.Mock<void, [string, { scroll: boolean }]> };
  let searchParamsMock: URLSearchParams;

  beforeEach(() => {
    pathnameMock = '/';
    routerMock = { replace: jest.fn() };
    searchParamsMock = new URLSearchParams();

    (nextRouting.usePathname as jest.Mock).mockReturnValue(pathnameMock);
    (nextRouting.useRouter as jest.Mock).mockReturnValue(routerMock);
    (nextRouting.useSearchParams as jest.Mock).mockReturnValue(searchParamsMock);
    (useDebounce as jest.Mock).mockImplementation((value) => value);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it should render the search input', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search something') as HTMLInputElement;

    expect(input).toBeInTheDocument();
  });

  it('it should update input value on change', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search something') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input).toHaveValue('test');
  });

  it('it should update the URL when search input changes', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search something') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });

    expect(useDebounce).toHaveBeenCalledWith('test');
    expect(routerMock.replace).toHaveBeenLastCalledWith(`${pathnameMock}?search=test`, {
      scroll: false,
    });
  });

  it('it should remove search parameter from URL when input is cleared', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search something') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });
    expect(useDebounce).toHaveBeenCalledWith('test');
    expect(routerMock.replace).toHaveBeenCalledWith(`${pathnameMock}?search=test`, {
      scroll: false,
    });

    fireEvent.change(input, { target: { value: '' } });
    expect(useDebounce).toHaveBeenCalledWith('');
    expect(routerMock.replace).toHaveBeenLastCalledWith(`${pathnameMock}?`, { scroll: false });
  });

  it('it should initialize with the search parameter from URL', () => {
    searchParamsMock.set('search', 'test');

    render(<Search />);

    const input = screen.getByDisplayValue('test');

    expect(input).toBeInTheDocument();
  });
});
