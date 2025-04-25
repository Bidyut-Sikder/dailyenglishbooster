import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks/theme';

export default function DirectIndirectSpeech() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context
  const [quizAnswer, setQuizAnswer] = useState(null);
  
  // Function to handle quiz selection
  const handleAnswer = (answer:any) => {
    setQuizAnswer(answer);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Direct and Indirect Speech</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In English grammar, direct speech and indirect speech are used to report or relay what someone else has said. Understanding how to convert direct speech into indirect speech is crucial for proper communication.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Direct Speech</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In direct speech, the exact words of the speaker are quoted within quotation marks. The speaker's words are reported exactly as they were said. {"\n"}Example: 
        <Text style={styles.bold}>"I am going to the market,"</Text> she said.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Indirect Speech</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In indirect speech, the speaker’s words are reported without using quotation marks. The reporting verb is usually changed, and pronouns or tenses may also change. {"\n"}Example: 
        She said that she <Text style={styles.bold}>was going</Text> to the market.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Changes from Direct to Indirect Speech</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        To convert a sentence from direct to indirect speech, follow these general rules: {"\n"}
        1. Remove the quotation marks. {"\n"}
        2. Use the reporting verb "said" (or another verb like "told," "asked," "explained," etc.). {"\n"}
        3. Change the pronouns if necessary (e.g., "I" becomes "he/she"). {"\n"}
        4. Adjust the verb tense according to the rules of indirect speech (e.g., present tense becomes past tense).
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Examples of Direct to Indirect Conversion</Text>
      
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>Direct: "I am studying for the exam," said Mark.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Indirect: Mark said that he <Text style={styles.bold}>was studying</Text> for the exam.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>Direct: "Can you help me with the project?" she asked.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Indirect: She asked if I <Text style={styles.bold}>could help</Text> her with the project.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 More Examples of Direct and Indirect Speech</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Direct: "I will meet you at the airport," John said. {"\n"}
        Indirect: John said that he <Text style={styles.bold}>would meet</Text> me at the airport. {"\n"}
        Direct: "She doesn't like coffee," Mark said. {"\n"}
        Indirect: Mark said that she <Text style={styles.bold}>did not like</Text> coffee. {"\n"}
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Quiz: Direct or Indirect?</Text>
      
      <Text style={[styles.quizText, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Choose whether the following sentence is in direct or indirect speech:
      </Text>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'direct' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('direct')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>She said that she was coming to the party.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'indirect' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('indirect')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>"I am learning React Native," he said.</Text>
      </TouchableOpacity>

      {quizAnswer && (
        <Text style={[styles.quizResult,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#f43f5e' }]}>
          Your answer: {quizAnswer} {quizAnswer === 'indirect' ? '✅ Correct' : '❌ Incorrect'}
        </Text>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  intro: {
    fontSize: 18,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 10,
  },
  block: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3, // To give shadow on Android (for a floating card effect)
  },
  typeTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  quizText: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '600',
  },
  option: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  quizResult: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    textAlign: 'center',
  },
});
