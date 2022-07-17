import {httpRequest} from './http-request-graphql';

export class GraphQLError extends Error {
  errorCode: number;

  constructor(errorCode: number) {
    super();
    //
    this.name = 'GraphQLError';
    this.errorCode = errorCode;
  }
}

const Query = async (query: any, variables?: any) => {
  try {
    const result = await httpRequest.post('/', {
      query: query,
      variables: variables,
    });

    if (result == null) {
      return {errors: [{extensions: {code: '500'}}]};
    }

    return result;
  } catch {
    return {errors: [{extensions: {code: '500'}}]};
  }
};

interface QueryResult {
  result: any;
  resultDataKey: string;
}

const buildQueryResult: any = ({result, resultDataKey}: QueryResult) => {
  if (result) {
    if (result.errors) {
      throw new GraphQLError(result.errors[0].extensions.code);
    } else {
      return {data: result.data[resultDataKey]};
    }
  }
  return null;
};

export const GraphQL = {
  Query,
  buildQueryResult,
};
