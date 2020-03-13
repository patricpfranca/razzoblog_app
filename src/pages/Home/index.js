import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import List from '~/components/List';
import { colors } from '~/styles';

import styles from './style';

export default function Home() {
  const data = [
    {
      id: 1,
      author: 'Rudi Duarte',
      date: '06/06/2019',
      title: 'O que é identidade visual?',
    },
    {
      id: 2,
      author: 'Rudi Duarte',
      date: '06/06/2019',
      title: 'O que é identidade visual?',
    },
    {
      id: 3,
      author: 'Rudi Duarte',
      date: '06/06/2019',
      title: 'O que é identidade visual?',
    },
    {
      id: 4,
      author: 'Rudi Duarte',
      date: '06/06/2019',
      title: 'O que é identidade visual?',
    },
  ];

  const renderSeparator = () => {
    return <View style={styles.line} />;
  };

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
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <List data={item} />}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}
