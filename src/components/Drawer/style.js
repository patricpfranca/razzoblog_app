import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    padding: heightPercentageToDP('1%'),
  },
  title: {
    fontSize: heightPercentageToDP('2.5%'),
    color: colors.echo_blue,
    textTransform: 'uppercase',
    marginVertical: heightPercentageToDP('2%'),
  },
  content: {
    padding: heightPercentageToDP('2.5%'),
  },
  links: {
    fontSize: heightPercentageToDP('2.35%'),
    fontWeight: 'bold',
    lineHeight: heightPercentageToDP('3.8%'),
    marginBottom: heightPercentageToDP('2.1%'),
  },
  logo: {
    marginLeft: widthPercentageToDP('3.8%'),
    width: widthPercentageToDP('36%'),
    height: heightPercentageToDP('8%'),
  },
});
