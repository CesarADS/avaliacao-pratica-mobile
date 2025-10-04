import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { commonStyles } from '../styles/commonStyles';
import { StyleSheet } from 'react-native';

export default function EmpresaScreen() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={commonStyles.card}>
          <View style={styles.headerContainer}>
            <MaterialIcons name="business" size={48} color="#007aff" />
            <Text style={styles.companyName}>
              Seu Jorge Adogueido LTDA.
            </Text>
          </View>
        </View>

        <View style={commonStyles.card}>
          <Text style={commonStyles.title}>Informações da Empresa</Text>
          
          <View style={styles.infoContainer}>
            <MaterialIcons name="business" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Razão Social</Text>
              <Text style={commonStyles.text}>quando a prfdf
                Advogueido Seu Jorge
              </Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="assignment" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>CNPJ</Text>
              <Text style={commonStyles.text}>123.456.789/0001-00</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="location-on" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Endereço</Text>
              <Text style={commonStyles.text}>
                Estrada da Gávea, 428{'\n'}
                Gávea - Rio de Janeiro/RJ{'\n'}
                CEP: 22451-264
              </Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="phone" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Telefone</Text>
              <Text style={commonStyles.text}>(21) 4002-8922</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="email" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>E-mail</Text>
              <Text style={commonStyles.text}>
                contato@seujorgefazmilagre.com.br
              </Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="web" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Website</Text>
              <Text style={commonStyles.text}>
                www.meajudaseujorge.com.br
              </Text>
            </View>
          </View>
        </View>

        <View style={commonStyles.card}>
          <Text style={commonStyles.title}>Sobre a Empresa</Text>
          <Text style={commonStyles.text}>
            Fundada em 2010, a Advocacia Seu Jorge Advogueido Ltda. é uma 
            empresa especializada em direito penal, livrando os marginais da condenação.
          </Text>
          <Text style={[commonStyles.text, { marginTop: 12 }]}>
            Nossa missão é fornecer soluções jurídicas eficazes e 
            personalizadas, sempre priorizando o aumento de criminosos no país.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
});