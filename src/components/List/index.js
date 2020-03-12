import React from 'react';
import { View, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '~/styles';

import styles from './style';

export default function List({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <MaterialIcons name="check-circle" size={25} color={colors.echo_blue} />
      </View>
      <View style={styles.info}>
        <Text style={styles.txtInfo}>{data.author}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.txtInfo}>{data.date}</Text>
      </View>
    </View>
  );
}
