import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function ConditionalSentences() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Conditional Sentences</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Conditional sentences express a condition and its possible result. These sentences consist of two parts: the "if" clause (condition) and the main clause (result).
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Types of Conditional Sentences</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Zero Conditional</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          The zero conditional is used to talk about general truths or facts that are always true when the condition is met. Both the condition and the result are in the present tense.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: If you heat water to 100°C, it boils.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. First Conditional</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          The first conditional is used to talk about real or possible situations in the future. The "if" clause uses the present simple tense, and the main clause uses the future simple tense (will).
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: If it rains tomorrow, I will stay home.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Second Conditional</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          The second conditional is used to talk about hypothetical or unreal situations in the present or future. The "if" clause uses the past simple tense, and the main clause uses "would" + base verb.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: If I had a million dollars, I would travel the world.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Third Conditional</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          The third conditional is used to talk about situations that did not happen in the past and their possible results. The "if" clause uses the past perfect tense, and the main clause uses "would have" + past participle.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: If I had studied harder, I would have passed the exam.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Mixed Conditional</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          The mixed conditional is used to talk about a situation in the past that has a present result. The "if" clause uses the third conditional (past perfect), and the main clause uses the second conditional (would + base verb).
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: If I had studied harder, I would be a doctor now.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Examples and Explanation</Text>

      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In each type of conditional sentence, the condition (the "if" part) expresses a situation or event, and the result expresses what happens if the condition is fulfilled. Let's look at each type in more detail:
      </Text>

      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        • In the Zero Conditional, the result is always true (e.g., scientific facts or general truths).{"\n"}
        • The First Conditional talks about real possibilities in the future. The situation could happen based on the condition being met.{"\n"}
        • The Second Conditional describes hypothetical situations that are unlikely or impossible. It is used for dreams, wishes, and unreal situations.{"\n"}
        • The Third Conditional refers to past events that didn't happen. It is used to express regret or reflection on past mistakes.{"\n"}
        • The Mixed Conditional combines the past and present to show how past actions affect the present situation.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔑 Key Points</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        • Use the Zero Conditional for facts and general truths.{"\n"}
        • The First Conditional is used for real and likely future events.{"\n"}
        • The Second Conditional expresses hypothetical or imaginary situations.{"\n"}
        • The Third Conditional reflects on past situations and their possible results.{"\n"}
        • The Mixed Conditional links past actions to present consequences.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. If I _______ (know) about the meeting, I would have attended.{"\n"}
        2. If it _______ (rain), I will bring an umbrella.{"\n"}
        3. If I _______ (be) rich, I would buy a house by the sea.
      </Text>
      <Text style={[styles.answer,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. had known (Third Conditional){"\n"}
        2. rains (First Conditional){"\n"}
        3. were (Second Conditional)
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
