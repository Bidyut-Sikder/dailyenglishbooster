import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks/theme';


export default function SubjectVerbAgreement() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context
  const [quizAnswer, setQuizAnswer] = useState(null);
  
  // Function to handle quiz selection
  const handleAnswer = (answer:any) => {
    setQuizAnswer(answer);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Subject-Verb Agreement</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Subject-verb agreement refers to the rule that the subject and verb in a sentence must agree in number (singular or plural).
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Rules of Subject-Verb Agreement</Text>
      
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Singular subjects take singular verbs.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Example: The cat <Text style={styles.bold}>runs</Text> fast.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Plural subjects take plural verbs.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Example: The dogs <Text style={styles.bold}>run</Text> fast.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Subjects joined by 'and' take a plural verb.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Example: John and Sarah <Text style={styles.bold}>are</Text> going to the market.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Subjects joined by 'or' take the verb that agrees with the closest subject.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Example: Either the teacher or the students <Text style={styles.bold}>are</Text> responsible.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Collective nouns take singular verbs.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Example: The team <Text style={styles.bold}>wins</Text> every game.
        </Text>
      </View>








      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Test Your Knowledge</Text>
      
      <Text style={[styles.quizText, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Choose the correct verb form:
      </Text>

       <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'is' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('is')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>The cat <Text style={styles.bold}>is</Text> playing outside.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'are' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('are')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>The dogs <Text style={styles.bold}>are</Text> barking loudly.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'has' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('has')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>Sarah <Text style={styles.bold}>has</Text> finished her homework.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'have' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('have')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>John and Sarah <Text style={styles.bold}>have</Text> completed the task.</Text>
      </TouchableOpacity> 

       {quizAnswer && (
        <Text style={[styles.quizResult, { color: theme === 'dark' ? '#fff' : '#f43f5e' }]}>
          Your answer: {quizAnswer} {quizAnswer === 'are' || quizAnswer === 'have' ? '✅ Correct' : '❌ Incorrect'}
        </Text>
      )} 

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 More Examples</Text>
     
       <Text style={[styles.text, {marginBottom:25},{ color: theme === 'dark' ? '#fff' : '#334155' }]}>
        - The teacher and the student <Text style={styles.bold}>is</Text> here.{"\n"}
        - The team <Text style={styles.bold}>has</Text> won the game.{"\n"}
        - Neither the teacher nor the students <Text style={styles.bold}>are</Text> in the classroom.{"\n"}
        - The book or the pen <Text style={styles.bold}>is</Text> on the table.{"\n"}
      </Text> 
       






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
