import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { shoppingConversations } from "@/assets/data/conversations/shopping";


const Shopping = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default Shopping;

function conversation(id: string) {
  switch (id) {
    case "1":
      return shoppingConversations["1"];
    case "2":
      return shoppingConversations["2"];
    case "3":
      return shoppingConversations["3"];
    case "4":
      return shoppingConversations["4"];
    case "5":
      return shoppingConversations["5"];
    case "6":
      return shoppingConversations["6"];
    case "7":
      return shoppingConversations["7"];
    case "8":
      return shoppingConversations["8"];
    case "9":
      return shoppingConversations["9"];
    case "10":
      return shoppingConversations["10"];
    case "11":
      return shoppingConversations["11"];
    case "12":
      return shoppingConversations["12"];
    case "13":
      return shoppingConversations["13"];
    case "14":
      return shoppingConversations["14"];
    case "15":
      return shoppingConversations["15"];
    case "16":
      return shoppingConversations["16"];
    case "17":
      return shoppingConversations["17"];
    case "18":
      return shoppingConversations["18"];
    case "19":
      return shoppingConversations["19"];
    case "20":
      return shoppingConversations["20"];
    case "21":
      return shoppingConversations["21"];
    case "22":
      return shoppingConversations["22"];
    case "23":
      return shoppingConversations["23"];
    case "24":
      return shoppingConversations["24"];
    case "25":
      return shoppingConversations["25"];

    default:
      return null;
  }
}
