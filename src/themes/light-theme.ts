import {AppColors} from '@types';
import {Theme as NavigationTheme} from '@react-navigation/native';

export const LightPalates = {
  primary: '#8594A0',
  red: '#D34646',
  grey_1: '#8594A0',
  grey_2: '#DADFE4',
  bg_1: '#FFFFFF',
};

export const LightTheme: AppColors = {
  floating: LightPalates.primary,
  shadow: LightPalates.grey_2,
  title: LightPalates.grey_1,
  card: LightPalates.bg_1,
  background: LightPalates.bg_1,
  highlight: LightPalates.grey_1,
  description: LightPalates.grey_1,
};

export const NavigationLightTheme: NavigationTheme = {
  dark: false,
  colors: {
    primary: LightPalates.primary,
    text: LightPalates.grey_1,
    card: LightPalates.bg_1,
    border: LightPalates.grey_2,
    background: LightPalates.bg_1,
    notification: LightPalates.red,
  },
};
