import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Nominalisation() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Nominalisation</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Nominalisation is the process of turning verbs, adjectives, or other parts of speech into nouns. It is a common strategy in academic and formal writing to make language more precise and abstract.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What is Nominalisation?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Nominalisation involves transforming a verb or adjective into a noun. This helps to simplify the structure of a sentence, making it more concise and formal.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "He decided to resign." → "His resignation was unexpected."{"\n"}
          In this example, the verb "resign" has been transformed into the noun "resignation."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Nominalisation</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Verb to Noun**: Changing a verb into a noun (e.g., 'decide' to 'decision').{"\n"}
          2. **Adjective to Noun**: Changing an adjective into a noun (e.g., 'happy' to 'happiness').{"\n"}
          3. **Adverb to Noun**: Changing an adverb into a noun (e.g., 'quickly' to 'quickness').
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Examples of Nominalisation</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Verb to Noun**: "She will analyse the data carefully." → "She will give an analysis of the data."
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Adjective to Noun**: "He is very intelligent." → "His intelligence is impressive."
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Adverb to Noun**: "He runs quickly." → "His quickness is remarkable."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Convert the following sentences into nominalisations:{"\n"}
        1. "She decided to participate in the competition."{"\n"}
        2. "He acted very bravely."{"\n"}
        3. "They will start working on the project next week."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. "She made the decision to participate in the competition." (Verb to Noun: "decide" → "decision"){"\n"}
        2. "His bravery was commendable." (Adverb to Noun: "bravely" → "bravery"){"\n"}
        3. "They will begin the work on the project next week." (Verb to Noun: "work" → "the work")
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Nominalisation is often used in academic and formal writing to make language more abstract.{"\n"}
        • It can make sentences more concise, but overuse of nominalisation can make the writing sound heavy or overly complex.{"\n"}
        • Focus on using nominalisation when you want to express ideas in a more formal and concise manner.
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
