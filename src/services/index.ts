import {GraphqlServiceResult} from '@types';

export * from './country-services';

async function buildServiceResult<T>(
  func: () => any,
): Promise<GraphqlServiceResult<T>> {
  try {
    const {data} = await func();
    //
    return {
      data,
      success: true,
      errorCode: '',
    };
  } catch (error: any) {
    return {
      success: false,
      errorCode: error?.errorCode || '500',
    };
  }
}

export {buildServiceResult};
