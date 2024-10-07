import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Usar ícones do Ionicons

export default function App() {
  // Estados para controlar a visibilidade das respostas
  const [isAnswerVisible1, setIsAnswerVisible1] = useState(false);
  const [isAnswerVisible2, setIsAnswerVisible2] = useState(false);
  const [isAnswerVisible3, setIsAnswerVisible3] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título da página */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Política de Privacidade</Text>
        <View style={styles.separator} />
      </View>

     
      <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>

      <View style={styles.questionSection}>
        <TouchableOpacity style={styles.questionBox} onPress={() => setIsAnswerVisible1(!isAnswerVisible1)}>
          <View style={styles.questionRow}>
            <Text style={styles.question}>O PlanilhaGest é seguro?</Text>
            <Ionicons name={isAnswerVisible1 ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
          </View>
          {isAnswerVisible1 && (
            <Text style={styles.answer}>
              Sim, o PlanilhaGest utiliza os mais altos padrões de segurança para garantir que suas informações financeiras estão protegidas.
              Usamos criptografia para proteger seus dados e a privacidade do usuário é nossa prioridade.
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.questionSection}>
        <TouchableOpacity style={styles.questionBox} onPress={() => setIsAnswerVisible2(!isAnswerVisible2)}>
          <View style={styles.questionRow}>
            <Text style={styles.question}>Posso acessar o app sem internet?</Text>
            <Ionicons name={isAnswerVisible2 ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
          </View>
          {isAnswerVisible2 && (
            <Text style={styles.answer}>
              No momento, o PlanilhaGest requer uma conexão com a internet para sincronizar suas informações e garantir que seus dados estejam
              sempre atualizados. Porém, estamos trabalhando em uma futura versão que permitirá o acesso offline.
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.questionSection}>
        <TouchableOpacity style={styles.questionBox} onPress={() => setIsAnswerVisible3(!isAnswerVisible3)}>
          <View style={styles.questionRow}>
            <Text style={styles.question}>Como faço para me cadastrar no app?</Text>
            <Ionicons name={isAnswerVisible3 ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
          </View>
          {isAnswerVisible3 && (
            <Text style={styles.answer}>
              Para se cadastrar no PlanilhaGest, basta baixar o aplicativo, clicar na opção "Cadastrar", preencher os dados solicitados (nome, email,
              telefone e senha) e confirmar o cadastro. Após isso, você estará pronto para utilizar o app.
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Política de Privacidade */}
      <View style={styles.infoBox}>
        <Text style={styles.infoBoxTitle}>Política de Privacidade</Text>
        <Text style={styles.privacyText}>
          O PlanilhaGest respeita sua privacidade e se compromete a proteger seus dados pessoais. Todas as informações fornecidas são utilizadas
          apenas para melhorar sua experiência no app. Não compartilhamos seus dados com terceiros sem o seu consentimento. Para mais informações,
          consulte a nossa política de privacidade completa dentro do aplicativo.
        </Text>
      </View>

     
      <View style={styles.infoBox}>
        <Text style={styles.infoBoxTitle}>Ajuda</Text>
        <Text style={styles.helpText}>Se precisar de ajuda entre em contato:</Text>
        <Text style={styles.highlightedText}>Telefone: 62984890573</Text>
        <Text style={styles.highlightedText}>Email: lsbagenciadigital@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50', // Cor verde para o título
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#4CAF50', // Linha verde abaixo do título
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  questionSection: {
    marginBottom: 20,
  },
  questionBox: {
    backgroundColor: '#f0f0f0', // Fundo cinza claro
    borderRadius: 10, // Borda arredondada
    borderColor: '#4CAF50', // Cor verde para a borda
    borderWidth: 2,
    padding: 15,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  answer: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
  infoBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderColor: '#4CAF50',
    borderWidth: 2,
    padding: 20,
    marginBottom: 20,
  },
  infoBoxTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 10,
  },
  privacyText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  helpText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
  highlightedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 5,
  },
});