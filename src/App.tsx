import React, {useState} from 'react';
import {View, useColorScheme, StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
//
import {AppThemeContext} from '@types';
import {ThemeProvider} from '@contexts';
import {
  DarkTheme,
  LightTheme,
  NavigationDarkTheme,
  NavigationLightTheme,
} from '@themes';
import {Buttons} from '@components';

const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
    bottom: 64,
    left: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
    //
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
  },
});

const App: React.FC = () => {
  const scheme = useColorScheme();
  const [appTheme, setAppTheme] = useState<AppThemeContext>({
    colors: scheme === 'dark' ? DarkTheme : LightTheme,
    scheme,
  });

  const toggleAppTheme = () => {
    if (appTheme.scheme === 'dark') {
      setAppTheme({scheme: 'light', colors: LightTheme});
    } else {
      setAppTheme({scheme: 'dark', colors: DarkTheme});
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        barStyle={appTheme.scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ThemeProvider value={appTheme}>
        <NavigationContainer
          theme={
            appTheme.scheme === 'dark'
              ? NavigationDarkTheme
              : NavigationLightTheme
          }
        >
          <View
            style={{backgroundColor: appTheme.colors.background, flex: 1}}
          />
          <Buttons.RsPressable
            onPress={toggleAppTheme}
            style={[
              styles.floating,
              {backgroundColor: appTheme.colors.floating},
            ]}
          />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export {App};
