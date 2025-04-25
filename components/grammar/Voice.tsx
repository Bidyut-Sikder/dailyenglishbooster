import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks/theme';

export default function ActivePassiveVoice() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context
  const [quizAnswer, setQuizAnswer] = useState(null);
  
  // Function to handle quiz selection
  const handleAnswer = (answer:any) => {
    setQuizAnswer(answer);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Active and Passive Voice</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In English, sentences can be written in either the active or passive voice. Understanding the difference between these two will help you form sentences correctly.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Active Voice</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In the active voice, the subject of the sentence performs the action. The sentence structure follows a subject-verb-object (SVO) pattern. {"\n"}Example: 
        <Text style={styles.bold}>John</Text> (subject) <Text style={styles.bold}>eats</Text> (verb) an apple (object).
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Passive Voice</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In the passive voice, the subject receives the action. The sentence structure changes to object-verb-subject (OVS). {"\n"}Example: An apple (object) <Text style={styles.bold}>is eaten</Text> (verb) by <Text style={styles.bold}>John</Text> (subject).
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Active to Passive Voice</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        To convert an active voice sentence into a passive voice sentence, you need to follow these steps: {"\n"}
        1. Identify the subject, verb, and object in the active sentence. {"\n"}
        2. Move the object to the subject position. {"\n"}
        3. Add the correct form of the verb "to be" based on the tense. {"\n"}
        4. Use the past participle of the main verb. {"\n"}
        5. If necessary, include the original subject in a prepositional phrase starting with "by."
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Examples of Active to Passive Conversion</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>Active: The chef cooks the meal.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Passive: The meal <Text style={styles.bold}>is cooked</Text> by the chef.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>Active: They built a new house.</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Passive: A new house <Text style={styles.bold}>was built</Text> by them.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 More Examples</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Active: She writes the letter. {"\n"}
        Passive: The letter <Text style={styles.bold}>is written</Text> by her. {"\n"}
        Active: The teacher explains the lesson. {"\n"}
        Passive: The lesson <Text style={styles.bold}>is explained</Text> by the teacher. {"\n"}
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Quiz: Active or Passive?</Text>
      
      <Text style={[styles.quizText, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Choose whether the following sentence is in active or passive voice:
      </Text>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'active' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('active')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>The letter was written by Sarah.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, { backgroundColor: quizAnswer === 'passive' ? '#3b82f6' : '#e5e7eb' }]}
        onPress={() => handleAnswer('passive')}
      >
        <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>Sarah wrote the letter.</Text>
      </TouchableOpacity>

      {quizAnswer && (
        <Text style={[styles.quizResult,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#f43f5e' }]}>
          Your answer: {quizAnswer} {quizAnswer === 'passive' ? '✅ Correct' : '❌ Incorrect'}
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
