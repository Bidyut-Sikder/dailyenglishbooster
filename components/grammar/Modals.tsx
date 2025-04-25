import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Modals() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Modals</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Modals are auxiliary verbs that express necessity, possibility, permission, or ability. They are used to modify the main verb and provide additional information about the action.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📝 Types of Modals</Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Can / Could</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Can" expresses ability or permission, while "could" is used for past ability, polite requests, or possibility.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I can swim. (Ability){"\n"}
          ✅ Example: Could you help me? (Polite request)
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Will / Would</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Will" is used to express future actions, offers, or decisions, while "would" is used for polite requests, conditional actions, or past habitual actions.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I will call you tomorrow. (Future){"\n"}
          ✅ Example: Would you like some coffee? (Polite request)
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Shall / Should</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Shall" is often used for formal suggestions or offers, and "should" is used to give advice, recommendations, or express obligation.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: Shall we go for a walk? (Suggestion){"\n"}
          ✅ Example: You should eat more vegetables. (Advice)
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. May / Might</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "May" is used to express permission or possibility, and "might" is used for a lower possibility or suggestion.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: May I leave early today? (Permission){"\n"}
          ✅ Example: It might rain tomorrow. (Possibility)
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>5. Must / Mustn't</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Must" is used to express necessity or strong recommendation, and "mustn't" is used to express prohibition or something that is not allowed.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: You must wear a helmet while riding a bike. (Necessity){"\n"}
          ✅ Example: You mustn't smoke here. (Prohibition)
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>6. Ought to</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          "Ought to" is used to express advice, obligation, or expectation, similar to "should."
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: You ought to apologize for your behavior. (Advice){"\n"}
          ✅ Example: We ought to respect the rules. (Obligation)
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💡 Modal Usage Guide</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Here is a quick guide to help you understand the usage of modals:
      </Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        • **Can** – Ability or permission (e.g., I can speak Spanish.){"\n"}
        • **Could** – Polite request or past ability (e.g., Could you please help me?){"\n"}
        • **Will** – Future actions or decisions (e.g., I will visit you tomorrow.){"\n"}
        • **Would** – Polite requests or hypothetical situations (e.g., Would you like tea?){"\n"}
        • **Shall** – Formal suggestions or offers (e.g., Shall we go to the park?){"\n"}
        • **Should** – Advice or obligation (e.g., You should try harder.){"\n"}
        • **May** – Permission or possibility (e.g., May I leave now?){"\n"}
        • **Might** – Lower possibility (e.g., She might come to the party.){"\n"}
        • **Must** – Strong necessity or recommendation (e.g., You must stop smoking.){"\n"}
        • **Mustn't** – Prohibition (e.g., You mustn't touch that.){"\n"}
        • **Ought to** – Advice or obligation (e.g., You ought to finish your homework.)
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔑 Key Points</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        • Modals do not change form for different subjects (e.g., "can I" and "can we").{"\n"}
        • They are followed by the base form of the verb (e.g., "I can swim" not "I can swims").{"\n"}
        • Some modals (like "must") can express a strong obligation, while others (like "may") express permission or possibility.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>💬 Practice</Text>
      <Text style={[styles.quiz, { color: theme === 'dark' ? '#fff' : '#4b5563' }]}>
        1. I _______ (can / could) speak three languages.{"\n"}
        2. You _______ (must / should) take an umbrella; it's raining.{"\n"}
        3. _______ (Will / Would) you like to join us for dinner?{"\n"}
        4. He _______ (may / might) come to the party later.{"\n"}
      </Text>
      <Text style={[styles.answer,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#065f46' }]}>
        1. Can{"\n"}
        2. Should{"\n"}
        3. Would{"\n"}
        4. Might
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
