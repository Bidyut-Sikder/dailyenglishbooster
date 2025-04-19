import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";


import { moneyAndBanksConversations } from "@/assets/data/conversations/money-banks";

const MoneyBank = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default MoneyBank;


function conversation(id: string) {
  switch (id) {
    case "1":
      return moneyAndBanksConversations["1"];
    case "2":
      return moneyAndBanksConversations["2"];
    case "3":
      return moneyAndBanksConversations["3"];
    case "4":
      return moneyAndBanksConversations["4"];
    case "5":
      return moneyAndBanksConversations["5"];
    case "6":
      return moneyAndBanksConversations["6"];
    case "7":
      return moneyAndBanksConversations["7"];
    case "8":
      return moneyAndBanksConversations["8"];
    case "9":
      return moneyAndBanksConversations["9"];
    case "10":
      return moneyAndBanksConversations["10"];
    case "11":
      return moneyAndBanksConversations["11"];
    case "12":
      return moneyAndBanksConversations["12"];
    case "13":
      return moneyAndBanksConversations["13"];
    case "14":
      return moneyAndBanksConversations["14"];
    case "15":
      return moneyAndBanksConversations["15"];
    case "16":
      return moneyAndBanksConversations["16"];
    case "17":
      return moneyAndBanksConversations["17"];
    case "18":
      return moneyAndBanksConversations["18"];
    case "19":
      return moneyAndBanksConversations["19"];
    case "20":
      return moneyAndBanksConversations["20"];
    case "21":
      return moneyAndBanksConversations["21"];
    case "22":
      return moneyAndBanksConversations["22"];
    case "23":
      return moneyAndBanksConversations["23"];
    case "24":
      return moneyAndBanksConversations["24"];
    case "25":
      return moneyAndBanksConversations["25"];

    default:
      return null;
  }
}
