import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";


import { sportsAndFitnessConversations } from "@/assets/data/conversations/sports";

const SportsAndFitness = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default SportsAndFitness;

function conversation(id: string) {
  switch (id) {
    case "1":
      return sportsAndFitnessConversations["1"];
    case "2":
      return sportsAndFitnessConversations["2"];
    case "3":
      return sportsAndFitnessConversations["3"];
    case "4":
      return sportsAndFitnessConversations["4"];
    case "5":
      return sportsAndFitnessConversations["5"];
    case "6":
      return sportsAndFitnessConversations["6"];
    case "7":
      return sportsAndFitnessConversations["7"];
    case "8":
      return sportsAndFitnessConversations["8"];
    case "9":
      return sportsAndFitnessConversations["9"];
    case "10":
      return sportsAndFitnessConversations["10"];
    case "11":
      return sportsAndFitnessConversations["11"];
    case "12":
      return sportsAndFitnessConversations["12"];
    case "13":
      return sportsAndFitnessConversations["13"];
    case "14":
      return sportsAndFitnessConversations["14"];
    case "15":
      return sportsAndFitnessConversations["15"];
    case "16":
      return sportsAndFitnessConversations["16"];
    case "17":
      return sportsAndFitnessConversations["17"];
    case "18":
      return sportsAndFitnessConversations["18"];
    case "19":
      return sportsAndFitnessConversations["19"];
    case "20":
      return sportsAndFitnessConversations["20"];
    case "21":
      return sportsAndFitnessConversations["21"];
    case "22":
      return sportsAndFitnessConversations["22"];
    case "23":
      return sportsAndFitnessConversations["23"];
    case "24":
      return sportsAndFitnessConversations["24"];
    case "25":
      return sportsAndFitnessConversations["25"];

    default:
      return null;
  }
}
