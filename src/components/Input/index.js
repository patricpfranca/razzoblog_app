import React from 'react';
import { View, TextInput } from 'react-native';

import { colors } from '~/styles';

import styles from './style';

export default function Input({ ...rest }) {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.echo_blue}
          {...rest}
        />
      </View>
    </>
  );
}
