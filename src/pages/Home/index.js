import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';

import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import List from '~/components/List';
import ModalComp from '~/components/ModalComp';
import Register from '~/pages/Register';
import api from '~/services/api';
import { colors } from '~/styles';

import styles from './style';

export default function Home({ navigation }) {
  const [publication, setPublication] = useState([]);
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState([]);

  async function loadPublication() {
    try {
      const { data } = await api.get('/publication');

      const response = data.map(obj => ({ ...obj, checked: false }));

      setPublication(response);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro, tente novamente mais tarde!');
    }
  }

  function refreshList() {
    loadPublication();
  }

  function checkPublication(id) {
    const checkIn = publication.map(item =>
      item._id === id ? { ...item, checked: !item.checked } : item
    );
    setPublication(checkIn);
    setChecked(id);
  }

  useEffect(() => {
    loadPublication();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus artigos</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome
            name="pencil-square-o"
            size={25}
            color={colors.echo_blue}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="trash" size={25} color={colors.echo_blue} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={publication}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item._id)}
        renderItem={({ item }) => <List data={item} check={checkPublication} />}
      />
      <ActionButton
        buttonColor={colors.slate_blue}
        onPress={() => setModal(!modal)}
      />
      <ModalComp close={() => setModal(!modal)} modal={modal} title="Cadastrar">
        <Register
          close={() => setModal(!modal)}
          navigation={navigation}
          refresh={refreshList}
        />
      </ModalComp>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
