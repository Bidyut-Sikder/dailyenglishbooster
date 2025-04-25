import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function QuestionTags() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Question Tags</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Question tags are short questions added at the end of a sentence, often used to confirm or clarify information. They typically consist of an auxiliary verb and a subject pronoun.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 How to Form Question Tags</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - If the main sentence is positive, the question tag is negative. Example: "She is coming, **isn't** she?"{"\n"}
          - If the main sentence is negative, the question tag is positive. Example: "They aren't ready, **are** they?"
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example 1: He is a good student, **isn't** he?{"\n"}
          ✅ Example 2: You don't like coffee, **do** you?
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Common Patterns for Question Tags</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Positive Sentence + Negative Question Tag**: If the main sentence is positive, use a negative question tag with the same auxiliary verb.{"\n"}
          2. **Negative Sentence + Positive Question Tag**: If the main sentence is negative, use a positive question tag with the same auxiliary verb.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ✅ Positive: "He is going to the party, **isn't** he?"{"\n"}
          ✅ Negative: "You don't like it, **do** you?"
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Using Question Tags with Different Tenses</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Present Simple Tense**: Use "do" or "does" for positive sentences and "don't" or "doesn't" for negative sentences.{"\n"}
          - **Present Continuous Tense**: Use "is," "are," or "am" for positive sentences and "isn't," "aren't," or "amn't" for negative sentences.{"\n"}
          - **Past Simple Tense**: Use "did" for positive sentences and "didn't" for negative sentences.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She **is playing**, **isn't** she?{"\n"}
          ✅ Example: They **didn't come**, **did** they?{"\n"}
          ✅ Example: You **don't know**, **do** you?
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Complete the sentences with the correct question tag:{"\n"}
        1. She is your sister, __________?{"\n"}
        2. They haven't seen the movie, __________?{"\n"}
        3. You can help me, __________?{"\n"}
        4. He didn't come, __________?
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. **isn't** she?{"\n"}
        2. **have** they?{"\n"}
        3. **can't** you?{"\n"}
        4. **did** he?
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Tips</Text>
      <Text style={[styles.tip, {marginBottom:42},{ color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        - Remember, the question tag mirrors the auxiliary verb in the sentence.{"\n"}
        - Use **"isn't"** or **"aren't"** for the verb "to be" in the present tense.{"\n"}
        - Use **"didn't"** for the past simple negative, and **"did"** for positive past simple.
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
  tip: {
    fontSize: 16,
    marginVertical: 5,
  },
  examples:{

    
  }

});
