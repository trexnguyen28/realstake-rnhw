import * as DataModels from './data-model';
import * as NavigationParams from './navigation-params';

export interface GraphqlServiceResult<T> {
  data?: T;
  success: boolean;
  errorCode: string;
}

export * from './app-theme';
export {DataModels, NavigationParams};
