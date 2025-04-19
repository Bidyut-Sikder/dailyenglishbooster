import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { familyConversation } from "@/assets/data/conversations/family";

const Family = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default Family;

function conversation(id: string) {
  switch (id) {
    case "1":
      return familyConversation["1"];
    case "2":
      return familyConversation["2"];
    case "3":
      return familyConversation["3"];
    case "4":
      return familyConversation["4"];
    case "5":
      return familyConversation["5"];
    case "6":
      return familyConversation["6"];
    case "7":
      return familyConversation["7"];
    case "8":
      return familyConversation["8"];
    case "9":
      return familyConversation["9"];
    case "10":
      return familyConversation["10"];
    case "11":
      return familyConversation["11"];
    case "12":
      return familyConversation["12"];
    case "13":
      return familyConversation["13"];
    case "14":
      return familyConversation["14"];
    case "15":
      return familyConversation["15"];
    case "16":
      return familyConversation["16"];
    case "17":
      return familyConversation["17"];
    case "18":
      return familyConversation["18"];
    case "19":
      return familyConversation["19"];
    case "20":
      return familyConversation["20"];
    case "21":
      return familyConversation["21"];
    case "22":
      return familyConversation["22"];
    case "23":
      return familyConversation["23"];
    case "24":
      return familyConversation["24"];
    case "25":
      return familyConversation["25"];

    default:
      return null;
  }
}
