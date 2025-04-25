
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  FlexAlignType,
  TextStyle,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/theme";
import { useLocalSearchParams, useRouter } from "expo-router";


export default function PhrasesCategories({phrasesCategories}:any) {
 

  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { category } = useLocalSearchParams() as {
    category: string;

  };
  const themedStyles = {
    card: {
      flexDirection: "row" as const,
      justifyContent: "space-between" as const,
      alignItems: "center" as FlexAlignType,
      padding: 22,
      marginHorizontal: 16,
      marginBottom: 12,
      backgroundColor: isDark ? "#313639" : "#fff",
      borderRadius: 8,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    text: {
      color: isDark ? "#fff" : "#333",
      fontSize: 18,
      fontWeight: 500 as TextStyle["fontWeight"],
    },
    container: {
      flex: 1,
      backgroundColor: isDark ? "#191919" : "#f2f2f2",
      paddingTop: 16,
    },
  };

  return (
    <View style={themedStyles.container}>
      <FlatList
        data={phrasesCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={themedStyles.card}>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: `/[category]/[topic]`,
                  params: { category, topic: item.title },
                });
              }}
            >
              <Text style={themedStyles.text}>{item.title}</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                console.log(item.title)
                router.push({
                  pathname: `/[category]/[topic]`,
                  params: { 
                    category, topic: 
                    item.title === "Greetings" ? '❤️ Phrases Greetings' :
                     item.title === 'Introductions' ? '❤️ Phrases Introductions' :
                     item.title === 'Polite Expressions' ? '❤️ Phrases PoliteExpressions' :
                     item.title === 'Ordering Food' ? '❤️ Phrases OrderingFood' :
                     item.title === 'Asking for Directions' ? '❤️ Phrases Directions' :
                     item.title === 'Shopping' ? '❤️ Phrases Shopping' :
                     item.title === 'Making Requests' ? '❤️ Phrases Requests' :
                     item.title === 'Expressing Opinions' ? '❤️ Phrases Opinions' :
                     item.title === 'Talking About Weather' ? '❤️ Phrases Weather' :
                     item.title === 'At the Airport' ? '❤️ Phrases Airport' :
                     item.title === 'At the Hotel' ? '❤️ Phrases Hotel' :
                     item.title === 'Transportation' ? '❤️ Phrases Transportation' :
                     item.title === 'Emergency Situations' ? '❤️ Phrases Situations' :
                     item.title === 'Hobbies and Interests' ? '❤️ Phrases Interests' :
                     item.title === 'Traveling' ? '❤️ Phrases Traveling' :
                     item.title === 'Time and Dates' ? '❤️ Phrases Dates' :
                     item.title === 'Health and Wellness' ? '❤️ Phrases Wellness' :
                     item.title === 'Work and Career' ? '❤️ Phrases Career' :
                     item.title === 'Socializing' ? '❤️ Phrases Socializing' :
                     item.title === 'Celebrations and Holidays' ? '❤️ Phrases Holidays' :""
                    
                    
                    
                    
                    }
                });
              }}
            >
             <Ionicons name={'heart-outline'} size={24} color="red" />
            </Pressable>
            
          </View>
        )}
      />
    </View>
  );
}



















































