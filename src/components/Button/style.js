import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.slate_blue,
    alignItems: 'center',
    borderRadius: 10,
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
});
