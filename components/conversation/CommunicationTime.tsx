import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { communicationTimeConversations } from "@/assets/data/conversations/communication-time";

const CommunicationTime = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default CommunicationTime;

function conversation(id: string) {
  switch (id) {
    case "1":
      return communicationTimeConversations["1"];
    case "2":
      return communicationTimeConversations["2"];
    case "3":
      return communicationTimeConversations["3"];
    case "4":
      return communicationTimeConversations["4"];
    case "5":
      return communicationTimeConversations["5"];
    case "6":
      return communicationTimeConversations["6"];
    case "7":
      return communicationTimeConversations["7"];
    case "8":
      return communicationTimeConversations["8"];
    case "9":
      return communicationTimeConversations["9"];
    case "10":
      return communicationTimeConversations["10"];
    case "11":
      return communicationTimeConversations["11"];
    case "12":
      return communicationTimeConversations["12"];
    case "13":
      return communicationTimeConversations["13"];
    case "14":
      return communicationTimeConversations["14"];
    case "15":
      return communicationTimeConversations["15"];
    case "16":
      return communicationTimeConversations["16"];
    case "17":
      return communicationTimeConversations["17"];
    case "18":
      return communicationTimeConversations["18"];
    case "19":
      return communicationTimeConversations["19"];
    case "20":
      return communicationTimeConversations["20"];
    case "21":
      return communicationTimeConversations["21"];
    case "22":
      return communicationTimeConversations["22"];
    case "23":
      return communicationTimeConversations["23"];
    case "24":
      return communicationTimeConversations["24"];
    case "25":
      return communicationTimeConversations["25"];

    default:
      return null;
  }
}
