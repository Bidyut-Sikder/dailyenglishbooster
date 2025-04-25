import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Conjunctions() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Conjunctions</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Conjunctions are words that connect words, phrases, clauses, or sentences. They are essential in forming complex sentences and ensuring the smooth flow of ideas.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What Conjunctions Do</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Conjunctions help in joining different parts of a sentence, making the writing more coherent and meaningful. They link words or clauses of equal rank or importance.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Types of Conjunctions with Examples:</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Coordinating Conjunctions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These conjunctions connect words, phrases, or clauses that are of equal importance (e.g., and, but, or, nor, for, so, yet).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ✨ And, but, or, nor, for, so, yet
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I wanted to go for a walk, <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>but</Text> it started raining.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Subordinating Conjunctions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These conjunctions connect an independent clause with a dependent clause (e.g., because, although, since, if, while, unless).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          💡 Because, although, since, if, while, unless
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She stayed home <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>because</Text> it was raining.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Correlative Conjunctions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These conjunctions come in pairs and connect words, phrases, or clauses that are balanced in structure (e.g., either...or, neither...nor, not only...but also).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🔄 Either...or, neither...nor, not only...but also
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>Either</Text> you can come with me, <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>or</Text> you can stay home.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Conjunctions of Time</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These conjunctions show when something happens or links two events that happen at the same time (e.g., before, after, when, while, as soon as).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ⏰ Before, after, when, while, as soon as
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I will call you <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>when</Text> I arrive.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Quiz</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#1f2937' }]}>
        Which type of conjunction is used in this sentence? {"\n"}
        "I wanted to go to the beach, <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>but</Text> it was too cold."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#16a34a' : '#065f46' }]}>💡 Answer: Coordinating Conjunction</Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:43}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Coordinating conjunctions connect words or clauses of equal importance.{"\n"}
        • Subordinating conjunctions connect an independent clause to a dependent clause.{"\n"}
        • Correlative conjunctions work in pairs to connect balanced elements.
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
