import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function EllipsisAndSubstitution() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Ellipsis and Substitution</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Ellipsis and substitution are two types of cohesion used in English to avoid repetition. They help to make sentences more concise and fluent.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What is Ellipsis?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Ellipsis is the omission of a word or group of words that are understood from the context. It is often used to avoid repetition and make sentences more concise.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "I have a red pen, and you have a blue one."{"\n"}
          In this sentence, the word "pen" is omitted after "blue" because it is understood from the context.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What is Substitution?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Substitution is the replacement of a word or group of words with another word (usually a pronoun or a form of "do") to avoid repetition.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "I love tea, but she prefers coffee."{"\n"}
          In this sentence, "coffee" is a substitution for "tea" to avoid repeating the noun.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Substitution</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Nominal Substitution**: Replacing nouns with a form of "one" or "ones."{"\n"}
          2. **Verbal Substitution**: Replacing verbs with a form of "do."{"\n"}
          3. **Clausal Substitution**: Replacing clauses with words like "so" or "not."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Examples of Ellipsis and Substitution</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Ellipsis**: "She can play the guitar, and I can [play the guitar] too."
          {"\n"}Here, the part "play the guitar" is omitted after "I can" because it's understood from the context.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Substitution (Nominal)**: "I have two books, but I only need one."
          {"\n"}Here, "one" replaces the noun "book" to avoid repetition.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Substitution (Verbal)**: "I don't like the movie, but you do."
          {"\n"}Here, "do" substitutes for the verb "like" to avoid repeating it.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Convert the following sentences using ellipsis or substitution:{"\n"}
        1. "I can't find my keys, but I found my wallet."{"\n"}
        2. "She loves dancing, and I love dancing too."{"\n"}
        3. "He wants to go to the beach, but I don't want to go to the beach."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. "I can't find my keys, but I found my wallet." → "I can't find my keys, but my wallet is found." (Ellipsis)
        {"\n"}2. "She loves dancing, and I love it too." (Substitution)
        {"\n"}3. "He wants to go to the beach, but I don't." (Ellipsis)
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Ellipsis is often used with verbs or phrases to avoid repetition.{"\n"}
        • Substitution helps to make language more concise by replacing repeated words or phrases with pronouns or auxiliary verbs.{"\n"}
        • Nominal substitution is typically used with the word "one" or "ones."{"\n"}
        • Verbal substitution usually involves the use of the auxiliary verb "do."
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
