export type MainStackParamList = {
  countries: undefined;
  country: {code: string};
  continent: {code: string};
};

export enum MainRoutes {
  countries = 'countries',
  country = 'country',
  continent = 'continent',
}
