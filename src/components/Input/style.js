import { StyleSheet } from 'react-native';

import { heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    borderWidth: heightPercentageToDP('0.2%'),
    padding: heightPercentageToDP('2.1%'),
    borderRadius: heightPercentageToDP('2.1%'),
    borderColor: colors.grey,
    marginBottom: heightPercentageToDP('2.1%'),
  },
  input: {
    color: colors.black_rock,
  },
});
