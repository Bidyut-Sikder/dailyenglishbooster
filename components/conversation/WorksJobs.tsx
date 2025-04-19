import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { workJobsOfficeConversations } from "@/assets/data/conversations/works-jobs";


const WorksJobs = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default WorksJobs;

function conversation(id: string) {
  switch (id) {
    case "1":
      return workJobsOfficeConversations["1"];
    case "2":
      return workJobsOfficeConversations["2"];
    case "3":
      return workJobsOfficeConversations["3"];
    case "4":
      return workJobsOfficeConversations["4"];
    case "5":
      return workJobsOfficeConversations["5"];
    case "6":
      return workJobsOfficeConversations["6"];
    case "7":
      return workJobsOfficeConversations["7"];
    case "8":
      return workJobsOfficeConversations["8"];
    case "9":
      return workJobsOfficeConversations["9"];
    case "10":
      return workJobsOfficeConversations["10"];
    case "11":
      return workJobsOfficeConversations["11"];
    case "12":
      return workJobsOfficeConversations["12"];
    case "13":
      return workJobsOfficeConversations["13"];
    case "14":
      return workJobsOfficeConversations["14"];
    case "15":
      return workJobsOfficeConversations["15"];
    case "16":
      return workJobsOfficeConversations["16"];
    case "17":
      return workJobsOfficeConversations["17"];
    case "18":
      return workJobsOfficeConversations["18"];
    case "19":
      return workJobsOfficeConversations["19"];
    case "20":
      return workJobsOfficeConversations["20"];
    case "21":
      return workJobsOfficeConversations["21"];
    case "22":
      return workJobsOfficeConversations["22"];
    case "23":
      return workJobsOfficeConversations["23"];
    case "24":
      return workJobsOfficeConversations["24"];
    case "25":
      return workJobsOfficeConversations["25"];

    default:
      return null;
  }
}
