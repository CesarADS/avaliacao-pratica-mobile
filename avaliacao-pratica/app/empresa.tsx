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
              Advocacia & Consultoria Jurídica Ltda.
            </Text>
          </View>
        </View>

        <View style={commonStyles.card}>
          <Text style={commonStyles.title}>Informações da Empresa</Text>
          
          <View style={styles.infoContainer}>
            <MaterialIcons name="business" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Razão Social</Text>
              <Text style={commonStyles.text}>
                Advocacia & Consultoria Jurídica Ltda.
              </Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="assignment" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>CNPJ</Text>
              <Text style={commonStyles.text}>12.345.678/0001-90</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="location-on" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Endereço</Text>
              <Text style={commonStyles.text}>
                Rua dos Advogados, 1234{'\n'}
                Centro - São Paulo/SP{'\n'}
                CEP: 01234-567
              </Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="phone" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Telefone</Text>
              <Text style={commonStyles.text}>(11) 3456-7890</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="email" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>E-mail</Text>
              <Text style={commonStyles.text}>
                contato@advocaciaconsultoria.com.br
              </Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialIcons name="web" size={20} color="#666" />
            <View style={styles.infoContent}>
              <Text style={commonStyles.subtitle}>Website</Text>
              <Text style={commonStyles.text}>
                www.advocaciaconsultoria.com.br
              </Text>
            </View>
          </View>
        </View>

        <View style={commonStyles.card}>
          <Text style={commonStyles.title}>Sobre a Empresa</Text>
          <Text style={commonStyles.text}>
            Fundada em 2010, a Advocacia & Consultoria Jurídica Ltda. é uma 
            empresa especializada em direito empresarial, trabalhista e civil. 
            Com mais de 13 anos de experiência no mercado, oferecemos 
            consultoria jurídica completa para empresas de todos os portes.
          </Text>
          <Text style={[commonStyles.text, { marginTop: 12 }]}>
            Nossa missão é fornecer soluções jurídicas eficazes e 
            personalizadas, sempre priorizando a excelência no atendimento 
            e a satisfação dos nossos clientes.
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