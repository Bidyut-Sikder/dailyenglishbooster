import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function RelativeClauses() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Relative Clauses</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Relative clauses are used to provide additional information about a noun without starting a new sentence. These clauses are introduced by relative pronouns like "who," "whom," "which," "that," and "whose."
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 What is a Relative Clause?</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A relative clause is a part of a sentence that describes or gives more information about a noun (person, place, thing, etc.). It starts with a relative pronoun (who, whom, which, that, whose) and functions as an adjective.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The girl who is wearing a red dress is my sister. (Here, "who is wearing a red dress" is the relative clause describing "the girl."){"\n"}
          ✅ Example: I have a book that explains everything clearly. ("That explains everything clearly" is the relative clause describing "a book.")
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Relative Clauses</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          There are two main types of relative clauses:
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          1. **Defining Relative Clauses**: These clauses provide essential information to identify the noun. Without them, the meaning of the sentence would be unclear.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          2. **Non-Defining Relative Clauses**: These clauses provide additional information but are not necessary to identify the noun. They are separated by commas.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Defining Relative Clauses</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A defining relative clause gives essential information about the noun. Without it, the meaning of the sentence would change or be unclear.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The teacher who teaches math is very kind. (We need to know which teacher the speaker is referring to, so the relative clause is necessary.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Non-Defining Relative Clauses</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          A non-defining relative clause gives extra information, but the sentence would still make sense without it. Non-defining relative clauses are separated by commas.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: My brother, who is a doctor, lives in London. (We already know which brother, so the clause is additional information.)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Relative Pronouns</Text>
      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Relative pronouns are used to introduce relative clauses. Here are some common relative pronouns:
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Who**: Refers to people (subject of the relative clause).{"\n"}
          Example: The woman who lives next door is my friend.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Whom**: Refers to people (object of the relative clause), more formal than "who."{"\n"}
          Example: The man whom I met yesterday is my colleague.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Which**: Refers to animals and things.{"\n"}
          Example: The car which is parked outside is mine.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **That**: Can refer to people, animals, and things. It's used in both defining and non-defining relative clauses.{"\n"}
          Example: The book that I’m reading is interesting.
        </Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          - **Whose**: Shows possession.{"\n"}
          Example: The student whose project won the prize is very happy.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 General Rules</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        1. Use defining relative clauses to give essential information.{"\n"}
        2. Use non-defining relative clauses to add extra information.{"\n"}
        3. Use commas to separate non-defining relative clauses from the rest of the sentence.{"\n"}
        4. Avoid using "that" in non-defining relative clauses; use "which" instead.{"\n"}
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. The movie _______ we watched last night was fantastic. (who / which){'\n'}
        2. The artist _______ painted this picture is very famous. (who / whom){'\n'}
        3. My friend _______ lives in Paris is coming to visit me. (who / whose){'\n'}
        4. The book _______ I borrowed from the library is very interesting. (that / whom)
      </Text>
      <Text style={[styles.answer,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. Which{"\n"}
        2. Who{"\n"}
        3. Who{"\n"}
        4. That
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
