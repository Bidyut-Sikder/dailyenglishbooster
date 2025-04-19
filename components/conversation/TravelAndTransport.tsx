import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";


import { travelTransportConversations } from "@/assets/data/conversations/travel-trandsport";


const TravelTransport = () => {
  const { id } = useLocalSearchParams();
 

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default TravelTransport;


function conversation(id: string) {
  switch (id) {
    case "1":
      return travelTransportConversations["1"];
    case "2":
      return travelTransportConversations["2"];
    case "3":
      return travelTransportConversations["3"];
    case "4":
      return travelTransportConversations["4"];
    case "5":
      return travelTransportConversations["5"];
    case "6":
      return travelTransportConversations["6"];
    case "7":
      return travelTransportConversations["7"];
    case "8":
      return travelTransportConversations["8"];
    case "9":
      return travelTransportConversations["9"];
    case "10":
      return travelTransportConversations["10"];
    case "11":
      return travelTransportConversations["11"];
    case "12":
      return travelTransportConversations["12"];
    case "13":
      return travelTransportConversations["13"];
    case "14":
      return travelTransportConversations["14"];
    case "15":
      return travelTransportConversations["15"];
    case "16":
      return travelTransportConversations["16"];
    case "17":
      return travelTransportConversations["17"];
    case "18":
      return travelTransportConversations["18"];
    case "19":
      return travelTransportConversations["19"];
    case "20":
      return travelTransportConversations["20"];
    case "21":
      return travelTransportConversations["21"];
    case "22":
      return travelTransportConversations["22"];
    case "23":
      return travelTransportConversations["23"];
    case "24":
      return travelTransportConversations["24"];
    case "25":
      return travelTransportConversations["25"];

    default:
      return null;
  }
}
