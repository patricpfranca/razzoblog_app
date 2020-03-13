import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { colors } from '~/styles';

import styles from './style';

export default function List({ data }) {
  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [data.date]);

  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <MaterialIcons name="check-circle" size={25} color={colors.echo_blue} />
      </View>
      <View style={styles.info}>
        <Text style={styles.txtInfo}>{data.author}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.txtInfo}>{dateParsed}</Text>
      </View>
    </View>
  );
}

List.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
