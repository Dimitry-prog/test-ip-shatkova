import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import * as nextRouting from 'next/navigation';

import Filters from '@/shared/components/filters';
import { FILTER_TABS_HOME } from '@/shared/lib/constants';
import { FilterTabType } from '@/shared/types';

const tabs: FilterTabType[] = [
  { value: '', label: 'All' },
  { value: 'test', label: 'Test' },
  { value: 'video', label: 'Videos' },
];

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

  it(`it should render the filters with default tabs ${FILTER_TABS_HOME}`, () => {
    render(<Filters />);

    const tabList = screen.getByRole('tablist');
    const tabElements = screen.getAllByRole('tab');

    expect(tabList).toBeInTheDocument();
    expect(tabElements.length).toBe(4);
  });

  it(`it should render ${tabs}`, () => {
    render(<Filters tabs={tabs} />);

    const tabElements = screen.getAllByRole('tab');

    expect(tabElements.length).toBe(3);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Videos')).toBeInTheDocument();
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
