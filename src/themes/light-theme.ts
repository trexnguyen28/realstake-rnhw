import {AppColors} from '@types';
import {Theme as NavigationTheme} from '@react-navigation/native';

export const LightPalates = {
  primary: '#8594A0',
  red: '#D34646',
  blue: '#0094FF',
  black: '#000000',
  grey_1: '#8594A0',
  grey_2: '#DADFE4',
  bg_1: '#FFFFFF',
};

export const LightTheme: AppColors = {
  floating: LightPalates.primary,
  shadow: LightPalates.black,
  title: LightPalates.black,
  card: LightPalates.bg_1,
  background: LightPalates.bg_1,
  highlight: LightPalates.blue,
  description: LightPalates.grey_1,
};

export const NavigationLightTheme: NavigationTheme = {
  dark: false,
  colors: {
    primary: LightPalates.primary,
    text: LightPalates.black,
    card: LightPalates.bg_1,
    border: LightPalates.grey_2,
    background: LightPalates.bg_1,
    notification: LightPalates.red,
  },
};
