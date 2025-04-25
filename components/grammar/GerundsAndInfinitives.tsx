import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function GerundsAndInfinitives() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Gerunds and Infinitives</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Gerunds and infinitives are both verb forms that can function as nouns in sentences. However, their usage can depend on the main verb or specific context. Here's a guide to help you understand the difference and when to use each form.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What is a Gerund?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A gerund is the "-ing" form of a verb that functions as a noun. Gerunds are often used after certain verbs, prepositions, and expressions.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I enjoy swimming. (Swimming is the gerund.){"\n"}
          ✅ Example: She is good at painting. (Painting is the gerund.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What is an Infinitive?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          An infinitive is the base form of a verb, preceded by "to". Infinitives are often used after certain verbs, adjectives, and nouns.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I want to swim. (To swim is the infinitive.){"\n"}
          ✅ Example: She decided to go home. (To go is the infinitive.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Common Verbs Followed by Gerunds</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Some verbs are followed by gerunds. Here are a few common examples:
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I enjoy reading.{"\n"}
          ✅ Example: He avoids eating junk food.{"\n"}
          ✅ Example: They suggested going to the cinema.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Common Verbs Followed by Infinitives</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Some verbs are followed by infinitives. Here are a few common examples:
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I want to learn Spanish.{"\n"}
          ✅ Example: She promised to call me.{"\n"}
          ✅ Example: We hope to see you soon.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>⚠️ Verbs That Can Be Followed by Either Gerunds or Infinitives</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Some verbs can be followed by either a gerund or an infinitive, but the meaning may change. For example:
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I stopped smoking. (I quit smoking.) – Gerund{"\n"}
          ✅ Example: I stopped to smoke. (I paused to smoke.) – Infinitive{"\n"}
          ✅ Example: I like reading. (I enjoy reading.) – Gerund{"\n"}
          ✅ Example: I like to read before bed. (It is a habit of mine.) – Infinitive
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 General Rules for Using Gerunds and Infinitives</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        1. **Use a gerund** when the verb is used as the subject of the sentence, or after prepositions.{"\n"}
        2. **Use an infinitive** to express purpose or to talk about actions that happen in the future.{"\n"}
        3. Certain verbs are followed by gerunds (e.g., enjoy, avoid, suggest) and others are followed by infinitives (e.g., want, promise, decide).{"\n"}
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. She enjoys _______ (to read / reading) books in her free time.{"\n"}
        2. I decided _______ (to go / going) to the gym after work.{"\n"}
        3. We are thinking about _______ (to visit / visiting) Paris next summer.{"\n"}
        4. I hope _______ (to see / seeing) you soon.{"\n"}
      </Text>
      <Text style={[styles.answer,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. Reading{"\n"}
        2. To go{"\n"}
        3. Visiting{"\n"}
        4. To see
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
