import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Inversion() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Inversion</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Inversion in English refers to the reversal of the usual word order in a sentence, especially in questions, negative adverbials, and conditional sentences. Inversion can add emphasis or indicate formality.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Inversion in Questions</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          In questions, inversion occurs when the auxiliary verb (e.g., do, does, did, is, are) comes before the subject.{"\n"}
          Example: "Is she coming to the party?"
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "Are you ready for the exam?" {"\n"}✅ Example: "Did they arrive on time?"
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Inversion After Negative Adverbials</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          When negative adverbials like "never," "seldom," "rarely," "not only," etc., are used at the beginning of a sentence, inversion occurs.{"\n"}
          Example: "Never have I seen such a beautiful sunset."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "Rarely does he go to the gym."{"\n"}✅ Example: "Not only did she win the race, but she also broke the record."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Inversion in Conditional Sentences</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          In formal or literary English, inversion can be used in conditional sentences instead of using "if." This typically happens in the third conditional.{"\n"}
          Example: "Had I known about the event, I would have attended."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "Had I seen him, I would have spoken to him."{"\n"}✅ Example: "Were he here, he would help us."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Inversion with Adverbial Phrases</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Inversion can also occur when adverbial phrases like "only after," "only when," "under no circumstances," etc., are placed at the beginning of a sentence.{"\n"}
          Example: "Only after the meeting did I realize the importance of the decision."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "Under no circumstances should you open the door to strangers."{"\n"}✅ Example: "Only when you study hard will you pass the test."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Complete the sentences using inversion:{"\n"}
        1. "Rarely ________ such a beautiful view."{"\n"}
        2. "Had I known, ________ to the party."{"\n"}
        3. "Only after the rain ________ the rainbow appear."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. **have I seen**{"\n"}
        2. **would I have gone**{"\n"}
        3. **did** the rainbow appear
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Tips</Text>
      <Text style={[styles.tip,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        - Inversion is used in questions, negative adverbials, and conditional sentences.{"\n"}
        - Remember, in inversion, the auxiliary verb comes before the subject.{"\n"}
        - In formal English, inversion is often used instead of "if" in conditional sentences.
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
});
