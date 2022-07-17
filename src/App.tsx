import React, {useState} from 'react';
import {useColorScheme, StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
//
import {Buttons} from '@components';
import {AppThemeContext} from '@types';
import {ThemeProvider} from '@contexts';
import {MainNavigation} from '@screens';
import {DarkTheme, LightTheme} from '@themes';

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
        translucent
        backgroundColor={appTheme.colors.card}
        barStyle={appTheme.scheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ThemeProvider value={appTheme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <MainNavigation />
          <Buttons.RsPressable
            onPress={toggleAppTheme}
            style={[
              styles.floating,
              {backgroundColor: appTheme.colors.floating},
            ]}
          />
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export {App};
