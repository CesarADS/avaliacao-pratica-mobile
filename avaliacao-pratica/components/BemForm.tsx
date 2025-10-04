import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Bem } from '../types/bem';
import { commonStyles } from '../styles/commonStyles';
import { validateBemData } from '../utils/helpers';

interface BemFormProps {
  onSave: (bem: Omit<Bem, 'id'>) => void;
}

export const BemForm: React.FC<BemFormProps> = ({ onSave }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSave = () => {
    const validation = validateBemData(nome, descricao, valor);
    
    if (!validation.isValid) {
      Alert.alert('Erro de Validação', validation.errors.join('\n'));
      return;
    }

    // Criar novo bem
    const novoBem: Omit<Bem, 'id'> = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      valor: validation.valorNumerico,
    };

    onSave(novoBem);

    // Limpar campos após salvar
    setNome('');
    setDescricao('');
    setValor('');
  };

  const formatValorInput = (text: string) => {
    // Remove caracteres não numéricos exceto vírgula e ponto
    const cleanText = text.replace(/[^0-9.,]/g, '');
    setValor(cleanText);
  };

  return (
    <View style={commonStyles.card}>
      <Text style={commonStyles.title}>Cadastrar Novo Bem</Text>
      
      <TextInput
        style={commonStyles.input}
        placeholder="Nome do bem"
        value={nome}
        onChangeText={setNome}
        maxLength={100}
      />
      
      <TextInput
        style={commonStyles.input}
        placeholder="Descrição do bem"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={3}
        maxLength={500}
      />
      
      <TextInput
        style={commonStyles.input}
        placeholder="Valor (R$)"
        value={valor}
        onChangeText={formatValorInput}
        keyboardType="numeric"
        maxLength={20}
      />
      
      <TouchableOpacity
        style={commonStyles.button}
        onPress={handleSave}
        activeOpacity={0.8}
      >
        <Text style={commonStyles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};