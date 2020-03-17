import { StyleSheet } from 'react-native';

import { heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  input: {
    borderWidth: heightPercentageToDP('0.2%'),
    padding: heightPercentageToDP('2.1%'),
    borderRadius: heightPercentageToDP('2.1%'),
    borderColor: colors.grey,
    marginBottom: heightPercentageToDP('2.1%'),
    color: colors.black_rock,
  },
});
