import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Adverbs() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Adverbs</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Adverbs are words that modify or describe verbs, adjectives, or other adverbs. They tell us how, when, where, or to what extent something happens.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What Adverbs Do</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Adverbs provide more information about the action, the quality of an adjective, or how another adverb is being used in the sentence.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Types of Adverbs with Examples:</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Adverbs of Manner</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adverbs describe how an action is performed (e.g., slowly, quickly, happily).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🏃‍♂️ Slowly, quickly, loudly, happily
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She ran <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>quickly</Text> to the store.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Adverbs of Time</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adverbs tell us when something happens (e.g., today, tomorrow, yesterday, now).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ⏰ Today, tomorrow, yesterday, now
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I will meet you <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>tomorrow</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Adverbs of Place</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adverbs tell us where something happens (e.g., here, there, everywhere, nowhere).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          📍 Here, there, everywhere, nowhere
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The children are playing <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>here</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Adverbs of Frequency</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adverbs tell us how often something happens (e.g., always, usually, never, sometimes).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🔄 Always, usually, never, sometimes
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>always</Text> wakes up early.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Adverbs of Degree</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>These adverbs describe the intensity or degree of an action, adjective, or another adverb (e.g., very, too, quite, almost).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🔥 Very, too, quite, almost
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The soup is <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>very</Text> hot.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Quiz</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#1f2937' }]}>
        Which type of adverb is used in this sentence? {"\n"}
        "He runs <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>quickly</Text>."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#16a34a' : '#065f46' }]}>💡 Answer: Adverb of Manner</Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:43}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Adverbs of manner usually end in “-ly.” {"\n"}
        • Adverbs of frequency often come before the main verb.{"\n"}
        • Adverbs of degree modify adjectives or other adverbs, not verbs.
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
