import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';

import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import List from '~/components/List';
import ModalComp from '~/components/ModalComp';
import Form from '~/pages/Form';
import api from '~/services/api';
import { colors } from '~/styles';

import styles from './style';

export default function Home({ navigation }) {
  const [publication, setPublication] = useState([]);
  const [modal, setModal] = useState(false);

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

  const filter = useMemo(() => {
    return publication.filter(pub => pub.checked);
  }, [publication]);

  const filterFirst = useMemo(() => {
    return publication.find(pub => pub.checked);
  }, [publication]);

  function selectedCheck() {
    return `${filter.length} artigo(s) selecionado(s)`;
  }

  function checkPublication(id) {
    const checkIn = publication.map(item =>
      item._id === id ? { ...item, checked: !item.checked } : item
    );
    setPublication(checkIn);
  }

  async function deletePublication() {
    if (filter.length === 0) {
      Alert.alert('Erro', 'Selecione ao menos uma publicação');
    } else {
      filter.forEach(item => {
        api.delete(`/publication/${item._id}`);
      });
      refreshList();
      Alert.alert('Sucesso', 'Todos os itens selecionados foram deletados');
    }
  }

  function checkEdit() {
    if (filter.length > 1) {
      Alert.alert('Erro', 'Só é possível editar uma publicação por vez');
    } else {
      setModal(!modal);
    }
  }

  useEffect(() => {
    loadPublication();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus artigos</Text>
      {filter.length > 0 && (
        <View style={styles.content}>
          <Text style={styles.selected}>{selectedCheck()}</Text>
          <View style={styles.boxIcon}>
            <TouchableOpacity style={styles.icon} onPress={() => checkEdit()}>
              <FontAwesome
                name="pencil-square-o"
                size={25}
                color={colors.echo_blue}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => deletePublication()}>
              <FontAwesome name="trash" size={25} color={colors.echo_blue} />
            </TouchableOpacity>
          </View>
        </View>
      )}
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
        <Form
          close={() => setModal(!modal)}
          navigation={navigation}
          refresh={refreshList}
          value={filterFirst}
        />
      </ModalComp>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
