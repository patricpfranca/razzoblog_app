import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';

import styles from './style';

const logo = require('../../../assets/logo.png');

export default function Drawer({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={logo}
          style={{ marginLeft: 15, width: 130, height: 53 }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Arquivos</Text>
          <Text style={styles.links}>Meus artigos</Text>
          <Text style={styles.links}>Compartilhados</Text>
          <Text style={styles.links}>Lixeira</Text>
          <Text style={styles.title}>Categorias</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
