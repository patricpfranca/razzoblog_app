import React, { useState, useRef } from 'react';
import { View, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { format } from 'date-fns';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import Input from '~/components/Input';
import api from '~/services/api';
import { colors } from '~/styles';

import styles from './style';

export default function Register({ close, refresh }) {
  const dateRef = useRef();

  const [register, setRegister] = useState([]);

  async function handleSubmit() {
    const dateFormat = format(
      new Date(dateRef.current.getRawValue()),
      'yyyy-MM-dd'
    );

    try {
      await api.post('/publication', {
        ...register,
        date: dateFormat,
      });
      close();
      refresh();
      Alert.alert('Sucesso', 'Publicação criada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro, tente novamente mais tarde!');
    }
  }

  return (
    <View>
      <Input
        placeholder="Título"
        onChangeText={text => setRegister({ ...register, title: text })}
        value={register.title}
      />
      <Input
        placeholder="Autor"
        onChangeText={text => setRegister({ ...register, author: text })}
        value={register.author}
      />
      <Input
        placeholder="Descrição"
        onChangeText={text => setRegister({ ...register, description: text })}
        value={register.description}
      />
      <TextInputMask
        type="datetime"
        options={{
          format: 'DD/MM/YYYY',
        }}
        value={register.date}
        onChangeText={text => {
          setRegister({ ...register, date: text });
        }}
        ref={dateRef}
        style={styles.input}
        placeholderTextColor={colors.echo_blue}
        placeholder="Data"
      />
      <Input
        placeholder="Categoria"
        onChangeText={text => setRegister({ ...register, category: text })}
        value={register.category}
      />
      <Button onPress={handleSubmit}>Cadastrar</Button>
    </View>
  );
}

Register.propTypes = {
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
};
