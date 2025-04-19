import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { familyConversation } from "@/assets/data/conversations/family";
import { healthConversations } from "@/assets/data/conversations/health";

const Health = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default Health;


function conversation(id: string) {
  switch (id) {
    case "1":
      return healthConversations["1"];
    case "2":
      return healthConversations["2"];
    case "3":
      return healthConversations["3"];
    case "4":
      return healthConversations["4"];
    case "5":
      return healthConversations["5"];
    case "6":
      return healthConversations["6"];
    case "7":
      return healthConversations["7"];
    case "8":
      return healthConversations["8"];
    case "9":
      return healthConversations["9"];
    case "10":
      return healthConversations["10"];
    case "11":
      return healthConversations["11"];
    case "12":
      return healthConversations["12"];
    case "13":
      return healthConversations["13"];
    case "14":
      return healthConversations["14"];
    case "15":
      return healthConversations["15"];
    case "16":
      return healthConversations["16"];
    case "17":
      return healthConversations["17"];
    case "18":
      return healthConversations["18"];
    case "19":
      return healthConversations["19"];
    case "20":
      return healthConversations["20"];
    case "21":
      return healthConversations["21"];
    case "22":
      return healthConversations["22"];
    case "23":
      return healthConversations["23"];
    case "24":
      return healthConversations["24"];
    case "25":
      return healthConversations["25"];

    default:
      return null;
  }
}
