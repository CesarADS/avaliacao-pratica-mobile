import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bem } from '../types/bem';
import { BemForm } from '../components/BemForm';
import { BemItem } from '../components/BemItem';
import { commonStyles } from '../styles/commonStyles';

export default function GerenciamentoScreen() {
  const [bens, setBens] = useState<Bem[]>([]);

  const handleSaveBem = (novoBem: Omit<Bem, 'id'>) => {
    const bemComId: Bem = {
      ...novoBem,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };

    setBens(prevBens => [...prevBens, bemComId]);
    Alert.alert('Sucesso', 'Bem cadastrado com sucesso! Seu Jorge agradece.');
  };

  const handleDeleteBem = (id: string) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir este bem? Seu Jorge não perdoa.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            setBens(prevBens => prevBens.filter(bem => bem.id !== id));
            Alert.alert('Sucesso', 'Bem excluído com sucesso! Aguarde algo...');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BemForm onSave={handleSaveBem} />
        
        <View style={commonStyles.card}>
          <Text style={commonStyles.title}>
            Bens Cadastrados ({bens.length})
          </Text>
          
          {bens.length === 0 ? (
            <Text style={commonStyles.emptyText}>
              Nenhum bem cadastrado
            </Text>
          ) : (
            bens.map(bem => (
              <BemItem
                key={bem.id}
                bem={bem}
                onDelete={handleDeleteBem}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
