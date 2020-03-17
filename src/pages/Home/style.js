import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  title: {
    fontSize: heightPercentageToDP('3.5%'),
    fontWeight: 'bold',
    lineHeight: heightPercentageToDP('4%'),
    marginLeft: widthPercentageToDP('10%'),
  },
  content: {
    paddingHorizontal: heightPercentageToDP('2.5%'),
    paddingTop: heightPercentageToDP('2.3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightPercentageToDP('2.1%'),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.whisper,
  },
  container: {
    padding: heightPercentageToDP('2.3%'),
    flex: 1,
  },
  icon: {
    marginHorizontal: widthPercentageToDP('1.7%'),
  },
  boxIcon: {
    flexDirection: 'row',
  },
  selected: {
    fontSize: heightPercentageToDP('2.5%'),
    color: colors.echo_blue,
    lineHeight: heightPercentageToDP('3.8%'),
  },
});
