import React, {useEffect, useRef} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useAppTheme, useLoader} from '@hooks';
import {NavigationParams} from '@types';
import {StackScreenProps} from '@react-navigation/stack';
import {CountryDetailViewModel} from './view-model';
import {fontStyles} from '@themes';
import {RowItem} from './components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 12,
  },
  flag: {
    fontSize: 100,
    textAlign: 'center',
  },
  title: {
    ...fontStyles.Title,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: undefined,
  },
  content: {
    paddingTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  subtitle: {
    ...fontStyles.SubTitle,
  },
  description: {
    ...fontStyles.Body,
  },
});

interface CountryDetailScreenProps
  extends StackScreenProps<
    NavigationParams.MainStackParamList,
    NavigationParams.MainRoutes.country
  > {}

const CountryDetailScreen: React.FC<CountryDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const {code = ''} = route.params;
  //
  const countryVM = useRef<CountryDetailViewModel>(
    new CountryDetailViewModel(code),
  ).current;
  const {colors} = useAppTheme();
  const {loader} = useLoader();

  const initLoadFunc = () => {
    loader({
      loadFunc: () => countryVM.loadCountry(),
      onSuccess: (data: any) => {
        if (!data) {
          Alert.alert(
            'Invalid country code',
            'Please check your country code again!!',
          );
        }
      },
    }).catch();
  };

  const onContinentPressed = () => {
    if (countryVM.continentCode) {
      navigation.navigate(NavigationParams.MainRoutes.continent, {
        code: countryVM.continentCode,
      });
    }
  };

  useEffect(() => {
    countryVM.setCode(code);
    initLoadFunc();
  }, [code]);

  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{countryVM.country?.emoji || '-'}</Text>
      <Text style={[styles.title, {color: colors.title}]}>
        {countryVM.country?.name || '-'}
      </Text>
      <View style={styles.content}>
        <RowItem title={'alpha2Code'} description={countryVM.country?.code} />
        <RowItem title={'callingCode'} description={countryVM.phone} />
        <RowItem
          title={'continent'}
          description={countryVM.continentName}
          onHighlightPressed={onContinentPressed}
        />
      </View>
    </View>
  );
};

const observable = observer(CountryDetailScreen);
export {observable as CountryDetailScreen};
