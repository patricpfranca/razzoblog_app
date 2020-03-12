import React from 'react';
import { View, Text, FlatList } from 'react-native';

import List from '~/components/List';

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
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <List data={item} />}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}
