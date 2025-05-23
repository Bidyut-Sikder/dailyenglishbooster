import React, { useEffect } from "react";
import { Text } from "react-native";

import { useLocalSearchParams, useNavigation } from "expo-router";

import SentenceController from "@/components/sentences/SentenceController";
import ConversationController from "@/components/conversation/ConversationController";
import VovabularyController from "@/components/vocabulary/VovabularyController";
import MoreSentenceController from "@/components/sentences/MoreSentenceController";
import IdiomsController from "@/components/idioms/IdiomsController";
import PhrasesController from "@/components/phrases/PhrasesController";
import GrammarController from "@/components/grammar/GrammarController";
import SynonymAntonymController from "@/components/Synonyms&Antonyms/SynonymAntonymController";
import ProverbController from "@/components/proverbs/ProverbController";
import GrammarTestController from "@/components/grammarTest/GrammarTestController";

export default function App() {
  const navigation = useNavigation();
  const { category, topic } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };

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

  if (category === "Phrases" && topic) {
    return <PhrasesController topic={topic} />;
  }

  if (category === "Grammar" && topic) {
    return <GrammarController topic={topic} />;
  }
  if (category === "Grammar Test" && topic) {
    return <GrammarTestController topic={topic} />;
  }

  if (category === "Synonyms & Antonyms" && topic) {
    return <SynonymAntonymController topic={topic} />;
  }
  if (category === "Proverbs" && topic) {
    return <ProverbController topic={topic} />;
  }


  return <Text> NO DATA </Text>;
}

