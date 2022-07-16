import {ColorSchemeName} from 'react-native';

export interface AppColors {
  card: string;
  title: string;
  shadow: string;
  floating: string;
  highlight: string;
  background: string;
  description: string;
}

export interface AppThemeContext {
  colors: AppColors;
  scheme: ColorSchemeName;
}
