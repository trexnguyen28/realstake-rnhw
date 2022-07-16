import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons} from '@components';
import {DataModels} from '@types';
import {useAppTheme} from '@hooks';
import {fontStyles} from '@themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    paddingHorizontal: 6,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
  },
  flag: {
    fontSize: 60,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginStart: 8,
    justifyContent: 'center',
  },
  name: {
    ...fontStyles.Title,
    fontWeight: '600',
  },
  capital: {
    ...fontStyles.SubTitle,
    fontWeight: '400',
  },
});

interface CountryListItem {
  item: DataModels.Country;
  onPress: (code: string) => void;
}

const CountryListItem: React.FC<CountryListItem> = ({item, onPress}) => {
  const {colors} = useAppTheme();

  return (
    <Buttons.RsPressable
      style={[
        styles.container,
        {backgroundColor: colors.card, shadowColor: colors.shadow},
      ]}
      onPress={() => onPress(item.code)}
    >
      <Text style={styles.flag}>{item.emoji}</Text>
      <View style={styles.content}>
        <Text numberOfLines={1} style={[styles.name, {color: colors.title}]}>
          {item.name}
        </Text>
        {item.capital ? (
          <Text
            numberOfLines={1}
            style={[styles.capital, {color: colors.description}]}
          >
            {item.capital}
          </Text>
        ) : null}
      </View>
    </Buttons.RsPressable>
  );
};

export {CountryListItem};
