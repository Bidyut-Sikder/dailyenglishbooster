import CommunicationTime from "@/components/conversation/CommunicationTime";
import DailyLife from "@/components/conversation/DailyLife";
import Education from "@/components/conversation/Education";
import EntertainmentMedia from "@/components/conversation/EntertainmentMedia";
import EnvironmentAndNature from "@/components/conversation/EnvironmentAndNature";
import Family from "@/components/conversation/Family";
import FashionAndClothes from "@/components/conversation/FashionAndClothes";
import FoodAndRestaurant from "@/components/conversation/FoodAndRestaurant";
import FriendshipAndMemories from "@/components/conversation/FriendshipAndMemories";
import Health from "@/components/conversation/Health";
import HomeAndHouse from "@/components/conversation/HomeAndHouse";
import MoneyBank from "@/components/conversation/MoneyBank";
import Shopping from "@/components/conversation/Shopping";
import SpecialEvents from "@/components/conversation/SpecialEvents";
import SportsAndFitness from "@/components/conversation/SportsAndFitness";
import TravelTransport from "@/components/conversation/TravelAndTransport";
import WorksJobs from "@/components/conversation/WorksJobs";
import { useLocalSearchParams } from "expo-router";

const Index = () => {
  const { topic, id } = useLocalSearchParams();
  console.log(topic);
  if (topic === "Education") {
    return <Education />;
  }
  if (topic === "Daily Life") {
    return <DailyLife />;
  }

  if (topic === "Home and House") {
    return <HomeAndHouse />;
  }
  if (topic === "Family") {
    return <Family />;
  }

  if (topic === "Shopping") {
    return <Shopping />;
  }
  if (topic === "Health") {
    return <Health />;
  }
  if (topic === "Food and Restaurant") {
    return <FoodAndRestaurant />;
  }
  if (topic === "Travel and Transport") {
    return <TravelTransport />;
  }

  if (topic === "Environment and Nature") {
    return <EnvironmentAndNature />;
  }

  if (topic === "Works, Jobs, and Office") {
    return <WorksJobs />;
  }

  if (topic === "Entertainment and Media") {
    return <EntertainmentMedia />;
  }

  if (topic === "Special Events") {
    return <SpecialEvents />;
  }
  if (topic === "Money and Banks") {
    return <MoneyBank />;
  }
  //
  //
  if (topic === "Communication Time") {
    return <CommunicationTime />;
  }

  if (topic === "Sports and Fitness") {
    return <SportsAndFitness />;
  }
  if (topic === "Fashion and Clothes") {
    return <FashionAndClothes />;
  }
  if (topic === "Friendship, Memories, and Emotions") {
    return <FriendshipAndMemories />;
  }
  return null;
};

export default Index;
