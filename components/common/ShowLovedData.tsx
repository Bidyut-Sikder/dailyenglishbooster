
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,Platform
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useTheme } from "@/hooks/theme";


export default function ShowLovedData({dataList, storageKey}:any) {



  const [lovedIds, setLovedIds] = useState<number[]>([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const params = useLocalSearchParams();


  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const loadLovedWords = async () => {
      try {
        // setLoading(true);
        const json = await AsyncStorage.getItem(storageKey);
     
        if (json) {
          setLovedIds(JSON.parse(json));
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
    loadLovedWords();
  }, []);


  const handleSpeak = (text: string) => {
    Speech.speak(text, { language: "en", rate: 0.8 });
  };

  const toggleLove = async (id: number) => {
    const updated = lovedIds.filter((i) => i !== id);
    setLovedIds(updated);
    await AsyncStorage.setItem(storageKey, JSON.stringify(updated));
  };



  const likedWords = dataList.filter((word:any) => lovedIds.includes(word.id));

  const renderItem = ({ item }: { item: (typeof dataList)[0] }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.id}>{item.id}.</Text>
        <View style={styles.wordRow}>
          <Text style={styles.word}>
            {item.idiom || item.phrase || item.proverb}
          </Text>
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => toggleLove(item.id)}>
            <Ionicons
              name={lovedIds.includes(item.id) ? "heart" : "heart-outline"}
              size={26}
              color={
                lovedIds.includes(item.id) ? "red" : isDark ? "#aaa" : "gray"
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleSpeak(item.idiom || item.phrase || item.proverb)
            }
            style={{ marginLeft: 10 }}
          >
            <Ionicons
              name="volume-high-outline"
              size={28}
              color={isDark ? "#fff" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label}>📖 Meaning</Text>
      <Text style={styles.text}>{item.meaning}</Text>
      <Text style={styles.label}>💬 Example</Text>
      <Text style={styles.textItalic}>1. {item.example1}</Text>
      <Text style={styles.textItalic}>2. {item.example2}</Text>
    </View>
  );

    const styles = StyleSheet.create({
      list: {
        padding: 12,
      },
      card: {
        backgroundColor: isDark ? "#313639" : "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          android: {
            elevation: 4,
          },
        }),
      },
      header: {
        flexDirection: "row", // Ensure items are in a row
        alignItems: "flex-start", // Align to the top
        marginBottom: 10,
      },
      id: {
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 8,
        marginTop:2,
        color: isDark ? "#fff" : "#333",
        minWidth: 30, // Make sure the id has some minimum width
      },
      wordRow: {
        flexDirection: "row",
        alignItems: "flex-start", // Keep the items aligned at the top
        flexWrap: "wrap", // Allow wrapping of the idiom/phrase to the next line
        flex: 1, // Take up all available space
      },
      word: {
        fontSize: 20,
        fontWeight: "600",
        color: isDark ? "#fff" : "#333",
      },
      badge: {
        backgroundColor: isDark ? "#444" : "#e0e0e0",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
      },
      badgeText: {
        fontSize: 12,
        color: isDark ? "#ccc" : "#555",
      },
      iconRow: {
        flexDirection: "row",
        alignItems: "center",
      },
      label: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 6,
        color: isDark ? "#ccc" : "#666",
      },
      text: {
        fontSize: 15,
        color: isDark ? "#eee" : "#333",
      },
      textItalic: {
        fontSize: 14,
        fontStyle: "italic",
        color: isDark ? "#bbb" : "#555",
      },
    });

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? "#191919" : "#f2f2f2" }}>
       <FlatList
        data={likedWords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              color: isDark ? "#aaa" : "#333",
            }}
          >

            No liked words found. Go to the dictionary and like some words!
            
          </Text>
        }
      /> 
    </View>
  );
}


///////////////////////

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Speech from "expo-speech";
// import { Ionicons } from "@expo/vector-icons";
// import { useLocalSearchParams, useNavigation } from "expo-router";
// import { useTheme } from "@/hooks/theme";


// export default function ShowLovedData({dataList, storageKey}:any) {



//   const [lovedIds, setLovedIds] = useState<number[]>([]);
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);

//   const params = useLocalSearchParams();


//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   useEffect(() => {
//     const loadLovedWords = async () => {
//       try {
//         // setLoading(true);
//         const json = await AsyncStorage.getItem(storageKey);
     
//         if (json) {
//           setLovedIds(JSON.parse(json));
//           setLoading(false);
//         }
//       } catch (error) {
//         setLoading(false);
//       }
//     };
//     loadLovedWords();
//   }, []);


//   const handleSpeak = (text: string) => {
//     Speech.speak(text, { language: "en", rate: 0.8 });
//   };

//   const toggleLove = async (id: number) => {
//     const updated = lovedIds.filter((i) => i !== id);
//     setLovedIds(updated);
//     await AsyncStorage.setItem(storageKey, JSON.stringify(updated));
//   };



//   const likedWords = dataList.filter((word:any) => lovedIds.includes(word.id));

//   const renderItem = ({ item }: { item: (typeof dataList)[0] }) => (
//     <View style={styles.card}>
//       <View style={styles.header}>
//         <Text style={styles.id}>{item.id}.</Text>
//         <View style={styles.wordRow}>
//           <Text style={styles.word}>{item.idiom || item.phrase}</Text>
//           {/* <View style={styles.badge}>
//             <Text style={styles.badgeText}>{item.partsOfSpeech}</Text>
//           </View> */}
//         </View>
//         <View style={styles.iconRow}>
//           <TouchableOpacity onPress={() => toggleLove(item.id)}>
//             <Ionicons name="heart" size={26} color="red" />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => handleSpeak(item.idiom|| item.phrase)}
//             style={{ marginLeft: 10 }}
//           >
//             <Ionicons
//               name="volume-high-outline"
//               size={28}
//               color={isDark ? "#fff" : "black"}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <Text style={styles.label}>📖 Meaning</Text>
//       <Text style={styles.text}>{item.meaning}</Text>
//       <Text style={styles.label}>💬 Example</Text>
//       <Text style={styles.textItalic}>1. {item.example1}</Text>
//       <Text style={styles.textItalic}>2. {item.example2}</Text>
//     </View>
//   );

//   const styles = StyleSheet.create({
//     list: {
//       padding: 12,
//     },
//     card: {
//       backgroundColor: isDark ? "#313639" : "#fff",
//       borderRadius: 12,
//       padding: 16,
//       marginBottom: 16,
//       shadowColor: "#000",
//       shadowOffset: { width: 0, height: 3 },
//       shadowOpacity: 0.1,
//       shadowRadius: 4,
//       elevation: 4,
//     },
//     header: {
//       flexDirection: "row",
//       alignItems: "center",
//       marginBottom: 10,
//     },
//     id: {
//       fontWeight: "bold",
//       fontSize: 18,
//       marginRight: 8,
//       color: isDark ? "#fff" : "#333",
//     },
//     wordRow: {
//       flexDirection: "row",
//       alignItems: "center",
//       flex: 1,
//     },
//     word: {
//       fontSize: 20,
//       fontWeight: "600",
//       color: isDark ? "#fff" : "#333",
//       marginRight: 8,
//     },
//     badge: {
//       backgroundColor: isDark ? "#444" : "#e0e0e0",
//       paddingHorizontal: 6,
//       paddingVertical: 2,
//       borderRadius: 6,
//     },
//     badgeText: {
//       fontSize: 12,
//       color: isDark ? "#ccc" : "#555",
//     },
//     iconRow: {
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     label: {
//       fontSize: 14,
//       fontWeight: "bold",
//       marginTop: 6,
//       color: isDark ? "#ccc" : "#666",
//     },
//     text: {
//       fontSize: 15,
//       color: isDark ? "#eee" : "#333",
//     },
//     textItalic: {
//       fontSize: 14,
//       fontStyle: "italic",
//       color: isDark ? "#bbb" : "#555",
//     },
//   });

//   return (
//     <View style={{ flex: 1, backgroundColor: isDark ? "#191919" : "#f2f2f2" }}>
//        <FlatList
//         data={likedWords}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={
//           <Text
//             style={{
//               textAlign: "center",
//               marginTop: 50,
//               color: isDark ? "#aaa" : "#333",
//             }}
//           >

//             No liked words found. Go to the dictionary and like some words!
            
//           </Text>
//         }
//       /> 
//     </View>
//   );
// }