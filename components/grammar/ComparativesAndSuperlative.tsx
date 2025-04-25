import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function ComparativesAndSuperlatives() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Comparatives and Superlatives</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Comparatives and superlatives are used to show the difference between two or more things. Comparatives are used to compare two things, while superlatives are used to compare more than two things, showing the extreme or highest degree of something.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What is a Comparative?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A comparative is used to compare two things or people. It is usually formed by adding "-er" to the adjective (for short adjectives) or using "more" or "less" (for longer adjectives).
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She is taller than her sister. (Taller is the comparative form.){"\n"}
          ✅ Example: This book is more interesting than that one. (More interesting is the comparative form.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What is a Superlative?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A superlative is used to describe something or someone as being the best, the worst, the biggest, the smallest, etc., in a group of three or more things or people. Superlatives are usually formed by adding "-est" to the adjective (for short adjectives) or using "most" or "least" (for longer adjectives).
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She is the tallest in her class. (Tallest is the superlative form.){"\n"}
          ✅ Example: This is the most interesting book I’ve ever read. (Most interesting is the superlative form.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Regular Adjectives - Comparatives and Superlatives</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Here's how we form comparatives and superlatives for regular adjectives:
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Short adjectives (one syllable): Add "-er" for the comparative and "-est" for the superlative.{"\n"}
          Example: tall → taller → tallest{"\n"}
          Example: fast → faster → fastest{"\n"}
          {"\n"}
          ✅ Longer adjectives (two syllables or more): Use "more" or "less" for the comparative and "most" or "least" for the superlative.{"\n"}
          Example: beautiful → more beautiful → most beautiful{"\n"}
          Example: expensive → more expensive → most expensive
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>⚠️ Irregular Adjectives</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Some adjectives have irregular comparative and superlative forms that don't follow the usual rules.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: good → better → best{"\n"}
          ✅ Example: bad → worse → worst{"\n"}
          ✅ Example: far → farther → farthest{"\n"}
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 General Rules</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        1. Use comparatives when comparing two things. Form comparatives with "-er" or "more".{"\n"}
        2. Use superlatives when comparing three or more things. Form superlatives with "-est" or "most".{"\n"}
        3. Some adjectives have irregular forms that do not follow the typical rules.{"\n"}
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. This exam is _______ (more difficult / most difficult) than the last one.{"\n"}
        2. She is the _______ (better / best) player on the team.{"\n"}
        3. This movie is _______ (more exciting / most exciting) than the one we saw last week.{"\n"}
        4. It’s the _______ (more important / most important) task to complete today.{"\n"}
      </Text>
      <Text style={[styles.answer,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. More difficult{"\n"}
        2. Best{"\n"}
        3. More exciting{"\n"}
        4. Most important
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
  sentence: {
    fontSize: 16,
    marginBottom: 10,
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
  quiz: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 15,
  },
  answer: {
    fontSize: 18,
    fontWeight: '600',
  },
});
