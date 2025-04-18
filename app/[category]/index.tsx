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
import Education from "@/components/conversation/Education";

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

  const Item = ({ title, icon }: (typeof data)[0]) => (
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
          data={data}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={themedStyles.container}
        />
        
      </View>
    );
 
  }

  return (
    <>
      <Text> not conversation</Text>
    </>
  );
}
const data = [
  { id: "1", title: "Education", icon: "school-outline" },
  { id: "2", title: "Daily Life", icon: "calendar-outline" },
  { id: "3", title: "House and Home", icon: "home-outline" },
  { id: "4", title: "Family", icon: "people-outline" },
  { id: "5", title: "Shopping", icon: "cart-outline" },
  { id: "6", title: "Health", icon: "medkit-outline" },
  { id: "7", title: "Food and Restaurant", icon: "restaurant-outline" },
  {
    id: "8",
    title: "Travel-Transport-Vacation-Direction",
    icon: "bus-outline",
  },
  {
    id: "9",
    title: "Environment and Nature",
    icon: "leaf-outline",
  },
  { id: "10", title: "Works-jobs and office", icon: "briefcase-outline" },
  { id: "11", title: "Entertainment-media", icon: "tv-outline" },
  { id: "12", title: "Special Events", icon: "sparkles-outline" },
  { id: "13", title: "Money Banks", icon: "cash-outline" },
  { id: "14", title: "Communication time", icon: "chatbubble-outline" },
  { id: "15", title: "Sports and fitness", icon: "fitness-outline" },
  { id: "16", title: "Fashion and cloths", icon: "shirt-outline" },
  { id: "17", title: "Friendship- memory-emotions", icon: "heart-outline" },
];
