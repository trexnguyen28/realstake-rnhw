import {GraphqlServiceResult} from '@types';
import {Alert} from 'react-native';

export interface ModelLoaderParams<T> {
  onFailed?: () => void;
  onStartLoading?: () => void;
  onSuccess?: (data?: T) => void;
  onEndLoading?: (success: boolean) => void;
  loadFunc: () => Promise<GraphqlServiceResult<T>>;
}

export const useLoader = () => {
  const loader = async <T>({
    loadFunc,
    onFailed,
    onSuccess,
    onEndLoading,
    onStartLoading,
  }: ModelLoaderParams<T>) => {
    onStartLoading && onStartLoading();

    const {success, data} = await loadFunc();

    onEndLoading && onEndLoading(success);
    //
    if (success) {
      onSuccess && onSuccess(data);
    } else {
      if (onFailed) {
        onFailed && onFailed();
      } else {
        Alert.alert('Network Error', 'Please check your internet connection');
      }
    }
  };

  return {loader};
};
