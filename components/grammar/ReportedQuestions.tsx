import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function ReportedQuestions() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Reported Questions</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Reported questions are used when we report what someone has asked. When we report a question, we usually change the word order and often omit the question mark. Reported questions are typically introduced by verbs like "ask," "wonder," or "inquire."
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Structure of Reported Questions</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          In reported questions, the structure changes from direct question form to a statement form. The general structure is: 
          <Text style={styles.bold}> Reporting Verb + Subject + Verb (in normal order)</Text>.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "She asked, 'Where are you going?'"{"\n"}
          Reported form: "She asked where I was going."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Key Rules for Reported Questions</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. The question mark is usually omitted in reported questions.
          {"\n"}2. The word order changes: The subject comes before the verb (subject + verb).
          {"\n"}3. The reporting verb (like "ask," "inquire," "wonder") is followed by the reported question, without the auxiliary verb (e.g., "do," "did").
          {"\n"}4. The tense of the verb often changes in reported speech (backshifting).
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Examples of Reported Questions</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - Direct: "She said, 'Where is my book?'"{"\n"}
          Reported: "She asked where her book was."
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - Direct: "John asked, 'Are you coming to the party?'"{"\n"}
          Reported: "John asked if I was coming to the party."
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - Direct: "He said, 'Do you like pizza?'"{"\n"}
          Reported: "He asked if I liked pizza."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Convert the following direct questions into reported speech:{"\n"}
        1. "She asked, 'What time does the train leave?'"{"\n"}
        2. "They asked, 'Have you seen my keys?'"{"\n"}
        3. "Tom asked, 'Where can I find the nearest restaurant?'"
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. "She asked what time the train left."{"\n"}
        2. "They asked if I had seen their keys."{"\n"}
        3. "Tom asked where he could find the nearest restaurant."
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Tips</Text>
      <Text style={[styles.tip, {marginBottom:42},{ color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        - Remember to omit the question mark in reported questions.{"\n"}
        - Change the word order to a statement format: Subject + Verb.{"\n"}
        - Use reporting verbs like "ask," "inquire," or "wonder."{"\n"}
        - Pay attention to tense changes (backshifting) when reporting questions.
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
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#334155',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  sentence: {
    fontSize: 16,
    marginBottom: 10,
  },
  quiz: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 15,
  },
  answer: {
    fontSize: 18,
    fontWeight: '600',
  },
  tip: {
    fontSize: 16,
    marginVertical: 5,
  },
});
