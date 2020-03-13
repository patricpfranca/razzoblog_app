import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';

import { FontAwesome } from '@expo/vector-icons';

import List from '~/components/List';
import api from '~/services/api';
import { colors } from '~/styles';

import styles from './style';

export default function Home() {
  const [publication, setPublication] = useState([]);

  async function loadPublication() {
    try {
      const { data } = await api.get('/publication');

      const response = data.map(obj => ({ ...obj, checked: false }));

      setPublication(response);
    } catch (error) {
      console.log(error);
    }
  }

  function checkPublication(item) {
    console.log(item);
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
      <ActionButton buttonColor={colors.slate_blue} onPress={() => {}} />
    </View>
  );
}
