import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bem } from '../types/bem';
import { commonStyles } from '../styles/commonStyles';
import { formatCurrency } from '../utils/helpers';

interface BemItemProps {
  bem: Bem;
  onDelete: (id: string) => void;
}

export const BemItem: React.FC<BemItemProps> = ({ bem, onDelete }) => {

  return (
    <View style={commonStyles.itemContainer}>
      <Text style={commonStyles.itemTitle}>{bem.nome}</Text>
      <Text style={commonStyles.itemDescription}>{bem.descricao}</Text>
      <Text style={commonStyles.itemValue}>{formatCurrency(bem.valor)}</Text>
      <TouchableOpacity
        style={commonStyles.deleteButton}
        onPress={() => onDelete(bem.id)}
        activeOpacity={0.7}
      >
        <Text style={commonStyles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};