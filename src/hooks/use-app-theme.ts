import {useContext} from 'react';
import {ThemeContext} from '@contexts';

export const useAppTheme = () => {
  const {colors, scheme} = useContext(ThemeContext);

  return {colors, scheme};
};
