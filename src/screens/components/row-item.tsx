import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons} from '@components';
import {useAppTheme} from '@hooks';
import {fontStyles} from '@themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  title: {
    ...fontStyles.SubTitle,
  },
  description: {
    ...fontStyles.Body,
  },
});

interface RowItemProps {
  title: string;
  description?: string;
  onHighlightPressed?: () => void;
}

const RowItem: React.FC<RowItemProps> = ({
  description,
  title,
  onHighlightPressed,
}) => {
  const {colors} = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.title}]}>{title}</Text>
      {onHighlightPressed ? (
        <Buttons.HighlightPressable
          title={description}
          onPress={onHighlightPressed}
        />
      ) : (
        <Text style={[styles.description, {color: colors.description}]}>
          {description}
        </Text>
      )}
    </View>
  );
};

export {RowItem};
