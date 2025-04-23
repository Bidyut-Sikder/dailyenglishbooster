import React, { useEffect } from "react";
import { Text } from "react-native";

import { useLocalSearchParams, useNavigation } from "expo-router";

import SentenceController from "@/components/sentences/SentenceController";
import ConversationController from "@/components/conversation/ConversationController";
import VovabularyController from "@/components/vocabulary/VovabularyController";
import MoreSentenceController from "@/components/sentences/MoreSentenceController";
import IdiomsController from "@/components/idioms/IdiomsController";

export default function App() {
  const navigation = useNavigation();
  const { category, topic } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };

  console.log(category, ",", topic);

  useEffect(() => {
    if (topic) {
      navigation.setOptions({ title: decodeURIComponent(topic as string) });
    }
  }, [topic]);
  //conversations start here

  if (category === "Conversation" && topic) {
    return <ConversationController topic={topic} />;
  }

  //Vocabulary starts here
  if (category === "Vocabulary" && topic) {
    return <VovabularyController topic={topic} />;
  }

  /////////////////////////////
  //Everyday Sentences start here
  if (category === "Everyday Sentences" && topic) {
    return <SentenceController topic={topic} />;
  }

    //More Sentences start here
    if (category === "More Sentences" && topic) {
      return <MoreSentenceController topic={topic} />;
    }

    //More Sentences start here
    if (category === "Idioms" && topic) {
      return <IdiomsController topic={topic} />;
    }

  return <Text> NO DATA </Text>;
}
