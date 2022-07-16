import {GraphQL} from './graphql-client';

const queryCountries = async () => {
  const result = await GraphQL.Query(
    `{
    countries {
      code
      name
      emoji
      capital
    }
  }`,
    {},
  );

  return GraphQL.buildQueryResult({
    result,
    resultDataKey: 'countries',
  });
};

const queryCountry = async (code: string) => {
  const result = await GraphQL.Query(
    `query Country($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      phone
      continent {
        code
        name
      }
    }
  }`,
    {code},
  );
  //
  return GraphQL.buildQueryResult({
    result,
    resultDataKey: 'country',
  });
};

const queryContinent = async (code: string) => {
  const result = await GraphQL.Query(
    `query Continent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries
    }
  }`,
    {code},
  );

  return GraphQL.buildQueryResult({
    result,
    resultDataKey: 'continent',
  });
};

export const CountryServices = {
  queryCountries,
  queryCountry,
  queryContinent,
};
