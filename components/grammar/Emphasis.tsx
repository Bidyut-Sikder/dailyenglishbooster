import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Emphasis() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Emphasis</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Emphasis is used in language to highlight a particular part of a sentence. One way to add emphasis in English is through cleft sentences and other structures that allow you to focus on specific information.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What is Emphasis?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Emphasis in language involves making a specific part of a sentence stand out more. This can be achieved using different grammatical tools, such as cleft sentences, inversion, or fronting, which draw attention to particular elements.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Cleft Sentences</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Cleft sentences are a way of emphasizing a specific part of a sentence. The structure involves splitting a sentence into two parts to highlight the most important information. There are two main types of cleft sentences:
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **It-clefts**: "It is + emphasized part + that/who."
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          2. **Wh-clefts**: "What + emphasized part + is + rest of the sentence."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example of an It-cleft: "It was John who ate the last cookie."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example of a Wh-cleft: "What I need is a good book to read."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Other Structures for Emphasis</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Besides cleft sentences, there are other ways to add emphasis in a sentence:
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Inversion**: Changing the normal word order in a sentence.{"\n"}
          - **Fronting**: Moving an element of the sentence to the front for emphasis.{"\n"}
          - **Exclamatory sentences**: Using exclamation marks to emphasize emotions or strong feelings.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Examples of Emphasis Structures</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Inversion**: "Never have I seen such a beautiful sunset." (Here, inversion is used for emphasis.){"\n"}
          2. **Fronting**: "Books, I love to read them." (The object "Books" is moved to the front for emphasis.){"\n"}
          3. **Exclamatory Sentence**: "What a beautiful sunset!" (The exclamation marks add emphasis to the beauty of the sunset.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Identify which sentence uses emphasis:{"\n"}
        "It was the teacher who explained the concept clearly." or "The teacher explained the concept clearly."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        💡 Answer: "It was the teacher who explained the concept clearly." is an example of a cleft sentence used for emphasis.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips for Using Emphasis</Text>
     
      <Text style={[styles.tip,{marginBottom:42}, {marginBottom:42},{ color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Use cleft sentences to highlight important information.{"\n"}
        • Inversion and fronting can add variety and style to your writing.{"\n"}
        • Avoid overusing emphasis structures, as it can make your writing feel unnatural.
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
