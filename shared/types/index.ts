export type SearchParamsType = {
  searchParams: {
    [k: string]: string | undefined;
  };
};

export type FilterTabType = {
  value: string;
  label: string;
};

export type ParamsToSetType = {
  key: string;
  value: string;
}[];

export type ParamsToDeleteType = string[];
