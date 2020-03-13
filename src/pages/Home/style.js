import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
    marginLeft: 30,
  },
  content: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    padding: 15,
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.whisper,
  },
  icon: {
    marginHorizontal: 3,
  },
});
