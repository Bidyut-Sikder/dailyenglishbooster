import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Adjectives() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Adjectives</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Adjectives are words that describe or modify nouns or pronouns. They help to give more detail about a person, place, thing, or idea.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What Adjectives Do</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Adjectives provide more information about a noun or pronoun, helping to answer questions like "What kind?" "How many?" or "Which one?"
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Types of Adjectives with Examples:</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Descriptive Adjectives</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adjectives describe the quality or characteristic of a noun or pronoun (e.g., tall, beautiful, smart).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🌸 Tall, beautiful, smart, quiet, interesting
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>smart</Text> student solved the problem.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Quantitative Adjectives</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adjectives describe the quantity or amount of something (e.g., some, many, few, much, all).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🧮 Some, many, few, all, several
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: There are <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>many</Text> books on the shelf.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Demonstrative Adjectives</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adjectives point out a specific noun or pronoun (e.g., this, that, these, those).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          👉 This, that, these, those
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>This</Text> book is mine.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Possessive Adjectives</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adjectives show ownership or possession (e.g., my, your, his, her, their).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🏠 My, your, his, her, their
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: That is <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>my</Text> car.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Interrogative Adjectives</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adjectives are used to ask questions (e.g., which, what, whose).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ❓ Which, what, whose
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>Which</Text> book do you prefer?
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Quiz</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#1f2937' }]}>
        Which type of adjective is used in this sentence? {"\n"}
        "<Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>This</Text> is my pen."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#16a34a' : '#065f46' }]}>💡 Answer: Demonstrative Adjective + Possessive Adjective</Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:43}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Adjectives usually come before the noun they modify.{"\n"}
        • Possessive adjectives show ownership, like "my" or "your."{"\n"}
        • Demonstrative adjectives point out specific nouns, like "this" or "those."
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
  examples: {
    fontSize: 16,
    marginBottom: 10,
  },
  sentence: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
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
  text: {
    fontSize: 16,
    lineHeight: 16, // Makes the text more readable
    marginBottom: 5,
    fontWeight: 'normal', // You can change this to 'bold' if you want some texts to stand out
  },
});
