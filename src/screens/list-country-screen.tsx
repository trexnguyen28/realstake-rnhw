import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {useLoader} from '@hooks';
import {countryStore} from '@models';
import {DataModels, NavigationParams} from '@types';
import {CountryListItem} from './components';
import {Layouts} from '@components';

interface ListCountryScreenProps
  extends StackScreenProps<
    NavigationParams.MainStackParamList,
    NavigationParams.MainRoutes.countries
  > {}

const ListCountryScreen: React.FC<ListCountryScreenProps> = ({navigation}) => {
  const {loader} = useLoader();

  const initLoadFunc = () => {
    loader({
      loadFunc: () => countryStore.loadCountries(),
    }).catch();
  };

  const onCountryPressed = (code: string) => {
    if (code) {
      navigation.navigate(NavigationParams.MainRoutes.country, {code});
    }
  };

  const renderItem = ({item}: {item: DataModels.Country}) => (
    <CountryListItem item={item} onPress={onCountryPressed} />
  );

  useEffect(() => {
    initLoadFunc();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        windowSize={16}
        initialNumToRender={15}
        maxToRenderPerBatch={7}
        data={countryStore.countries}
        updateCellsBatchingPeriod={250}
        keyExtractor={item => item.code}
        contentContainerStyle={{paddingTop: 12}}
        contentInsetAdjustmentBehavior={'automatic'}
        ItemSeparatorComponent={() => <Layouts.VSpace value={12} />}
        renderItem={renderItem}
      />
    </View>
  );
};

const observable = observer(ListCountryScreen);
export {observable as ListCountryScreen};
