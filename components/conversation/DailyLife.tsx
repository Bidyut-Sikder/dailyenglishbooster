import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { dailylifeConversations } from "@/assets/data/conversations/dailylife";

const DailyLife = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default DailyLife;

function conversation(id: string) {
  switch (id) {
    case "1":
      return dailylifeConversations["1"];
    case "2":
      return dailylifeConversations["2"];
    case "3":
      return dailylifeConversations["3"];
    case "4":
      return dailylifeConversations["4"];
    case "5":
      return dailylifeConversations["5"];
    case "6":
      return dailylifeConversations["6"];
    case "7":
      return dailylifeConversations["7"];
    case "8":
      return dailylifeConversations["8"];
    case "9":
      return dailylifeConversations["9"];
    case "10":
      return dailylifeConversations["10"];
    case "11":
      return dailylifeConversations["11"];
    case "12":
      return dailylifeConversations["12"];
    case "13":
      return dailylifeConversations["13"];
    case "14":
      return dailylifeConversations["14"];
    case "15":
      return dailylifeConversations["15"];
    case "16":
      return dailylifeConversations["16"];
    case "17":
      return dailylifeConversations["17"];
    case "18":
      return dailylifeConversations["18"];
    case "19":
      return dailylifeConversations["19"];
    case "20":
      return dailylifeConversations["20"];
    case "21":
      return dailylifeConversations["21"];
    case "22":
      return dailylifeConversations["22"];
    case "23":
      return dailylifeConversations["23"];
    case "24":
      return dailylifeConversations["24"];
    case "25":
      return dailylifeConversations["25"];

    default:
      return null;
  }
}
