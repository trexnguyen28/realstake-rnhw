import React from 'react';
//
import {useAppTheme} from '@hooks';
import {NavigationParams} from '@types';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationDarkTheme, NavigationLightTheme} from '@themes';
//
import {ListCountryScreen} from './list-country-screen';
import {CountryDetailScreen} from './country-detail-screen';
import {ContinentDetailScreen} from './continent-detail-screen';

const MainStack = createStackNavigator<NavigationParams.MainStackParamList>();

const DEEP_LINK_CONFIG = {
  prefixes: ['rnhw://'],
  config: {
    screens: {
      [NavigationParams.MainRoutes.country]: 'country/:code',
      [NavigationParams.MainRoutes.continent]: 'continent/:code',
    },
  },
};

const MainNavigation = () => {
  const {scheme} = useAppTheme();

  return (
    <NavigationContainer
      linking={DEEP_LINK_CONFIG}
      theme={scheme === 'dark' ? NavigationDarkTheme : NavigationLightTheme}
    >
      <MainStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
        <MainStack.Screen
          name={NavigationParams.MainRoutes.countries}
          options={{title: 'List of Countries'}}
          component={ListCountryScreen}
        />
        <MainStack.Screen
          name={NavigationParams.MainRoutes.country}
          options={{title: 'Country Detail'}}
          component={CountryDetailScreen}
        />
        <MainStack.Screen
          name={NavigationParams.MainRoutes.continent}
          options={{title: 'Continent Detail'}}
          component={ContinentDetailScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export {MainNavigation};
