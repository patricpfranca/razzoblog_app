import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import styles from './style';

export default function Button({ children, loading, ...rest }) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.txtBtn}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
