import React, { useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Platform,
  Pressable,
  FlexAlignType,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import * as Speech from "expo-speech";

export default function Topic({ data,icon }: any) {
  const navigation = useNavigation();
  const { category, topic } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };
  const { theme } = useTheme();
  const router = useRouter();
  const isDark = theme === "dark";

  const speak = (text: string) => {
    Speech.speak(text, {
      language: "en",
    });
  };
  useEffect(() => {
    if (topic) {
      navigation.setOptions({ title: decodeURIComponent(topic as string) });
    }
  }, [topic]);
  const themedStyles = {
    container: {
      padding: 16,
    },
    card: {
      flexDirection: "row" as const,
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
    topic: {
      fontSize: 13,
      fontWeight: "400" as TextStyle["fontWeight"],
      marginBottom: 4,
      color: isDark ? "#ccc" : "#666",
    },
  };

  const Item = ({
    title,
    topic,
    data,
    icon
  }: {
    data: any;
    topic: string;
    title: string;
    icon: keyof typeof Ionicons.glyphMap
  }) => (
    <Pressable
      onPress={() => {
        speak(title);
        // router.push(`/${category}/${topic}/${encodeURIComponent(title)}`);
        router.push({
          pathname: `/[category]/[topic]/[title]`,
          params: {
            category,
            topic,
            title,
            id: data.find((item: any) => item.title === title)?.id,
          },
        });
      }}
    >
      <View style={themedStyles.card}>
        <Ionicons
          name={icon as keyof typeof Ionicons.glyphMap}
          size={32}
          color="#4e6cef"
          style={themedStyles.icon}
        />
        <View style={themedStyles.textBox}>
          <Text style={themedStyles.title}>{title}</Text>
          <Text style={themedStyles.topic}>{topic}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? "#191919" : "#f2f2f2" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item icon={icon} data={data} title={item.title} topic={item.topic} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={themedStyles.container}
      />
    </View>
  );
}

