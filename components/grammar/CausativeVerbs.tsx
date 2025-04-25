import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function CausativeVerbs() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Causative Verbs</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Causative verbs are used when one person causes another person to do something. They are formed with the verb "have," "get," or "make" followed by the base verb or past participle. The causative verb emphasizes the action performed by someone else rather than the subject.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Causative Verbs</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. "Have" (to arrange for someone to do something)</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Have" is used when we arrange for someone to do something for us or to perform an action on our behalf. The structure is: 
          <Text style={styles.bold}> subject + have + object + base verb</Text>.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "I had the mechanic fix my car."{"\n"}
          (I arranged for the mechanic to fix my car.)
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. "Get" (to persuade or request someone to do something)</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Get" is used when we persuade, convince, or arrange for someone to do something. The structure is: 
          <Text style={styles.bold}> subject + get + object + to + base verb</Text>.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "I got my brother to help me with my homework."{"\n"}
          (I persuaded my brother to help me with my homework.)
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. "Make" (to force or require someone to do something)</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Make" is used when we force or require someone to do something. The structure is: 
          <Text style={styles.bold}> subject + make + object + base verb</Text>.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "The teacher made the students write an essay."{"\n"}
          (The teacher forced the students to write an essay.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Key Differences Between "Have," "Get," and "Make"</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - "Have" implies an arrangement or a request for someone to do something.{"\n"}
          - "Get" implies persuading or convincing someone to do something.{"\n"}
          - "Make" implies forcing or requiring someone to do something.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Complete the sentences using the correct causative verb ("have," "get," or "make"):{"\n"}
        1. "I __________ my friend help me with the project."{"\n"}
        2. "She __________ her hair cut at the salon."{"\n"}
        3. "He __________ me clean the kitchen after the party."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. **got**{"\n"}
        2. **had**{"\n"}
        3. **made**
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Tips</Text>
      <Text style={[styles.tip,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        - "Have" is used to arrange for someone to do something.{"\n"}
        - "Get" is used to persuade or request someone to do something.{"\n"}
        - "Make" is used to force or require someone to do something.{"\n"}
        - "Make" does not use "to" before the verb in the causative structure.
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
  tip: {
    fontSize: 16,
    marginVertical: 5,
  },
});
