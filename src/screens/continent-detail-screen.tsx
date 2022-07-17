import React, {useEffect, useRef} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {fontStyles} from '@themes';
import {NavigationParams} from '@types';
import {useAppTheme, useLoader} from '@hooks';
import {RowItem} from './components';
import {ContinentDetailViewModel} from './view-model';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

interface ContinentDetailScreenProps
  extends StackScreenProps<
    NavigationParams.MainStackParamList,
    NavigationParams.MainRoutes.continent
  > {}

const ContinentDetailScreen: React.FC<ContinentDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const {code = ''} = route.params;
  //
  const continentVM = useRef<ContinentDetailViewModel>(
    new ContinentDetailViewModel(code),
  ).current;
  const {colors} = useAppTheme();
  const {loader} = useLoader();

  const initLoadFunc = () => {
    loader({
      loadFunc: () => continentVM.loadContinent(),
      onSuccess: (data: any) => {
        if (!data) {
          Alert.alert(
            'Invalid continent code',
            'Please check your continent code again!!',
          );
        }
      },
    }).catch();
  };

  const onCountryPressed = (countryCode: string) => {
    if (countryCode) {
      navigation.navigate(NavigationParams.MainRoutes.country, {
        code: countryCode,
      });
    }
  };

  useEffect(() => {
    continentVM.setCode(code);
    initLoadFunc();
  }, [code]);

  return (
    <View style={styles.container}>
      <FlatList
        data={continentVM.countries}
        contentInsetAdjustmentBehavior={'automatic'}
        contentContainerStyle={{paddingHorizontal: 16}}
        keyExtractor={item => item.code}
        ListHeaderComponent={() => {
          return (
            <View style={{paddingTop: 24}}>
              <Text style={[styles.title, {color: colors.title}]}>
                {continentVM.continent?.name || '-'}
              </Text>
              <View style={styles.content}>
                <RowItem
                  title={'code'}
                  description={continentVM.continent?.code}
                />
              </View>
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <RowItem
              description={item.name}
              title={index === 0 ? 'country' : ''}
              onHighlightPressed={() => onCountryPressed(item.code)}
            />
          );
        }}
      />
    </View>
  );
};

const observable = observer(ContinentDetailScreen);
export {observable as ContinentDetailScreen};
