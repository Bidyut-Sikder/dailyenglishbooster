import React, { useEffect } from "react";
import { Text } from "react-native";

import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import * as Speech from "expo-speech";

import Topic from "@/components/common/Topic";
import { dailylife, education } from "@/assets/data/conversations/topics";

export default function App() {
  const navigation = useNavigation();
  const { topic } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };

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

  if (topic === "Education") {
    return <Topic data={education} icon={'school-outline'} />;
  }
  if (topic === "Daily Life") {
    return <Topic data={dailylife} icon={'calendar-outline'} />;
  }
  return <Text> not education </Text>;
}
