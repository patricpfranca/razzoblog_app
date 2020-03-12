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
    paddingHorizontal: 0,
  },
  container: {
    padding: 15,
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.whisper,
  },
});
