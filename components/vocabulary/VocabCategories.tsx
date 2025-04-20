
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
import AsyncStorage from '@react-native-async-storage/async-storage';
const data: {
  id: number;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    id: 1,
    title: "1900 Daily/GRE Words",
    icon: "heart-outline",
  },
  {
    id: 2,
    title: "1000 Common Words",
    icon: "heart-outline",
  },
  {
    id: 3,
    title: "5000 IELTS Words",
    icon: "heart-outline",
  },
];

export default function WordList() {

  const [lovedIds, setLovedIds] = useState<number[]>([]);


  useEffect(() => {

    const loadLovedWords = async () => {
      const json = await AsyncStorage.getItem('lovedGreWords');
      if (json) setLovedIds(JSON.parse(json));
    };
    loadLovedWords();
  }, []);







  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { category } = useLocalSearchParams() as {
    category: string;
    topic: string;
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
        data={data}
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
                router.push({
                  pathname: `/[category]/[topic]`,
                  params: { category, topic: item.title === "1900 Daily/GRE Words" ? 'liked-gre-words' : item.title === '1000 Common Words' ? '1000-common-words' : item.title==='5000 IELTS Words'?'5000-ielts-words':"" }
                });
              }}
            >
             <Ionicons name={item.icon} size={24} color="red" />
             {/* <Ionicons name={item.icon} size={24} color="red" /> */}
            </Pressable>
            
          </View>
        )}
      />
    </View>
  );
}

//1900 Daily/GRE Words" && 'liked-gre-words' || '1000 Common Words' && '1000-common-words






////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Platform,
//   FlexAlignType,
//   TextStyle,
//   Pressable,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from "@/hooks/theme";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const data: {
//   id: number;
//   title: string;
//   icon: keyof typeof Ionicons.glyphMap;
// }[] = [
//   {
//     id: 1,
//     title: "1900 Daily/GRE Words",
//     icon: "heart-outline",
//   },
//   {
//     id: 2,
//     title: "1000 Common Words",
//     icon: "heart-outline",
//   },
//   {
//     id: 3,
//     title: "5000 IELTS Words",
//     icon: "heart-outline",
//   },
// ];

// export default function WordList() {

//   const [lovedIds, setLovedIds] = useState<number[]>([]);


//   useEffect(() => {

//     const loadLovedWords = async () => {
//       const json = await AsyncStorage.getItem('lovedWords');
//       if (json) setLovedIds(JSON.parse(json));
//     };
//     loadLovedWords();
//   }, []);







//   const router = useRouter();
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const { category } = useLocalSearchParams() as {
//     category: string;
//     topic: string;
//   };
//   const themedStyles = {
//     card: {
//       flexDirection: "row" as const,
//       justifyContent: "space-between" as const,
//       alignItems: "center" as FlexAlignType,
//       padding: 22,
//       marginHorizontal: 16,
//       marginBottom: 12,
//       backgroundColor: isDark ? "#313639" : "#fff",
//       borderRadius: 8,
//       ...Platform.select({
//         ios: {
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.2,
//           shadowRadius: 4,
//         },
//         android: {
//           elevation: 2,
//         },
//       }),
//     },
//     text: {
//       color: isDark ? "#fff" : "#333",
//       fontSize: 18,
//       fontWeight: 500 as TextStyle["fontWeight"],
//     },
//     container: {
//       flex: 1,
//       backgroundColor: isDark ? "#191919" : "#f2f2f2",
//       paddingTop: 16,
//     },
//   };

//   return (
//     <View style={themedStyles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={themedStyles.card}>
//             <Pressable
//               onPress={() => {
//                 router.push({
//                   pathname: `/[category]/[topic]`,
//                   params: { category, topic: item.title },
//                 });
//               }}
//             >
//               <Text style={themedStyles.text}>{item.title}</Text>
//             </Pressable>

//             <Pressable
//               onPress={() => {
//                 router.push({
//                   pathname: `/[category]/[topic]`,
//                   params: { category, topic: 'liked-gre-words' },
//                 });
//               }}
//             >
//              <Ionicons name={item.icon} size={24} color="red" />
//             </Pressable>
            
//           </View>
//         )}
//       />
//     </View>
//   );
// }
