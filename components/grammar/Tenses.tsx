import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme';

export default function Tenses() {
  const { bg, bgCard, theme } = useTheme();  // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.heading, { color: theme === 'dark' ? '#fff' : '#1e3a8a' }]}>Tenses</Text>
      <Text style={[styles.intro, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Tenses in English indicate the time of an action or event. They are classified into three main types: past, present, and future. Each of these has four forms, giving us 12 tenses in total.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>📚 Types of Tenses</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        Tenses are essential to understanding when actions occur. There are 12 tenses in total, split into three main categories: Present, Past, and Future.
      </Text>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Present Tense</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        The present tense is used to describe actions that are currently happening, general truths, or habitual actions.
      </Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Simple Present Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that happen regularly or facts that are always true.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🏠 Example: I live in New York.{"\n"}
          🔄 Habitual Action: She goes to the gym every day.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: He <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>works</Text> in a bank.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Present Continuous Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that are happening right now or temporary actions.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🔄 Example: I am eating lunch right now.{"\n"}
          🌍 Temporary Action: She is staying with us for a week.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: They <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>are studying</Text> for their exams.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Present Perfect Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that happened at an unspecified time before now or actions that started in the past and continue into the present.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🕒 Unspecified Time: I have seen that movie before.{"\n"}
          🌟 Ongoing Action: She has lived here for five years.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: We <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>have finished</Text> the project.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Present Perfect Continuous Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that started in the past and are still continuing, with a focus on the duration of the action.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ⏳ Duration: I have been studying for two hours.{"\n"}
          🌟 Ongoing Action: She has been working here since 2019.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: They <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>have been playing</Text> football all afternoon.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Past Tense</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        The past tense is used for actions that have already happened at a specific point in the past.
      </Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Simple Past Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that were completed in the past.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🏠 Example: I visited London last summer.{"\n"}
          🔄 Completed Action: She finished her homework yesterday.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: They <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>watched</Text> the movie last night.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Past Continuous Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that were happening at a specific moment in the past or actions that were interrupted.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🔄 Interrupted Action: I was reading when she called me.{"\n"}
          🌍 Action at a Specific Time: They were working at 6 PM last night.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: He <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>was cooking</Text> when I arrived.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Past Perfect Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used to show that one action was completed before another action in the past.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ⏰ Action Before Another: I had finished my homework before I went out.{"\n"}
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: They <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>had left</Text> by the time I arrived.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Past Perfect Continuous Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used to show that an action was ongoing in the past before another action.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ⏳ Ongoing Action Before Another: She had been working for hours before she took a break.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: I <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>had been studying</Text> for two hours before the test.
        </Text>
      </View>

      <Text style={[styles.subheading, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>🔸 Future Tense</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
        The future tense describes actions that will happen after the present time.
      </Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>1. Simple Future Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used to describe actions that will happen in the future.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ⏳ Future Action: I will go to the park tomorrow.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: They <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>will travel</Text> next month.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>2. Future Continuous Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that will be happening at a specific point in the future.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          🔄 Action in Progress: I will be studying at 8 PM.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: She <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>will be working</Text> all day tomorrow.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>3. Future Perfect Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used to describe actions that will be completed before another future action or time.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ✅ Example: I will have finished my homework by 8 PM.
        </Text>
        <Text style={[styles.sentence, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: By next year, they <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>will have graduated</Text> from college.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text style={[styles.typeTitle, { color: theme === 'dark' ? '#fff' : '#0369a1' }]}>4. Future Perfect Continuous Tense</Text>
        <Text style={[styles.text, { color: theme === 'dark' ? '#fff' : '#334155' }]}>
          Used for actions that will be ongoing in the future, with a focus on the duration.
        </Text>
        <Text style={[styles.examples, { color: theme === 'dark' ? '#fff' : '#475569' }]}>
          ⏳ Duration in Future: By next year, I will have been living here for five years.
        </Text>
        <Text style={[styles.sentence,{marginBottom:42}, { color: theme === 'dark' ? '#fff' : '#1e293b' }]}>
          ✅ Example: They <Text style={[styles.bold, { color: theme === 'dark' ? '#fff' : '#0f172a' }]}>will have been working</Text> on the project for two hours by the time I arrive.
        </Text>
      </View>
      
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
  text: {
    fontSize: 16,
    lineHeight: 16, // Makes the text more readable
    marginBottom: 5,
    fontWeight: 'normal', // You can change this to 'bold' if you want some texts to stand out
  },
});
