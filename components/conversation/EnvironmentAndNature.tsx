
import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";


import { travelTransportConversations } from "@/assets/data/conversations/travel-trandsport";
import { environmentAndNature } from "@/assets/data/conversations/environment";


const EnvironmentAndNature = () => {
  const { id } = useLocalSearchParams();
 

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default EnvironmentAndNature;


function conversation(id: string) {
  switch (id) {
    case "1":
      return environmentAndNature["1"];
    case "2":
      return environmentAndNature["2"];
    case "3":
      return environmentAndNature["3"];
    case "4":
      return environmentAndNature["4"];
    case "5":
      return environmentAndNature["5"];
    case "6":
      return environmentAndNature["6"];
    case "7":
      return environmentAndNature["7"];
    case "8":
      return environmentAndNature["8"];
    case "9":
      return environmentAndNature["9"];
    case "10":
      return environmentAndNature["10"];
    case "11":
      return environmentAndNature["11"];
    case "12":
      return environmentAndNature["12"];
    case "13":
      return environmentAndNature["13"];
    case "14":
      return environmentAndNature["14"];
    case "15":
      return environmentAndNature["15"];
    case "16":
      return environmentAndNature["16"];
    case "17":
      return environmentAndNature["17"];
    case "18":
      return environmentAndNature["18"];
    case "19":
      return environmentAndNature["19"];
    case "20":
      return environmentAndNature["20"];
    case "21":
      return environmentAndNature["21"];
    case "22":
      return environmentAndNature["22"];
    case "23":
      return environmentAndNature["23"];
    case "24":
      return environmentAndNature["24"];
    case "25":
      return environmentAndNature["25"];

    default:
      return null;
  }
}









