import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Determiners() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Determiners</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Determiners are words that introduce nouns and provide more information about them. They help specify which noun is being referred to and can indicate quantity, possession, or specificity.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What are Determiners?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A determiner is a word that comes before a noun to give more information about the noun. It can tell you whether the noun is specific or general, or how many there are.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: **The** book is on the table. ("The" specifies a particular book.){"\n"}
          ✅ Example: **A** dog is barking outside. ("A" indicates any dog, not a specific one.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Determiners</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Determiners are categorized into different types based on the information they provide about the noun. The main types of determiners are:
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Articles**: "a," "an," "the" (used to specify a noun).{"\n"}
          Example: **The** car is red.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          2. **Demonstratives**: "this," "that," "these," "those" (used to indicate specific nouns).{"\n"}
          Example: **This** book is interesting.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          3. **Possessives**: "my," "your," "his," "her," "its," "our," "their" (used to show ownership).{"\n"}
          Example: **My** brother is a doctor.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          4. **Quantifiers**: "some," "any," "many," "few," "much," "several" (used to indicate quantity).{"\n"}
          Example: **Some** people like coffee.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          5. **Numbers**: "one," "two," "three," etc. (used to specify the number of nouns).{"\n"}
          Example: I have **two** sisters.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          6. **Interrogative Determiners**: "which," "what" (used to ask questions about nouns).{"\n"}
          Example: **Which** book do you prefer?
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Articles</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Articles are determiners that define the noun as specific or unspecific. There are two types of articles: definite and indefinite.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Definite Article**: "The" refers to a specific noun that is known to both the speaker and the listener.{"\n"}
          Example: **The** cat is on the roof. (We know which cat is being referred to.)
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Indefinite Articles**: "A" and "An" refer to any member of a group or category.{"\n"}
          Example: I saw **a** cat in the garden. (The specific cat is not known.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Demonstratives</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Demonstrative determiners are used to indicate specific nouns and provide more detail about their location or proximity.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **This** and **these** refer to things that are close in time or space.{"\n"}
          Example: **This** book is interesting. (singular){"\n"}
          Example: **These** books are interesting. (plural)
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **That** and **those** refer to things that are farther away in time or space.{"\n"}
          Example: **That** car is fast. (singular){"\n"}
          Example: **Those** cars are fast. (plural)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Possessives</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Possessive determiners show ownership or possession. They are used to show that something belongs to someone or something.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **My** (my book){"\n"}
          - **Your** (your phone){"\n"}
          - **His** (his car){"\n"}
          - **Her** (her house){"\n"}
          - **Our** (our project){"\n"}
          - **Their** (their idea)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. **______** cat is sitting on the wall. (A / The){'\n'}
        2. **______** apples are in the basket. (These / That){'\n'}
        3. **______** brother is coming tomorrow. (My / Your){'\n'}
        4. **______** car is parked outside. (This / Those)
      </Text>
      <Text style={[styles.answer,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. The{"\n"}
        2. These{"\n"}
        3. My{"\n"}
        4. This
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
