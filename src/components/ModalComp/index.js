import React from 'react';
import {
  Keyboard,
  Modal,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { colors } from '~/styles';

import styles from './style';

export default function ModalComp({ close, children, modal, title }) {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={modal}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.close}>
              <TouchableHighlight
                onPress={() => close(!modal)}
                hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}>
                <FontAwesome name="close" size={25} color={colors.echo_blue} />
              </TouchableHighlight>
            </View>
            <View>
              <Text style={styles.title}>{title}</Text>
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

ModalComp.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node,
  modal: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

ModalComp.defaultProps = {
  children: null,
  title: null,
};
