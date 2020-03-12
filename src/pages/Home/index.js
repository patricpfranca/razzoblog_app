import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

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
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  return (
    <View>
      <Text style={styles.title}>Meus artigos</Text>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
            <View style={{ paddingHorizontal: 15 }}>
              <MaterialIcons
                name="check-circle"
                size={25}
                color={colors.echo_blue}
              />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text>{item.author}</Text>
              <Text>{item.title}</Text>
              <Text>{item.date}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}
