import React from "react";
import {
  FlatList,
  View,
  Text,
  Platform,
  Button,
  FlexAlignType,
  TextStyle,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { Link, useRouter } from "expo-router";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
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
    <Pressable
      key={title}
      onPress={() => {
        // router.push(`/${title}`)
        router.push({
          pathname: `/[category]`,
          params: { category: title },
        });
      }}
    >
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
    </Pressable>
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
    icon: "text-outline",
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
    title: "More Sentences",
    description: "Extra daily-use sentences to boost your English fluency.",
    icon: "documents-outline",
  },
  {
    id: "5",
    title: "Idioms",
    description: "Common idioms used in English conversation.",
    icon: "bulb-outline",
  },
  {
    id: "6",
    title: "Phrases",
    description: "Common English phrases for everyday conversations.",
    icon: "chatbox-outline",
  },
  {
    id: "7",
    title: "Grammar",
    description: "Essential grammar rules and usage.",
    icon: "book-outline",
  },
  {
    id: "8",
    title: "Grammar Test",
    description: "Test your English daily with quizzes.",
    icon: "help-outline",
  },
  {
    id: "9",
    title: "Synonyms & Antonyms",
    description: "List of commonly used synonyms and antonyms.",
    icon: "swap-horizontal-outline",
  },

  {
    id: "10",
    title: "Proverbs",
    description: "Popular English proverbs with meanings.",
    icon: "leaf-outline",
  },
  {
    id: "11",
    title: "Speaking Practice",
    description: "Test your English daily with quizzes.",
    icon: "help-outline",
  },
  {
    id: "12",
    title: "Word Games",
    description: "Fun games to build vocabulary.",
    icon: "game-controller-outline",
  },
  {
    id: "13",
    title: "Daily Quizzes",
    description: "Test your English daily with quizzes.",
    icon: "help-outline",
  },
];



