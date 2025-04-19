import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams } from "expo-router";

import { fashionAndClothesConversations } from "@/assets/data/conversations/fashion";
import { friendshipMemoriesEmotionsConversations } from "@/assets/data/conversations/friendships";

const FriendshipAndMemories = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default FriendshipAndMemories;

function conversation(id: string) {
  switch (id) {
    case "1":
      return friendshipMemoriesEmotionsConversations["1"];
    case "2":
      return friendshipMemoriesEmotionsConversations["2"];
    case "3":
      return friendshipMemoriesEmotionsConversations["3"];
    case "4":
      return friendshipMemoriesEmotionsConversations["4"];
    case "5":
      return friendshipMemoriesEmotionsConversations["5"];
    case "6":
      return friendshipMemoriesEmotionsConversations["6"];
    case "7":
      return friendshipMemoriesEmotionsConversations["7"];
    case "8":
      return friendshipMemoriesEmotionsConversations["8"];
    case "9":
      return friendshipMemoriesEmotionsConversations["9"];
    case "10":
      return friendshipMemoriesEmotionsConversations["10"];
    case "11":
      return friendshipMemoriesEmotionsConversations["11"];
    case "12":
      return friendshipMemoriesEmotionsConversations["12"];
    case "13":
      return friendshipMemoriesEmotionsConversations["13"];
    case "14":
      return friendshipMemoriesEmotionsConversations["14"];
    case "15":
      return friendshipMemoriesEmotionsConversations["15"];
    case "16":
      return friendshipMemoriesEmotionsConversations["16"];
    case "17":
      return friendshipMemoriesEmotionsConversations["17"];
    case "18":
      return friendshipMemoriesEmotionsConversations["18"];
    case "19":
      return friendshipMemoriesEmotionsConversations["19"];
    case "20":
      return friendshipMemoriesEmotionsConversations["20"];
    case "21":
      return friendshipMemoriesEmotionsConversations["21"];
    case "22":
      return friendshipMemoriesEmotionsConversations["22"];
    case "23":
      return friendshipMemoriesEmotionsConversations["23"];
    case "24":
      return friendshipMemoriesEmotionsConversations["24"];
    case "25":
      return friendshipMemoriesEmotionsConversations["25"];

    default:
      return null;
  }
}
