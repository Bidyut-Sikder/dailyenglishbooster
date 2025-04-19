import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { homeAndHouseConversations } from "@/assets/data/conversations/house-and-home";

const HomeAndHouse = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default HomeAndHouse;

function conversation(id: string) {
  switch (id) {
    case "1":
      return homeAndHouseConversations["1"];
    case "2":
      return homeAndHouseConversations["2"];
    case "3":
      return homeAndHouseConversations["3"];
    case "4":
      return homeAndHouseConversations["4"];
    case "5":
      return homeAndHouseConversations["5"];
    case "6":
      return homeAndHouseConversations["6"];
    case "7":
      return homeAndHouseConversations["7"];
    case "8":
      return homeAndHouseConversations["8"];
    case "9":
      return homeAndHouseConversations["9"];
    case "10":
      return homeAndHouseConversations["10"];
    case "11":
      return homeAndHouseConversations["11"];
    case "12":
      return homeAndHouseConversations["12"];
    case "13":
      return homeAndHouseConversations["13"];
    case "14":
      return homeAndHouseConversations["14"];
    case "15":
      return homeAndHouseConversations["15"];
    case "16":
      return homeAndHouseConversations["16"];
    case "17":
      return homeAndHouseConversations["17"];
    case "18":
      return homeAndHouseConversations["18"];
    case "19":
      return homeAndHouseConversations["19"];
    case "20":
      return homeAndHouseConversations["20"];
    case "21":
      return homeAndHouseConversations["21"];
    case "22":
      return homeAndHouseConversations["22"];
    case "23":
      return homeAndHouseConversations["23"];
    case "24":
      return homeAndHouseConversations["24"];
    case "25":
      return homeAndHouseConversations["25"];

    default:
      return null;
  }
}
