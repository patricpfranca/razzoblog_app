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
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.whisper,
  },
  container: {
    padding: 15,
    flex: 1,
  },
  icon: {
    marginHorizontal: 3,
  },
  boxIcon: {
    flexDirection: 'row',
  },
  selected: {
    fontSize: 16,
    color: colors.echo_blue,
    lineHeight: 26,
  },
});
