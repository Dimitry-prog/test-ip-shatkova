import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import * as nextRouting from 'next/navigation';

import Filters from '@/shared/components/filters';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('Filters', () => {
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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it should render the filters', () => {
    render(<Filters />);

    const tabList = screen.getByRole('tablist');

    expect(tabList).toBeInTheDocument();
  });

  it('it should render 4 tabs', () => {
    render(<Filters />);

    const tabs = screen.getAllByRole('tab');

    expect(tabs.length).toBe(4);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Books')).toBeInTheDocument();
    expect(screen.getByText('Songs')).toBeInTheDocument();
  });

  it('it should update the URL when tab is clicked', () => {
    render(<Filters />);

    const tab = screen.getAllByRole('tab')[1];

    fireEvent.click(tab, { target: { value: 'movie' } });

    expect(routerMock.replace).toHaveBeenLastCalledWith(`${pathnameMock}?page=1&entity=movie`, {
      scroll: false,
    });
  });

  it('it should remove entity from URL when tab clicked with value all', () => {
    render(<Filters />);

    const tab = screen.getAllByRole('tab')[0];

    fireEvent.click(tab, { target: { value: 'all' } });

    expect(routerMock.replace).toHaveBeenLastCalledWith(`${pathnameMock}?page=1`, {
      scroll: false,
    });
  });

  it('it should set the default value to the current entity', () => {
    render(<Filters />);

    expect(screen.getByText('All')).toHaveAttribute('data-state', 'active');
  });

  it('it should initialize with the entity parameter from URL', () => {
    searchParamsMock.set('entity', 'song');

    render(<Filters />);

    expect(screen.getByText('Songs')).toHaveAttribute('data-state', 'active');
  });
});
