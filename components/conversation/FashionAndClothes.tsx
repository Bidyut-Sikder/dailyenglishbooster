import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { fashionAndClothesConversations } from "@/assets/data/conversations/fashion";

const FashionAndClothes = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default FashionAndClothes;

function conversation(id: string) {
  switch (id) {
    case "1":
      return fashionAndClothesConversations["1"];
    case "2":
      return fashionAndClothesConversations["2"];
    case "3":
      return fashionAndClothesConversations["3"];
    case "4":
      return fashionAndClothesConversations["4"];
    case "5":
      return fashionAndClothesConversations["5"];
    case "6":
      return fashionAndClothesConversations["6"];
    case "7":
      return fashionAndClothesConversations["7"];
    case "8":
      return fashionAndClothesConversations["8"];
    case "9":
      return fashionAndClothesConversations["9"];
    case "10":
      return fashionAndClothesConversations["10"];
    case "11":
      return fashionAndClothesConversations["11"];
    case "12":
      return fashionAndClothesConversations["12"];
    case "13":
      return fashionAndClothesConversations["13"];
    case "14":
      return fashionAndClothesConversations["14"];
    case "15":
      return fashionAndClothesConversations["15"];
    case "16":
      return fashionAndClothesConversations["16"];
    case "17":
      return fashionAndClothesConversations["17"];
    case "18":
      return fashionAndClothesConversations["18"];
    case "19":
      return fashionAndClothesConversations["19"];
    case "20":
      return fashionAndClothesConversations["20"];
    case "21":
      return fashionAndClothesConversations["21"];
    case "22":
      return fashionAndClothesConversations["22"];
    case "23":
      return fashionAndClothesConversations["23"];
    case "24":
      return fashionAndClothesConversations["24"];
    case "25":
      return fashionAndClothesConversations["25"];

    default:
      return null;
  }
}
