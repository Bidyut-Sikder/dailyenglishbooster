import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function WordOrder() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Word Order</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Word order refers to the arrangement of words in a sentence. In English, word order is important because it can affect the meaning and clarity of a sentence.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Basic Word Order in English</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          The basic word order in English follows the **Subject-Verb-Object (SVO)** pattern. This means that in a simple sentence, the subject comes first, followed by the verb, and then the object.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "She (subject) loves (verb) books (object)."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Word Order in Questions</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          In English, questions usually follow a different word order compared to statements. The auxiliary verb or modal verb comes before the subject.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "Do you like pizza?" (Here, the auxiliary verb "Do" comes before the subject "you.")
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Word Order in Negative Sentences</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Negative sentences are formed by adding "not" after the auxiliary or modal verb. In sentences without an auxiliary verb, "do/does" or "did" is used to create the negative.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "She does not (doesn't) like pizza."
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Word Order in Adjective Phrases</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          In English, adjectives usually come before the noun they describe. However, in some cases, adjectives can appear after a linking verb (e.g., "be," "seem," "become").
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "She is a talented singer." (Adjective "talented" comes before the noun "singer.")
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: "The singer is talented." (Here, the adjective "talented" follows the linking verb "is.")
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Word Order in Adverbial Phrases</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Adverbs are flexible and can appear in different positions in a sentence, depending on the emphasis and the type of adverb. The most common positions for adverbs are at the beginning, middle, or end of a sentence.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example 1: "She quickly finished her homework." (Adverb "quickly" is at the beginning.)
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example 2: "She finished her homework quickly." (Adverb "quickly" is at the end.)
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example 3: "She has never been to France." (Adverb "never" is in the middle.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        Choose the correct word order:{"\n"}
        "Has (she / pizza / eaten)?" or "Has eaten she pizza?"
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        💡 Answer: "Has she eaten pizza?" is the correct word order for a question.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips for Word Order</Text>
      <Text style={[styles.tip,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • In English, the typical word order is **Subject + Verb + Object**.{"\n"}
        • For questions, the auxiliary verb usually comes before the subject.{"\n"}
        • Adjectives typically precede nouns, while adverbs can vary in position within a sentence.
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
