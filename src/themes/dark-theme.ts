import {AppColors} from '@types';
import {Theme as NavigationTheme} from '@react-navigation/native';

export const DarkPalates = {
  primary: '#FFFFFF',
  red: '#E8505B',
  grey_1: '#969696',
  grey_2: '#7B7B7B',
  bg_1: '#1F1F1F',
  bg_2: '#2D2D2D',
};

export const DarkTheme: AppColors = {
  floating: DarkPalates.primary,
  shadow: DarkPalates.bg_2,
  card: DarkPalates.bg_2,
  title: DarkPalates.grey_1,
  background: DarkPalates.bg_1,
  highlight: DarkPalates.grey_1,
  description: DarkPalates.grey_1,
};

export const NavigationDarkTheme: NavigationTheme = {
  dark: true,
  colors: {
    primary: DarkPalates.primary,
    text: DarkPalates.grey_1,
    card: DarkPalates.bg_2,
    border: DarkPalates.grey_2,
    background: DarkPalates.bg_1,
    notification: DarkPalates.red,
  },
};
