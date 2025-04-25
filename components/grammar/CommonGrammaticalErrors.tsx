import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function CommonGrammaticalErrors() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Common Grammatical Errors</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Understanding and avoiding common grammatical errors is essential to mastering English. Below, we cover some of the most frequent mistakes made by learners and how to correct them.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>1. Subject-Verb Agreement Errors</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          **Subject-verb agreement** errors occur when the subject and the verb do not match in number (singular/plural) or person (first, second, third).
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "She don't like apples."{"\n"}
          ✅ Correct: "She doesn't like apples."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: A singular subject takes a singular verb, and a plural subject takes a plural verb.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>2. Incorrect Use of Articles</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          **Articles (a, an, the)** are used incorrectly when learners fail to understand the difference between definite and indefinite articles.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "She is a best student in class."{"\n"}
          ✅ Correct: "She is the best student in class."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: Use "a" before a consonant sound and "an" before a vowel sound. "The" is used when referring to a specific thing.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>3. Run-on Sentences</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A **run-on sentence** happens when two or more independent clauses are connected without proper punctuation or a conjunction.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "I went to the store I bought some fruits."{"\n"}
          ✅ Correct: "I went to the store, and I bought some fruits."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: Use a comma with a coordinating conjunction or a semicolon to separate independent clauses.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>4. Misuse of Prepositions</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          **Prepositions** can be tricky because certain verbs, adjectives, and nouns are paired with specific prepositions.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "She is good in playing tennis."{"\n"}
          ✅ Correct: "She is good at playing tennis."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: Pay attention to fixed phrases and collocations when using prepositions.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>5. Misplaced Modifiers</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A **misplaced modifier** occurs when a descriptive word or phrase is placed too far from the word it modifies, leading to confusion.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "She almost drove the car for 10 hours." (It sounds like she almost drove the car, but didn't.){"\n"}
          ✅ Correct: "She drove the car for almost 10 hours."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: Place modifiers close to the word they are describing.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>6. Inconsistent Tense Usage</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          **Tense consistency** errors occur when you switch between tenses inappropriately within a sentence or paragraph.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "She was eating lunch when he arrives."{"\n"}
          ✅ Correct: "She was eating lunch when he arrived."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: Keep the same tense throughout a sentence unless the situation changes.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>7. Double Negatives</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          **Double negatives** occur when two negative words are used together in a sentence, which can lead to confusion or incorrect meaning.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "I don't need no help."{"\n"}
          ✅ Correct: "I don't need any help."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: Avoid using two negative words in the same sentence.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>8. Incorrect Plural Forms</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          **Incorrect plural forms** are often made by learners when they fail to use the correct plural form of a noun.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Incorrect: "I have two childs."{"\n"}
          ✅ Correct: "I have two children."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          **Rule**: Some nouns have irregular plural forms (e.g., "child" → "children").
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Choose the correct sentence:{"\n"}
        "She don't like to eat vegetables" or "She doesn't like to eat vegetables"?
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        💡 Answer: "She doesn't like to eat vegetables" is correct.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips for Avoiding Common Errors</Text>
      <Text style={[styles.tip,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Pay attention to subject-verb agreement. Singular subjects need singular verbs!{"\n"}
        • Use articles ("a," "an," "the") properly to make sentences clear.{"\n"}
        • Practice proper punctuation and avoid run-on sentences.{"\n"}
        • Learn the correct preposition for common verbs and phrases.{"\n"}
        • Keep tense consistent throughout your writing.
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
