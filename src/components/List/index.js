import React, { useMemo, useState, useEffect } from 'react';
import { Animated, Text, View, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { colors } from '~/styles';

import styles from './style';

export default function List({ data, check }) {
  const [opacity] = useState(new Animated.Value(0));

  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [data.date]);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
    }).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        !data.checked ? styles.container : styles.checkedContainer,
        { opacity },
      ]}>
      <TouchableOpacity style={styles.boxIcon} onPress={() => check(data._id)}>
        <MaterialIcons
          name="check-circle"
          size={data.checked === true ? 35 : 25}
          color={data.checked === true ? colors.slate_blue : colors.echo_blue}
        />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.txtInfo}>{data.author}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.txtInfo}>{dateParsed}</Text>
      </View>
    </Animated.View>
  );
}

List.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  check: PropTypes.func.isRequired,
};
