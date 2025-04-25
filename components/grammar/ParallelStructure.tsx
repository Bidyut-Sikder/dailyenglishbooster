import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function ParallelStructure() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Parallel Structure</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Parallel structure (also known as parallelism) is the use of consistent grammatical forms within a sentence. It means using the same pattern of words, phrases, or clauses to show that two or more ideas are equally important.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What is Parallel Structure?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Parallel structure is the repetition of a chosen grammatical form within a sentence. It helps improve clarity, balance, and readability. It's especially important in lists, comparisons, and when connecting clauses.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "She likes running, swimming, and biking." Here, the verbs are in parallel form, creating a balanced and harmonious sentence.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Importance of Parallel Structure</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Clarity**: Parallel structure makes sentences easier to read and understand by providing a predictable pattern.{"\n"}
          - **Balance**: Using parallelism makes the sentence feel more balanced and rhythmical.{"\n"}
          - **Consistency**: It ensures consistency and coherence in your writing, especially when listing ideas or actions.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Examples of Parallel Structure</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Correct**: "She likes to read, to write, and to paint." (Parallel infinitives){"\n"}
          - **Incorrect**: "She likes to read, writing, and painting." (The verbs are not in parallel structure){"\n"}
          - **Correct**: "I will go running, swimming, and hiking." (Parallel gerunds){"\n"}
          - **Incorrect**: "I will go running, to swim, and hiking." (The verbs are not in parallel structure)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Parallel Structure</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Parallel Verbs**: When actions are in the same form. Example: "She likes running, swimming, and biking."{"\n"}
          2. **Parallel Nouns**: When nouns are listed in a consistent pattern. Example: "He enjoys reading, writing, and painting."{"\n"}
          3. **Parallel Adjectives**: When adjectives are used in a parallel structure. Example: "She is smart, kind, and funny."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Identify the parallel structure in the following sentence:{"\n"}
        "I enjoy reading books, writing essays, and to swim in the pool."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        💡 Answer: The sentence is incorrect because "to swim" is not parallel with the other verb forms. The correct sentence would be: "I enjoy reading books, writing essays, and swimming in the pool."
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Always make sure that items in a list or series are in the same grammatical form.{"\n"}
        • Parallel structure is especially important when using conjunctions like "and," "or," and "but."{"\n"}
        • If you're not sure about parallel structure, try reading your sentence out loud. If it sounds awkward, it might need revision.
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
