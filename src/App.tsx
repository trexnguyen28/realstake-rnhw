import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({});

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <View style={{backgroundColor: 'green', flex: 1}} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export {App};
