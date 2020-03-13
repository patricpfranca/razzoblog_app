import React, { useMemo, useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { colors } from '~/styles';

import styles from './style';

export default function List({ data }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 10 }));
  const [opacity] = useState(new Animated.Value(0));

  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [data.date]);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }).start(),
    ]);
  }, [offset.y, opacity]);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [...offset.getTranslateTransform()] },
        { opacity },
      ]}>
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
    </Animated.View>
  );
}

List.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
