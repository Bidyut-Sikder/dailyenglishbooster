// /////////////////////////////////

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   Linking,
//   Share,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import StarRatingModal from "@/components/Ratings";
// import { useTheme } from "@/hooks/theme";

// const settingsData = [
//   {
//     title: "Remove Ads",
//     description: "Remove ads from the app",
//     link: "premium", // Internal screen navigation
//   },
//   {
//     title: "Customer Support",
//     description: "Tell us what changes you'd like to see, or bugs you've found",
//     link: "customer-support", // Internal screen navigation
//   },
//   {
//     title: "Rate Us",
//     description: "Do you like the app? Let us know by rating us 5 stars",
//     link: "rating", // External link for rating
//   },
//   {
//     title: "Share",
//     description: "Do you want to share this app with your friends?",
//     link: "share", // This will trigger the sharing functionality
//   },
//   {
//     title: "Privacy Policy",
//     description: "Read our privacy policy to know how we use your data",
//     link: "https://www.yourwebsite.com/privacy-policy", // External link
//   },
//   {
//     title: "Terms of Service",
//     description: "Read the terms and conditions of using this app",
//     link: "https://www.yourwebsite.com/terms", // External link
//   },
//   {
//     title: "Daily English Booster",
//     description: "Version 1.0.0",
//     link: "settings", // Internal navigation, e.g., showing version info
//   },
// ];

// const getIcon = (title: string) => {
//   switch (title) {
//     case "Remove Ads":
//       return <Ionicons name="close-circle-outline" size={24} color="black" />;
//     case "Customer Support":
//       return (
//         <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
//       );
//     case "Rate Us":
//       return <Ionicons name="star-outline" size={24} color="black" />;
//     case "Share":
//       return <Ionicons name="share-social-outline" size={24} color="black" />;
//     case "Privacy Policy":
//       return <Ionicons name="lock-closed-outline" size={24} color="black" />;
//     case "Terms of Service":
//       return <Ionicons name="document-text-outline" size={24} color="black" />;
//     case "GrowTaller App":
//       return (
//         <Ionicons name="information-circle-outline" size={24} color="black" />
//       );
//     default:
//       return <Ionicons name="settings-outline" size={24} color="black" />;
//   }
// };

// const SettingsScreen = () => {
//   const [showModal, setShowModal] = useState(false);
//   const navigation = useNavigation();
//   const {toggleTheme,theme}=useTheme()

//   const handlePress = async (link: string) => {
//     if (link.startsWith("http")) {
//       Linking.openURL(link);
//     } else if (link === "share") {
//       handleShare();
//     } else if (link === "rating") {
//       setShowModal(true);
//       // console.log(link)
//       // return <StarRatingModal show/>;
//     } else if (link === "settings") {
//       return null;
//     } else {
//       navigation.navigate(link as never);
//     }
//   };
//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: "This is the text I want to share!", // Replace this with your text
//       });

//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // Shared with activity type of result.activityType
//           console.log("Shared with activity type:", result.activityType);
//         } else {
//           // Shared successfully
//           console.log("Shared successfully");
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // Dismissed the share dialog
//         console.log("Share dismissed");
//       }
//     } catch (error) {
//       Alert.alert("Error sharing", error as any);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={settingsData}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.itemContainer}
//             onPress={() => handlePress(item.link)}
//           >
//             <View style={styles.icon}>{getIcon(item.title)}</View>
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//       {showModal && (
//         <StarRatingModal
//           onSubmit={() => {
//             console.log("Rating submitted");
//             // navigation.navigate("customer-support" as never);
//           }}
//           onClose={() => setShowModal(false)}
//           visible={showModal}
//         />
//       )}
//     </View>
//   );
// };

// export default SettingsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 24,
//   },
//   icon: {
//     marginRight: 12,
//     marginTop: 4,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//   },
// });
///////////////////////////////////


// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   Linking,
//   Share,
//   Alert,
//   Switch,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import StarRatingModal from "@/components/Ratings";
// import { useTheme } from "@/hooks/theme";

// const settingsData = [
//   {
//     title: "Dark Theme",
//     description: "Toggle dark mode",
//     link: "theme",
//     type: "toggle",
//   },
//   {
//     title: "Remove Ads",
//     description: "Remove ads from the app",
//     link: "premium",
//   },
//   {
//     title: "Customer Support",
//     description: "Tell us what changes you'd like to see, or bugs you've found",
//     link: "customer-support",
//   },
//   {
//     title: "Rate Us",
//     description: "Do you like the app? Let us know by rating us 5 stars",
//     link: "rating",
//   },
//   {
//     title: "Share",
//     description: "Do you want to share this app with your friends?",
//     link: "share",
//   },
//   {
//     title: "Privacy Policy",
//     description: "Read our privacy policy to know how we use your data",
//     link: "https://www.yourwebsite.com/privacy-policy",
//   },
//   {
//     title: "Terms of Service",
//     description: "Read the terms and conditions of using this app",
//     link: "https://www.yourwebsite.com/terms",
//   },
//   {
//     title: "Daily English Booster",
//     description: "Version 1.0.0",
//     link: "settings",
//   },
// ];

// const getIcon = (title: string) => {
//   switch (title) {
//     case "Dark Theme":
//       return <Ionicons name="moon-outline" size={24} color="black" />;
//     case "Remove Ads":
//       return <Ionicons name="close-circle-outline" size={24} color="black" />;
//     case "Customer Support":
//       return (
//         <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
//       );
//     case "Rate Us":
//       return <Ionicons name="star-outline" size={24} color="black" />;
//     case "Share":
//       return <Ionicons name="share-social-outline" size={24} color="black" />;
//     case "Privacy Policy":
//       return <Ionicons name="lock-closed-outline" size={24} color="black" />;
//     case "Terms of Service":
//       return <Ionicons name="document-text-outline" size={24} color="black" />;
//     default:
//       return <Ionicons name="settings-outline" size={24} color="black" />;
//   }
// };

// const SettingsScreen = () => {
//   const [showModal, setShowModal] = useState(false);
//   const navigation = useNavigation();
//   const { toggleTheme, theme } = useTheme();

//   const handlePress = async (link: string) => {
//     if (link.startsWith("http")) {
//       Linking.openURL(link);
//     } else if (link === "share") {
//       handleShare();
//     } else if (link === "rating") {
//       setShowModal(true);
//     } else if (link === "settings") {
//       return null;
//     } else {
//       navigation.navigate(link as never);
//     }
//   };

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: "Check out the Daily English Booster app!",
//       });

//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           console.log("Shared with activity type:", result.activityType);
//         } else {
//           console.log("Shared successfully");
//         }
//       } else if (result.action === Share.dismissedAction) {
//         console.log("Share dismissed");
//       }
//     } catch (error) {
//       Alert.alert("Error sharing", error as any);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={settingsData}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.itemContainer}
//             onPress={() => item.type !== "toggle" && handlePress(item.link)}
//             activeOpacity={item.type === "toggle" ? 1 : 0.7}
//           >
//             <View style={styles.icon}>{getIcon(item.title)}</View>
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//             {item.type === "toggle" ? (
//               <Switch
//                 value={theme === "dark"}
//                 onValueChange={toggleTheme}
//                 thumbColor={theme === "dark" ? "#fff" : "#000"}
//               />
//             ) : null}
//           </TouchableOpacity>
//         )}
//       />
//       {showModal && (
//         <StarRatingModal
//           onSubmit={() => {
//             console.log("Rating submitted");
//           }}
//           onClose={() => setShowModal(false)}
//           visible={showModal}
//         />
//       )}
//     </View>
//   );
// };

// export default SettingsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 24,
//   },
//   icon: {
//     marginRight: 12,
//     marginTop: 4,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//   },
// });
////////////////////////////


import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
  Alert,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StarRatingModal from "@/components/Ratings";
import { useTheme } from "@/hooks/theme";

const settingsData = [
  {
    title: "Dark Theme",
    description: "Toggle dark mode",
    link: "theme",
    type: "toggle",
  },
  {
    title: "Remove Ads",
    description: "Remove ads from the app",
    link: "premium",
  },
  {
    title: "Customer Support",
    description: "Tell us what changes you'd like to see, or bugs you've found",
    link: "customer-support",
  },
  {
    title: "Rate Us",
    description: "Do you like the app? Let us know by rating us 5 stars",
    link: "rating",
  },
  {
    title: "Share",
    description: "Do you want to share this app with your friends?",
    link: "share",
  },
  {
    title: "Privacy Policy",
    description: "Read our privacy policy to know how we use your data",
    link: "https://www.yourwebsite.com/privacy-policy",
  },
  {
    title: "Terms of Service",
    description: "Read the terms and conditions of using this app",
    link: "https://www.yourwebsite.com/terms",
  },
  {
    title: "Daily English Booster",
    description: "Version 1.0.0",
    link: "settings",
  },
];

const getIcon = (title: string, color = "black") => {
  switch (title) {
    case "Dark Theme":
      return <Ionicons name="moon-outline" size={24} color={color} />;
    case "Remove Ads":
      return <Ionicons name="close-circle-outline" size={24} color={color} />;
    case "Customer Support":
      return (
        <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
      );
    case "Rate Us":
      return <Ionicons name="star-outline" size={24} color={color} />;
    case "Share":
      return <Ionicons name="share-social-outline" size={24} color={color} />;
    case "Privacy Policy":
      return <Ionicons name="lock-closed-outline" size={24} color={color} />;
    case "Terms of Service":
      return <Ionicons name="document-text-outline" size={24} color={color} />;
    default:
      return <Ionicons name="settings-outline" size={24} color={color} />;
  }
};

const SettingsScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const { toggleTheme, theme ,bg,bgCard} = useTheme();
  console.log(bg,bgCard)

  const isDark = theme === "dark";
  const backgroundColor = isDark ? "#000" : "#fff";
  const textColor = isDark ? "#fff" : "#000";
  const secondaryText = isDark ? "#aaa" : "#666";

  const handlePress = async (link: string) => {
    if (link.startsWith("http")) {
      Linking.openURL(link);
    } else if (link === "share") {
      handleShare();
    } else if (link === "rating") {
      setShowModal(true);
    } else if (link === "settings") {
      return null;
    } else {
      navigation.navigate(link as never);
    }
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out the Daily English Booster app!",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type:", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      Alert.alert("Error sharing", error as any);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => item.type !== "toggle" && handlePress(item.link)}
            activeOpacity={item.type === "toggle" ? 1 : 0.7}
          >
            <View style={styles.icon}>{getIcon(item.title, textColor)}</View>
            <View style={styles.textContainer}>
              <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
              <Text style={[styles.description, { color: secondaryText }]}>
                {item.description}
              </Text>
            </View>
            {item.type === "toggle" ? (
              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                thumbColor={isDark ? "#03C988" : "#000"}
              />
            ) : null}
          </TouchableOpacity>
        )}
      />
      {showModal && (
        <StarRatingModal
          onSubmit={() => {
            console.log("Rating submitted");
          }}
          onClose={() => setShowModal(false)}
          visible={showModal}
        />
      )}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
  },
});
