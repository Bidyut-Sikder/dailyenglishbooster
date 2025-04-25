import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function QuestionForms() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Question Forms</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        In English, there are various ways to form questions depending on the context and the type of information we seek. This guide explains the basic question forms and their usage.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Types of Questions</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Yes/No Questions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Yes/No questions are questions that can be answered with a simple "yes" or "no." These questions often begin with an auxiliary verb (e.g., "do," "does," "is," "are," "have," etc.).
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: Do you like coffee?{"\n"}
          ✅ Example: Is she coming to the party?
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Wh- Questions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Wh- questions are used to ask for specific information. They start with a "wh-" word such as "who," "what," "when," "where," "why," "how," etc.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: What is your favorite color?{"\n"}
          ✅ Example: Where do you live?
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Alternative Questions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Alternative questions give the listener a choice between two or more options. These questions usually have the structure: "or" between the choices.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: Do you prefer tea or coffee?{"\n"}
          ✅ Example: Are you going to the movie or the concert?
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Tag Questions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Tag questions are short questions added at the end of a statement. They are used to confirm information or seek agreement. The tag question often uses an auxiliary verb (e.g., "isn't it," "don't you," "aren't they," etc.).
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: You like chocolate, don't you?{"\n"}
          ✅ Example: She is coming to the meeting, isn't she?
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Negative Questions</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Negative questions are used to express doubt or surprise about something. They are typically formed by adding a negative form of an auxiliary verb (e.g., "isn't," "don't," "haven't," etc.) at the beginning.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: Aren't you coming to the party?{"\n"}
          ✅ Example: Don't you like pizza?
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Question Word Usage</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Here is a quick guide to the most common question words:
      </Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        • Who – Used to ask about a person. (e.g., Who is your teacher?){"\n"}
        • What – Used to ask about an object, idea, or event. (e.g., What do you want to eat?){"\n"}
        • Where – Used to ask about a location. (e.g., Where do you live?){"\n"}
        • When – Used to ask about time. (e.g., When is your birthday?){"\n"}
        • Why – Used to ask for a reason. (e.g., Why are you sad?){"\n"}
        • How – Used to ask about the manner or method of something. (e.g., How do you make coffee?)
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔑 Key Points</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        • Yes/No questions are simple and require a "yes" or "no" answer.{"\n"}
        • Wh- questions are for specific information.{"\n"}
        • Alternative questions offer choices between two or more options.{"\n"}
        • Tag questions are used to confirm information or seek agreement.{"\n"}
        • Negative questions are used to express surprise, doubt, or disbelief.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. _______ you like chocolate?{"\n"}
        2. _______ do you live?{"\n"}
        3. _______ is your favorite book?{"\n"}
        4. _______ you coming to the party?{"\n"}
      </Text>
      <Text style={[styles.answer, {marginBottom:42},{ color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. Do (Yes/No Question){"\n"}
        2. Where (Wh- Question){"\n"}
        3. What (Wh- Question){"\n"}
        4. Aren't (Negative Question)
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
