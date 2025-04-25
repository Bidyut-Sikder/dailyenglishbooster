import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/theme";

export default function Articles() {
  const { bg, bgCard, theme } = useTheme(); // Using theme from context

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]}>
      <Text
        style={[
          styles.heading,
          { color: theme === "dark" ? "#fff" : "#1e3a8a" },
        ]}
      >
        Articles
      </Text>
      <Text
        style={[styles.intro, { color: theme === "dark" ? "#fff" : "#334155" }]}
      >
        Articles are words that define a noun as specific or unspecific. There
        are two types of articles in English: definite and indefinite.
      </Text>

      <Text
        style={[
          styles.subheading,
          { color: theme === "dark" ? "#fff" : "#0f172a" },
        ]}
      >
        📚 What Articles Do
      </Text>
      <Text
        style={[styles.text, { color: theme === "dark" ? "#fff" : "#334155" }]}
      >
        Articles help specify whether a noun is known or unknown to the listener
        or reader. The indefinite article refers to non-specific nouns, while
        the definite article refers to a specific noun.
      </Text>

      <Text
        style={[
          styles.subheading,
          { color: theme === "dark" ? "#fff" : "#0f172a" },
        ]}
      >
        🔸 Types of Articles with Examples:
      </Text>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text
          style={[
            styles.typeTitle,
            { color: theme === "dark" ? "#fff" : "#0369a1" },
          ]}
        >
          1. Definite Article ("The")
        </Text>
        <Text
          style={[
            styles.text,
            { color: theme === "dark" ? "#fff" : "#334155" },
          ]}
        >
          Used to refer to specific or known nouns.
        </Text>
        <Text
          style={[
            styles.examples,
            { color: theme === "dark" ? "#fff" : "#475569" },
          ]}
        >
          🏠 Example: the house, the car, the book
        </Text>
        <Text
          style={[
            styles.sentence,
            { color: theme === "dark" ? "#fff" : "#1e293b" },
          ]}
        >
          ✅ Example: I saw{" "}
          <Text
            style={[
              styles.bold,
              { color: theme === "dark" ? "#fff" : "#0f172a" },
            ]}
          >
            the teacher
          </Text>{" "}
          in the classroom.
        </Text>
      </View>

      <View style={[styles.block, { backgroundColor: bgCard }]}>
        <Text
          style={[
            styles.typeTitle,
            { color: theme === "dark" ? "#fff" : "#0369a1" },
          ]}
        >
          2. Indefinite Articles ("A" and "An")
        </Text>
        <Text
          style={[
            styles.text,
            { color: theme === "dark" ? "#fff" : "#334155" },
          ]}
        >
          Used to refer to non-specific or general nouns.
        </Text>
        <Text
          style={[
            styles.examples,
            { color: theme === "dark" ? "#fff" : "#475569" },
          ]}
        >
          🐱 "A" before consonant sounds: a cat, a book{"\n"}
          🍎 "An" before vowel sounds: an apple, an hour
        </Text>
        <Text
          style={[
            styles.sentence,
            { color: theme === "dark" ? "#fff" : "#1e293b" },
          ]}
        >
          ✅ Example: I bought{" "}
          <Text
            style={[
              styles.bold,
              { color: theme === "dark" ? "#fff" : "#0f172a" },
            ]}
          >
            a pen
          </Text>{" "}
          yesterday.
        </Text>
      </View>

      <Text
        style={[
          styles.subheading,
          { color: theme === "dark" ? "#fff" : "#0f172a" },
        ]}
      >
        📝 Quick Quiz
      </Text>
      <Text
        style={[styles.quiz, { color: theme === "dark" ? "#fff" : "#1f2937" }]}
      >
        Which article is used in this sentence? {"\n"}"
        <Text
          style={[
            styles.bold,
            { color: theme === "dark" ? "#fff" : "#0f172a" },
          ]}
        >
          The
        </Text>{" "}
        sun is shining."
      </Text>
      <Text
        style={[
          styles.answer,
          { color: theme === "dark" ? "#16a34a" : "#065f46" },
        ]}
      >
        💡 Answer: Definite Article
      </Text>

      <Text
        style={[
          styles.subheading,
          { color: theme === "dark" ? "#fff" : "#0f172a" },
        ]}
      >
        💡 Tips
      </Text>
      <Text
        style={[
          styles.tip,
          { marginBottom: 43 },
          { color: theme === "dark" ? "#fff" : "#065f46" },
        ]}
      >
        • "The" is used when we are talking about something specific or known to
        both the speaker and listener.{"\n"}• "A" and "An" are used when talking
        about something for the first time or something non-specific.
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
    fontWeight: "bold",
    marginBottom: 15,
  },
  intro: {
    fontSize: 18,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 22,
    fontWeight: "600",
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
    fontWeight: "700",
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
    fontWeight: "bold",
  },
  quiz: {
    fontSize: 18,
    fontStyle: "italic",
    marginVertical: 15,
  },
  answer: {
    fontSize: 18,
    fontWeight: "600",
  },
  tip: {
    fontSize: 16,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 16, // Makes the text more readable
    marginBottom: 5,
    fontWeight: "normal", // You can change this to 'bold' if you want some texts to stand out
  },
});
