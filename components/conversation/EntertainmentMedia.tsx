import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { entertainmentMediaConversations } from "@/assets/data/conversations/media";

const EntertainmentMedia = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default EntertainmentMedia;

function conversation(id: string) {
  switch (id) {
    case "1":
      return entertainmentMediaConversations["1"];
    case "2":
      return entertainmentMediaConversations["2"];
    case "3":
      return entertainmentMediaConversations["3"];
    case "4":
      return entertainmentMediaConversations["4"];
    case "5":
      return entertainmentMediaConversations["5"];
    case "6":
      return entertainmentMediaConversations["6"];
    case "7":
      return entertainmentMediaConversations["7"];
    case "8":
      return entertainmentMediaConversations["8"];
    case "9":
      return entertainmentMediaConversations["9"];
    case "10":
      return entertainmentMediaConversations["10"];
    case "11":
      return entertainmentMediaConversations["11"];
    case "12":
      return entertainmentMediaConversations["12"];
    case "13":
      return entertainmentMediaConversations["13"];
    case "14":
      return entertainmentMediaConversations["14"];
    case "15":
      return entertainmentMediaConversations["15"];
    case "16":
      return entertainmentMediaConversations["16"];
    case "17":
      return entertainmentMediaConversations["17"];
    case "18":
      return entertainmentMediaConversations["18"];
    case "19":
      return entertainmentMediaConversations["19"];
    case "20":
      return entertainmentMediaConversations["20"];
    case "21":
      return entertainmentMediaConversations["21"];
    case "22":
      return entertainmentMediaConversations["22"];
    case "23":
      return entertainmentMediaConversations["23"];
    case "24":
      return entertainmentMediaConversations["24"];
    case "25":
      return entertainmentMediaConversations["25"];

    default:
      return null;
  }
}
