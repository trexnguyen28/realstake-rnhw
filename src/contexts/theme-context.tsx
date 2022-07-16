import * as React from 'react';
//
import {LightTheme} from '@themes';
import {AppThemeContext} from '@types';

export const ThemeContext = React.createContext<AppThemeContext>({
  scheme: 'light',
  colors: LightTheme,
});

ThemeContext.displayName = 'AppThemeContext';
