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

const MainStack = createStackNavigator<NavigationParams.MainStackParamList>();

const MainNavigation = () => {
  const {scheme} = useAppTheme();

  return (
    <NavigationContainer
      theme={scheme === 'dark' ? NavigationDarkTheme : NavigationLightTheme}
    >
      <MainStack.Navigator>
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export {MainNavigation};
