import { StyleSheet } from 'react-native';

import { heightPercentageToDP } from '~/config/PixelRatio';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: heightPercentageToDP('2.1%'),
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.whisper,
  },
  boxIcon: {
    paddingHorizontal: heightPercentageToDP('2.5%'),
  },
  info: {
    flexDirection: 'column',
  },
  title: {
    fontSize: heightPercentageToDP('2.9%'),
    lineHeight: heightPercentageToDP('3.6%'),
    fontWeight: 'bold',
    color: colors.black_rock,
  },
  txtInfo: {
    fontSize: heightPercentageToDP('2.3%'),
    color: colors.echo_blue,
  },
  checkedContainer: {
    flexDirection: 'row',
    padding: heightPercentageToDP('2.1%'),
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.whisper,
    backgroundColor: colors.white,
    shadowColor: colors.slate_blue,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 10,
    borderRadius: heightPercentageToDP('2.35%'),
    margin: heightPercentageToDP('1%'),
  },
});
