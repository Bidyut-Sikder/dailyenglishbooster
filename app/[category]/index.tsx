//const { category, topic } = useLocalSearchParams() as { category: string; topic: string };
//router.push(`/${category}/${encodeURIComponent(item)}`)

import React, { useEffect } from "react";
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
import {
  Link,
  useNavigation,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import { conversationCategories } from "@/assets/data/category/categories";
import VocabCategories from "@/components/vocabulary/VocabCategories";
import SentenceCategories from "@/components/sentences/SentenceCategories";
import { moreSentenceCategories, sentenceCategories } from "@/assets/data/sentences/categories";
import { idiomsCategories } from "@/assets/data/idioms/categories";
import IdiomsCategories from "@/components/idioms/IdiomsCategories";
import { phrasesCategories } from "@/assets/data/phrases/categories";
import PhrasesCategories from "@/components/phrases/PhrasesCategories";
import GrammarCategories from "@/components/grammar/GrammarCategories";
import { grammarCategories } from "@/assets/data/grammar/grammarCategories";

export default function App() {
  const { category } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };
  const navigation = useNavigation();
  console.log(category);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const isDark = theme === "dark";
  useEffect(() => {
    if (category) {
      navigation.setOptions({ title: decodeURIComponent(category as string) });
    }
  }, [category]);
  
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

  const Item: React.FC<{ title: string; icon: string }> = ({ title, icon }) => (
    <Pressable
      key={title}
      onPress={() => {
        // router.push(`/${category}/${encodeURIComponent(title)}`);
        router.push({
          pathname: `/[category]/[topic]`,
          params: { category, topic: title },
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
          {/* <Text style={themedStyles.description}>{description}</Text> */}
        </View>
      </View>
    </Pressable>
  );

  if (category === "Conversation") {
    return (
      <View
        style={{ flex: 1, backgroundColor: isDark ? "#191919" : "#f2f2f2" }}
      >
        <FlatList
          data={conversationCategories}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={themedStyles.container}
        />
      </View>
    );
  }

  if (category === "Vocabulary") {
    return <VocabCategories />;
  }

  if (category === "Everyday Sentences") {
    return <SentenceCategories sentenceCategories={sentenceCategories} />;
  }

  if(category==='More Sentences'){
    return <SentenceCategories sentenceCategories={moreSentenceCategories} />

  }

  if(category==='Idioms'){
    return <IdiomsCategories idiomsCategories={idiomsCategories} />

  }

  if(category==='Phrases'){
    return <PhrasesCategories phrasesCategories={phrasesCategories} />

  }
  if(category==='Grammar'){
    return <GrammarCategories grammarCategories={grammarCategories} />

  }

  return (
    <>
      <Text> not conversation</Text>
    </>
  );
}
