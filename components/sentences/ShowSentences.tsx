import React from "react";
import {
  View,
  Text,
  FlatList,
  Platform,
  FlexAlignType,
  TextStyle,
  Pressable,
} from "react-native";
import * as Speech from "expo-speech";
import { useTheme } from "@/hooks/theme";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ShowSentences({ sentences }: any) {

  const { theme, bg, bgCard } = useTheme();
  const isDark = theme === "dark";



  const themedStyles = {
    card: {
      flexDirection: "row" as const,
      justifyContent: "flex-start" as const, // Align content to the left
      alignItems: "flex-start" as FlexAlignType, // Align items to the top of the container
      padding: 22,
      marginHorizontal: 16,
      marginBottom: 3,
      backgroundColor: bgCard,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    text: {
      color: isDark ? "#fff" : "#333",
      fontSize: 18,
      fontWeight: "500" as TextStyle["fontWeight"],
    },
    container: {
      flex: 1,
      backgroundColor: bg,
      paddingTop: 16,
    },
    wordText: {
      flex: 1,
      marginLeft: 12,
      flexWrap: "wrap" as TextStyle["flexWrap"], // Allow text wrapping if necessary
    },
    idText: {
      marginRight: 8, // Space between the number and the word
    }
  };

  const speakWord = (word: string) => {
    Speech.speak(word);
  };

  return (
    <View style={themedStyles.container}>
      <FlatList
        data={sentences}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => speakWord(item.word)}
            android_ripple={{ color: "#ccc" }}
            style={themedStyles.card}
          >
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={[themedStyles.text, themedStyles.idText]}>{item.id}.</Text>
              <Text style={[themedStyles.text, themedStyles.wordText]}>
                {item.word}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}





///////////////////////

// import React from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Platform,
//   FlexAlignType,
//   TextStyle,
//   Pressable,
// } from "react-native";
// import * as Speech from "expo-speech";
// import { useTheme } from "@/hooks/theme";
// import { useLocalSearchParams, useRouter } from "expo-router";

// export default function ShowSentences({ sentences }: any) {

//   const router = useRouter();
//   const { theme,bg,bgCard } = useTheme();
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
//       marginBottom: 3,
    
//       backgroundColor: bgCard,
//     //   backgroundColor: isDark ? "#313639" : "#fff",
//     //   borderRadius: 10,
//       ...Platform.select({
//         ios: {
//           shadowColor: "#000",
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.2,
//         //   shadowRadius: 4,
//         },
//         android: {
//           elevation: 2,
//         },
//       }),
//     },
//     text: {
//       color: isDark ? "#fff" : "#333",
//       fontSize: 18,
//       fontWeight: "500" as TextStyle["fontWeight"],
//     },
//     container: {
//       flex: 1,
//       backgroundColor: bg,
//       paddingTop: 16,
//     },
//   };

//   const speakWord = (word: string) => {
//     Speech.speak(word);
//   };

//   return (
//     <View style={themedStyles.container}>
//       <FlatList
//         data={sentences}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <Pressable
//             onPress={() => speakWord(item.word)}
//             android_ripple={{ color: "#ccc" }}
//             style={ themedStyles.card
// }

//             // style={({ pressed }) => [
//               // themedStyles.card,
//               // pressed && {
//               //   opacity: 0.7,
//               //   // transform: [{ scale: 0.98 }],
//               // },
//             // ]}
//           >
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Text style={themedStyles.text}>{item.id}.</Text>
//               <Text style={[themedStyles.text, { marginLeft: 12 }]}>
//                 {item.word}
//               </Text>
//             </View>
//           </Pressable>
//         )}
//       />
//     </View>
//   );
// }
