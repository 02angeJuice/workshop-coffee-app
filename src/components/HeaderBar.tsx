import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

interface HeaderBarDto {
  title?: string;
}

export default function HeaderBar(dto: HeaderBarDto) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dto?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
