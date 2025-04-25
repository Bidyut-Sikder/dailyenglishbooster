import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Nouns() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Nouns</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Nouns are words that name people, places, things, animals, or ideas. They are one of the most important parts of speech in English grammar.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 What Nouns Do</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Nouns can serve as the subject or object in a sentence, and they help us identify everything around us.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸Types of Nouns with Examples :</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Common Nouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>General names of people, places, or things.</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          👤 Person: teacher, doctor{"\n"}
          🏙️ Place: school, city{"\n"}
          🧸 Thing: toy, chair
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: The <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>doctor</Text> works at a <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>hospital</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Proper Nouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Names of specific people, places, or organizations.</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🧑‍🎓 Person: Alex, Maria{"\n"}
          🌆 Place: London, Dhaka{"\n"}
          🏢 Organization: Google, Netflix
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>Maria</Text> lives in <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>London</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Abstract Nouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Refer to feelings, qualities, or ideas.</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ❤️ Emotion: love, anger{"\n"}
          💡 Idea: freedom, success{"\n"}
          ✨ Quality: beauty, honesty
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>Honesty</Text> is the best policy.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Concrete Nouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Things that can be seen, touched, or sensed.</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🍎 Food: apple, bread{"\n"}
          📱 Object: phone, bottle{"\n"}
          🐶 Animal: dog, elephant
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I have an <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>apple</Text> in my bag.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Countable Nouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Can be counted with numbers.</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🧮 One book, two chairs, three pens
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She has <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>two cats</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>6. Uncountable Nouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Cannot be counted individually.</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🌊 Liquids: water, milk{"\n"}
          🍚 Substances: rice, sugar{"\n"}
          📚 Abstracts: knowledge, information
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: We need more <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>information</Text>.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>7. Collective Nouns</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>Refer to a group of people or things.</Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          👨‍👩‍👧‍👦 Group: team, family, class, audience
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: Our <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>team</Text> won the match.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Quick Quiz</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#1f2937' }]}>
        Which type of noun is used in this sentence? {"\n"}
        "<Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>Happiness</Text> is something money can't buy."
      </Text>
      <Text style={[styles.answer, { color: theme === 'dark' ? '#16a34a' : '#065f46' }]}>💡 Answer: Abstract Noun</Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Tips</Text>
      <Text style={[styles.tip,{marginBottom:43}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        • Proper nouns always begin with capital letters.{"\n"}
        • Most uncountable nouns do not have a plural form.{"\n"}
        • Collective nouns can be both singular and plural depending on context.
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
  examples: {
    fontSize: 16,
    marginBottom: 10,
  },
  sentence: {
    fontSize: 16,
    marginBottom: 10,
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
  text:{
    fontSize: 16,
  lineHeight: 16, // Makes the text more readable
  color: '#334155', // This can change based on theme (dark or light)
  marginBottom: 5,
  fontWeight: 'normal', // You can change this to 'bold' if you want some texts to stand out
 
}
});
