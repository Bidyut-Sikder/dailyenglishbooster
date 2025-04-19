import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { foodandrestaurantConversations } from "@/assets/data/conversations/food-and-restaurant";

const FoodAndRestaurant = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default FoodAndRestaurant;

function conversation(id: string) {
  switch (id) {
    case "1":
      return foodandrestaurantConversations["1"];
    case "2":
      return foodandrestaurantConversations["2"];
    case "3":
      return foodandrestaurantConversations["3"];
    case "4":
      return foodandrestaurantConversations["4"];
    case "5":
      return foodandrestaurantConversations["5"];
    case "6":
      return foodandrestaurantConversations["6"];
    case "7":
      return foodandrestaurantConversations["7"];
    case "8":
      return foodandrestaurantConversations["8"];
    case "9":
      return foodandrestaurantConversations["9"];
    case "10":
      return foodandrestaurantConversations["10"];
    case "11":
      return foodandrestaurantConversations["11"];
    case "12":
      return foodandrestaurantConversations["12"];
    case "13":
      return foodandrestaurantConversations["13"];
    case "14":
      return foodandrestaurantConversations["14"];
    case "15":
      return foodandrestaurantConversations["15"];
    case "16":
      return foodandrestaurantConversations["16"];
    case "17":
      return foodandrestaurantConversations["17"];
    case "18":
      return foodandrestaurantConversations["18"];
    case "19":
      return foodandrestaurantConversations["19"];
    case "20":
      return foodandrestaurantConversations["20"];
    case "21":
      return foodandrestaurantConversations["21"];
    case "22":
      return foodandrestaurantConversations["22"];
    case "23":
      return foodandrestaurantConversations["23"];
    case "24":
      return foodandrestaurantConversations["24"];
    case "25":
      return foodandrestaurantConversations["25"];

    default:
      return null;
  }
}
