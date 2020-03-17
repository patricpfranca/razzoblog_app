import { StyleSheet } from 'react-native';

import { heightPercentageToDP } from '~/config/PixelRatio';

export default StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP('3.5%'),
  },
  content: {
    marginTop: heightPercentageToDP('3.5%'),
    flex: 1,
    padding: heightPercentageToDP('2.5%'),
  },
  close: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: heightPercentageToDP('3.5%'),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('3.8%'),
    lineHeight: heightPercentageToDP('4.1%'),
  },
});
