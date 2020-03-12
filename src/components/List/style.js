import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  boxIcon: {
    paddingHorizontal: 15,
  },
  info: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'bold',
    color: colors.black_rock,
  },
  txtInfo: {
    fontSize: 14,
    color: colors.echo_blue,
  },
});
