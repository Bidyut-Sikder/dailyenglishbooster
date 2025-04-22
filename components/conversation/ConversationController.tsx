import React from "react";

import Topic from "../common/Topic";
import {
  communicationTime,
  dailylife,
  education,
  entertainmentMedia,
  environmentNature,
  family,
  fashionAndClothes,
  foodandrestaurant,
  friendshipMemoriesEmotions,
  health,
  homeandhouse,
  moneyAndBanks,
  shopping,
  specialEvents,
  sportsAndFitness,
  travelTransport,
  workJobsOffice,
} from "@/assets/data/conversations/topics";

const ConversationController = ({ topic }: { topic: string }) => {
  switch (topic) {
    case "Education":
      return <Topic data={education} icon="school-outline" />;
    case "Daily Life":
      return <Topic data={dailylife} icon="calendar-outline" />;
    case "House and Home":
      return <Topic data={homeandhouse} icon="home-outline" />;
    case "Family":
      return <Topic data={family} icon="people-outline" />;
    case "Shopping":
      return <Topic data={shopping} icon="cart-outline" />;
    case "Health":
      return <Topic data={health} icon="medkit-outline" />;
    case "Food and Restaurant":
      return <Topic data={foodandrestaurant} icon="restaurant-outline" />;
    case "Travel-Transport":
      return <Topic data={travelTransport} icon="bus-outline" />;
    case "Environment and Nature":
      return <Topic data={environmentNature} icon="leaf-outline" />;
    case "Works-Jobs and Office":
      return <Topic data={workJobsOffice} icon="briefcase-outline" />;
    case "Entertainment-Media":
      return <Topic data={entertainmentMedia} icon="tv-outline" />;
    case "Special Events":
      return <Topic data={specialEvents} icon="sparkles-outline" />;
    case "Money Banks":
      return <Topic data={moneyAndBanks} icon="cash-outline" />;
    case "Communication Time":
      return <Topic data={communicationTime} icon="chatbubble-outline" />;
    case "Sports and fitness":
      return <Topic data={sportsAndFitness} icon="fitness-outline" />;
    case "Fashion and cloths":
      return <Topic data={fashionAndClothes} icon="shirt-outline" />;
    case "Friendship-Memories":
      return <Topic data={friendshipMemoriesEmotions} icon="heart-outline" />;
    default:
      return <div>Topic not found</div>;
  }
};



export default ConversationController;
