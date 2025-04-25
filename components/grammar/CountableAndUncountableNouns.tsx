import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function CountableUncountableNouns() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Countable and Uncountable Nouns</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Nouns can be classified as countable and uncountable. Understanding the difference is essential for proper grammar usage and sentence structure.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What are Countable Nouns?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Countable nouns are things that we can count. They can have both singular and plural forms. When a noun is countable, we can say one, two, three, etc. of the noun.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: **Apple** (one apple, two apples){"\n"}
          ✅ Example: **Car** (one car, three cars)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Common Examples of Countable Nouns</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Book** (one book, five books){"\n"}
          - **Chair** (one chair, several chairs){"\n"}
          - **Dog** (one dog, three dogs){"\n"}
          - **Person** (one person, two people)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What are Uncountable Nouns?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Uncountable nouns are things that we cannot count. They do not have a plural form. When we talk about uncountable nouns, we usually talk about them in terms of quantity (like some, much, little) rather than number.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: **Water** (we cannot say one water, two waters){"\n"}
          ✅ Example: **Rice** (we cannot say one rice, two rices)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Common Examples of Uncountable Nouns</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Milk** (some milk, much milk){"\n"}
          - **Sugar** (a little sugar, much sugar){"\n"}
          - **Information** (some information, little information){"\n"}
          - **Air** (some air, fresh air)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Differences Between Countable and Uncountable Nouns</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Countable nouns** have both singular and plural forms (e.g., one book, three books).{"\n"}
          - **Uncountable nouns** do not have a plural form (e.g., water, rice, information).{"\n"}
          - For countable nouns, we can use numbers (e.g., two cars), but for uncountable nouns, we use words like some, much, little, or a lot of (e.g., some water, much sugar).
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. I have **______** apples. (a / much){'\n'}
        2. Can I have **______** water? (a / some){'\n'}
        3. There is **______** rice left in the bowl. (some / many){'\n'}
        4. We need **______** sugar for the cake. (few / much)
      </Text>
      <Text style={[styles.answer, {marginBottom:42},{ color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. some{"\n"}
        2. some{"\n"}
        3. some{"\n"}
        4. much
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
