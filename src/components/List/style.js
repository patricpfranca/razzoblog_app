import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.whisper,
  },
  boxIcon: {
    paddingHorizontal: 15,
  },
  info: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'bold',
    color: colors.black_rock,
  },
  txtInfo: {
    fontSize: 14,
    color: colors.echo_blue,
  },
  checkedContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.whisper,
    backgroundColor: colors.white,
    shadowColor: colors.slate_blue,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 10,
    borderRadius: 14,
    margin: 5,
  },
});
