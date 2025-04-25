import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Pronouns() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Pronouns</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Pronouns are words used to replace nouns in a sentence, avoiding repetition. They make sentences clearer and less repetitive.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What Pronouns Do</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Pronouns replace specific nouns in order to simplify sentences and avoid redundancy.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸Types of Pronouns with Examples :</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Personal Pronouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Used to refer to people or things (e.g., I, you, he, she, it, we, they).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          👤 I, you, he, she, it, we, they
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>She</Text> is reading a book.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Possessive Pronouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Used to show ownership or possession (e.g., mine, yours, his, hers, theirs).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🏠 Mine, yours, his, hers, theirs
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The book is <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>hers</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Reflexive Pronouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Used when the subject and object are the same person or thing (e.g., myself, yourself, himself, herself, itself).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🙋‍♂️ Myself, yourself, himself, herself, itself
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She did it <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>herself</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Demonstrative Pronouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Used to point to specific things (e.g., this, that, these, those).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          👉 This, that, these, those
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>This</Text> is my favorite book.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Indefinite Pronouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Used for non-specific things or people (e.g., anyone, anything, someone, everyone).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🏃‍♀️ Anyone, anything, someone, everyone
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>Anyone</Text> can join the event.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>6. Relative Pronouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Used to link one clause to another (e.g., who, whom, whose, which, that).</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🤝 Who, whom, whose, which, that
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The person <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>who</Text> called you is waiting outside.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Quiz</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#1f2937' }]}>
        Which type of pronoun is used in this sentence? {"\n"}
        "<Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>They</Text> will visit the museum tomorrow."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#16a34a' : '#065f46' }]}>💡 Answer: Personal Pronoun</Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:43}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Pronouns are used to avoid repetition of nouns.{"\n"}
        • Ensure the pronoun agrees in number and gender with the noun it replaces.{"\n"}
        • Some pronouns, like reflexive ones, have specific uses that need careful attention.
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
