# RNHW - Infina.vn

This repo tries to resolve some problems that have been described at: [RealStake/rnhw](https://github.com/RealStake/rnhw)
## Features checklist

- [x] Show a list of countries.
- [x] When user taps on a country, show country screen.
- [x] When user taps on a continent, show continent screen with a list of countries of the continent.
- [x] App should have a floating button throughout screens to switch between light and dark mode.
- [x] When user taps on a country on the continent screen, show the country screen again.
- [x] When user visits rnhw://country/:code, show country screen (both killed / background state).
- [x] When user visits rnhw://continent/:code, show continent screen (both killed / background state).
- [x] State management with Mobx.
- [x] Fully written by TypeScript.
- [x] Should have the best performance (smoothly rendering) -  handle all the errors. (Network, deep link, others, ...)
- [x] Unit testing.
- [x] Code should be clean - Clean structural project - seperation of concern. - MVVM approach.

## How to start the app

1. `yarn install`
2. `cd ios && pod install`
3. At the root folder: `yarn ios` or `yarn android`

## How to run unit testing

`yarn test`

## Caveat

- I already upgraded react native to version **0.68.2** which I think is suitable for app performance and it got fully featured support by the community.
- I use **react-navigation** as the primary navigation system for the app instead of *react-native-navigation* because I got more familiar with this and it is more simplistic, and more trendy with RN community which you can check at npm trend.
- I use **StyleSheet** as the primary styling/theming system for the app instead of *styled-component* because this is the default system from React Native and got recommended by the community.
