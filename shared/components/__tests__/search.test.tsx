import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import Search from '@/shared/components/search';
import { useSearch } from '@/shared/hooks/use-search';

const paramsDelete = ['test', 'search', 'entity'];
const paramsSet = [{ key: 'test', value: 'test' }];

jest.mock('@/shared/hooks/use-search');

describe('Search Component', () => {
  const onClearSearch = jest.fn();
  const setSearch = jest.fn();
  const mockUseSearch = (overrides = {}) => {
    const defaults = {
      search: '',
      setSearch,
      onClearSearch,
    };
    (useSearch as jest.Mock).mockReturnValue({ ...defaults, ...overrides });
  };

  beforeEach(() => {
    mockUseSearch();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it should render the search input without props', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search something') as HTMLInputElement;

    expect(input).toBeInTheDocument();
  });

  it('it should render the search input with prop placeholder=Test', () => {
    render(<Search placeholder="Test" />);

    const input = screen.getByPlaceholderText('Test') as HTMLInputElement;

    expect(input).toBeInTheDocument();
  });

  it(`it should render the search input with prop paramsDelete=${paramsDelete} and paramsSet=${paramsSet}`, () => {
    render(<Search paramsDelete={paramsDelete} paramsSet={paramsSet} />);

    expect(useSearch).toHaveBeenCalledWith(paramsDelete, paramsSet);
  });

  it('it should displays the search value and clear button when search is not empty', () => {
    mockUseSearch({ search: 'test search' });

    render(<Search />);

    expect(screen.getByDisplayValue('test search')).toBeInTheDocument();
    expect(screen.getByTestId('clear search')).toBeInTheDocument();
  });

  it('it should update input value on change', () => {
    render(<Search />);

    const input = screen.getByPlaceholderText('Search something') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });

    expect(setSearch).toHaveBeenCalledWith('test');
  });

  it('it should call onClearSearch when the clear button is clicked', () => {
    mockUseSearch({ search: 'test', onClearSearch });

    render(<Search />);

    fireEvent.click(screen.getByTestId('clear search'));

    expect(onClearSearch).toHaveBeenCalledTimes(1);
  });

  it('it should show clear button if input not empty', () => {
    mockUseSearch({ search: 'test' });

    render(<Search />);

    expect(screen.getByTestId('clear search')).toBeInTheDocument();
  });
});
