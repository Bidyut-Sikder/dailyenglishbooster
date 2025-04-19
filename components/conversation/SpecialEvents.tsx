import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { specialEventsConversations } from "@/assets/data/conversations/special-events";


const SpecialEvents = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default SpecialEvents;

function conversation(id: string) {
  switch (id) {
    case "1":
      return specialEventsConversations["1"];
    case "2":
      return specialEventsConversations["2"];
    case "3":
      return specialEventsConversations["3"];
    case "4":
      return specialEventsConversations["4"];
    case "5":
      return specialEventsConversations["5"];
    case "6":
      return specialEventsConversations["6"];
    case "7":
      return specialEventsConversations["7"];
    case "8":
      return specialEventsConversations["8"];
    case "9":
      return specialEventsConversations["9"];
    case "10":
      return specialEventsConversations["10"];
    case "11":
      return specialEventsConversations["11"];
    case "12":
      return specialEventsConversations["12"];
    case "13":
      return specialEventsConversations["13"];
    case "14":
      return specialEventsConversations["14"];
    case "15":
      return specialEventsConversations["15"];
    case "16":
      return specialEventsConversations["16"];
    case "17":
      return specialEventsConversations["17"];
    case "18":
      return specialEventsConversations["18"];
    case "19":
      return specialEventsConversations["19"];
    case "20":
      return specialEventsConversations["20"];
    case "21":
      return specialEventsConversations["21"];
    case "22":
      return specialEventsConversations["22"];
    case "23":
      return specialEventsConversations["23"];
    case "24":
      return specialEventsConversations["24"];
    case "25":
      return specialEventsConversations["25"];

    default:
      return null;
  }
}
