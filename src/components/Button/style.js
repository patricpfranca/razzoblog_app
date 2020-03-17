import { StyleSheet } from 'react-native';

import { heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    padding: heightPercentageToDP('2.5%'),
    backgroundColor: colors.slate_blue,
    alignItems: 'center',
    borderRadius: heightPercentageToDP('2.1%'),
  },
  txtBtn: {
    fontSize: heightPercentageToDP('2.5%'),
    fontWeight: 'bold',
    color: colors.white,
  },
});
