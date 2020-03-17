import React, { useState, useEffect } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

import api from '~/services/api';

import styles from './style';

const logo = require('../../../assets/logo.png');

export default function Drawer({ navigation }) {
  const [categories, setCategories] = useState([]);

  async function loadCategories() {
    try {
      const response = await api.get('/categories');

      setCategories(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro, tente novamente mais tarde');
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.content}>
          <Text style={styles.title}>Arquivos</Text>
          <TouchableOpacity>
            <Text style={styles.links}>Meus artigos</Text>
          </TouchableOpacity>
          <Text style={styles.links}>Compartilhados</Text>
          <TouchableOpacity>
            <Text style={styles.links}>Lixeira</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Categorias</Text>
          {categories.map(item => (
            <TouchableOpacity>
              <Text key={item} style={styles.links}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

Drawer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
