import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function DiscourseMarkers() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Discourse Markers</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Discourse markers are words or phrases used to manage the flow of communication and structure discourse. They help organize ideas, indicate relationships between them, and guide the listener or reader through the conversation or text.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What are Discourse Markers?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Discourse markers help to organize speech or writing. They provide signals to the audience about how to interpret what comes next. They can show time relationships, contrast ideas, give examples, or indicate cause and effect.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "Well, I wasn't expecting that." Here, "Well" is a discourse marker used to show a pause and introduce the speaker's reaction.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Discourse Markers</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Additive Markers**: These connect ideas, add information, or introduce a new point. Example: "Moreover," "In addition," "Also".{"\n"}
          2. **Contrastive Markers**: These signal a contrast or opposing idea. Example: "However," "On the other hand," "But".{"\n"}
          3. **Causal Markers**: These show cause and effect relationships. Example: "Therefore," "Because," "As a result."{"\n"}
          4. **Sequencing Markers**: These indicate the order of events or steps. Example: "Firstly," "Next," "Finally."{"\n"}
          5. **Summarizing Markers**: These signal a summary or conclusion. Example: "In conclusion," "To sum up," "Overall."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Examples of Discourse Markers in Sentences</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Additive**: "She loves tennis. Moreover, she plays regularly."{"\n"}
          - **Contrastive**: "I wanted to go swimming. However, it started raining."{"\n"}
          - **Causal**: "He was late. Therefore, he missed the meeting."{"\n"}
          - **Sequencing**: "Firstly, we need to check the schedule. Then, we can arrange the meeting."{"\n"}
          - **Summarizing**: "In conclusion, we need to work on improving communication."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Identify the discourse markers in the following sentences:{"\n"}
        1. "I like to run. Also, I enjoy swimming."{"\n"}
        2. "She was tired. But, she continued working."{"\n"}
        3. "We need to finish the project. Therefore, we must work late."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. **Also** (Additive){"\n"}
        2. **But** (Contrastive){"\n"}
        3. **Therefore** (Causal)
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip, {marginBottom:42},{ color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Discourse markers can help make your writing or speaking more organized and easier to follow.{"\n"}
        • Use them to structure your ideas clearly, show connections between ideas, and make transitions smooth.{"\n"}
        • Don’t overuse them; too many discourse markers can make your writing sound mechanical.
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
