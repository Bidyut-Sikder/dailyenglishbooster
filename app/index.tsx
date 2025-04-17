import React from "react";
import {
  FlatList,
  View,
  Text,
  Platform,
  Button,
  FlexAlignType,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  const themedStyles = {
    container: {
      padding: 16,
    },
    card: {
      flexDirection: "row" as "row",
      backgroundColor: isDark ? "#313639" : "#fff",
      borderRadius: 7,
      padding: 16,
      marginBottom: 16,
      alignItems: "center" as FlexAlignType,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 16,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    icon: {
      marginRight: 16,
    },
    textBox: {
      flex: 1,
    },
    title: {
      fontSize: 17,
      fontWeight: "600" as TextStyle["fontWeight"],
      marginBottom: 4,
      color: isDark ? "#fff" : "#333",
    },
    description: {
      fontSize: 16,
      color: isDark ? "#ccc" : "#777",
    },
  };

  const Item = ({ title, description, icon }: (typeof data)[0]) => (
    <View style={themedStyles.card}>
      <Ionicons
        name={icon as any}
        size={32}
        color="#4e6cef"
        style={themedStyles.icon}
      />
      <View style={themedStyles.textBox}>
        <Text style={themedStyles.title}>{title}</Text>
        <Text style={themedStyles.description}>{description}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? "#191919" : "#f2f2f2" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={themedStyles.container}
      />
      {/* <Button title="Toggle Theme" onPress={toggleTheme} /> */}
    </View>
  );
}

const data = [
  {
    id: "1",
    title: "Vocabulary",
    description: "Daily used and competitive exam English Vocabulary.",
    icon: "code-slash-outline",
  },
  {
    id: "2",
    title: "Conversation",
    description: "900+ conversations in 27 daily topics.",
    icon: "chatbubble-ellipses-outline",
  },

  {
    id: "3",
    title: "Everyday Sentences",
    description: "2400+ sentences for daily use.",
    icon: "repeat-outline",
  },
  {
    id: "4",
    title: "Idioms & Phrases",
    description: "Common idioms used in English conversation.",
    icon: "bulb-outline",
  },
  {
    id: "5",
    title: "Grammar Tips",
    description: "Essential grammar rules and usage.",
    icon: "book-outline",
  },
  {
    id: "6",
    title: "Pronunciation",
    description: "Improve your English pronunciation.",
    icon: "mic-outline",
  },
  {
    id: "7",
    title: "Tenses Practice",
    description: "Learn all 12 tenses with examples.",
    icon: "time-outline",
  },
  {
    id: "8",
    title: "Interview Q&A",
    description: "Frequently asked interview questions with answers.",
    icon: "help-circle-outline",
  },
  {
    id: "9",
    title: "Email Writing",
    description: "Formal and informal email writing examples.",
    icon: "mail-outline",
  },
  {
    id: "10",
    title: "Story Telling",
    description: "Short stories to improve English comprehension.",
    icon: "bookmarks-outline",
  },
  {
    id: "11",
    title: "Word Games",
    description: "Fun games to build vocabulary.",
    icon: "game-controller-outline",
  },
  {
    id: "12",
    title: "Synonyms",
    description: "List of commonly used synonyms.",
    icon: "swap-horizontal-outline",
  },
  {
    id: "13",
    title: "Antonyms",
    description: "Opposite words with examples.",
    icon: "swap-vertical-outline",
  },
  {
    id: "14",
    title: "Proverbs",
    description: "Popular English proverbs with meanings.",
    icon: "leaf-outline",
  },
  {
    id: "15",
    title: "Reading Practice",
    description: "Practice passages to improve reading skills.",
    icon: "document-text-outline",
  },
  {
    id: "16",
    title: "Writing Skills",
    description: "Improve your English writing skills.",
    icon: "pencil-outline",
  },
  {
    id: "17",
    title: "Listening Skills",
    description: "Practice listening with audio clips.",
    icon: "ear-outline",
  },
  {
    id: "18",
    title: "Spoken English",
    description: "Learn to speak English fluently.",
    icon: "chatbubbles-outline",
  },
  {
    id: "19",
    title: "Translation Practice",
    description: "Translate between English and your native language.",
    icon: "language-outline",
  },
  {
    id: "20",
    title: "Daily Quizzes",
    description: "Test your English daily with quizzes.",
    icon: "help-outline",
  },
];
