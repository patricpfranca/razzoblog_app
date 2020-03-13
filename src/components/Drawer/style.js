import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    color: colors.echo_blue,
    textTransform: 'uppercase',
    marginVertical: 12,
  },
  content: {
    padding: 15,
  },
  links: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 10,
  },
});
