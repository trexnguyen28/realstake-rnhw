import React from 'react';
import {AppThemeContext} from '@types';
//
import {ThemeContext} from './theme-context';

interface ThemeProviderProps {
  value: AppThemeContext;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  value,
  children,
}) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
