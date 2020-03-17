import React, { useState, useRef, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { format } from 'date-fns';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import Input from '~/components/Input';
import api from '~/services/api';
import { colors } from '~/styles';

import styles from './style';

export default function Form({ close, refresh, value }) {
  const dateRef = useRef();

  const [register, setRegister] = useState([]);
  const [edit, setEdit] = useState(false);

  function formatDate(item) {
    return format(new Date(item), 'dd/MM/yyyy');
  }

  function formatGetRaw() {
    return format(new Date(dateRef.current.getRawValue()), 'yyyy-MM-dd');
  }

  async function registerPublication() {
    try {
      await api.post('/publication', {
        ...register,
        date: formatGetRaw(),
      });
      close();
      refresh();
      Alert.alert('Sucesso', 'Publicação criada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro, tente novamente mais tarde!');
    }
  }

  async function editPublication() {
    try {
      await api.put(`/publication/${register._id}`, {
        ...register,
        date: formatGetRaw(),
      });
      close();
      refresh();
      Alert.alert('Sucesso', 'Publicação atualizada com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro, tente novamente mais tarde!');
    }
  }

  async function handleSubmit() {
    if (edit) {
      editPublication();
    } else {
      registerPublication();
    }
  }

  useEffect(() => {
    if (value.length !== 0) {
      const itemFormated = { ...value, date: formatDate(value.date) };
      setRegister(itemFormated);
      setEdit(true);
    }
  }, [value]);

  return (
    <View>
      <Input
        placeholder="Título"
        onChangeText={text => setRegister({ ...register, title: text })}
        value={register.title}
        keyboardType="default"
      />
      <Input
        placeholder="Autor"
        onChangeText={text => setRegister({ ...register, author: text })}
        value={register.author}
        keyboardType="default"
      />
      <Input
        placeholder="Descrição"
        onChangeText={text => setRegister({ ...register, description: text })}
        value={register.description}
        keyboardType="default"
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
        keyboardType="default"
      />
      <Button onPress={handleSubmit}>{edit ? 'Editar' : 'Cadastrar'}</Button>
    </View>
  );
}

Form.propTypes = {
  close: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  value: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    length: PropTypes.number,
  }),
};

Form.defaultProps = {
  value: null,
};
