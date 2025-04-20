import React, { useEffect } from "react";
import { Text } from "react-native";

import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import * as Speech from "expo-speech";

import Topic from "@/components/common/Topic";
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
import GREWords from "@/components/vocabulary/GREWords";
import LikedGREWords from "@/components/vocabulary/LikedGREWords";

export default function App() {
  const navigation = useNavigation();
  const { topic } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };

  console.log(topic);

  useEffect(() => {
    if (topic) {
      navigation.setOptions({ title: decodeURIComponent(topic as string) });
    }
  }, [topic]);

  if (topic === "Education") {
    return <Topic data={education} icon={"school-outline"} />;
  }
  if (topic === "Daily Life") {
    return <Topic data={dailylife} icon={"calendar-outline"} />;
  }

  if (topic === "House and Home") {
    return <Topic data={homeandhouse} icon={"home-outline"} />;
  }
  if (topic === "Family") {
    return <Topic data={family} icon={"people-outline"} />;
  }
  if (topic === "Shopping") {
    return <Topic data={shopping} icon={"cart-outline"} />;
  }
  if (topic === "Health") {
    return <Topic data={health} icon={"medkit-outline"} />;
  }
  if (topic === "Food and Restaurant") {
    return <Topic data={foodandrestaurant} icon={"restaurant-outline"} />;
  }
  if (topic === "Travel-Transport") {
    return <Topic data={travelTransport} icon={"bus-outline"} />;
  }
  if (topic === "Environment and Nature") {
    return <Topic data={environmentNature} icon={"leaf-outline"} />;
  }
  if (topic === "Works-Jobs and Office") {
    return <Topic data={workJobsOffice} icon={"briefcase-outline"} />;
  }
  if (topic === "Entertainment-Media") {
    return <Topic data={entertainmentMedia} icon={"tv-outline"} />;
  }
  if (topic === "Special Events") {
    return <Topic data={specialEvents} icon={"sparkles-outline"} />;
  }

  if (topic === "Special Events") {
    return <Topic data={specialEvents} icon={"sparkles-outline"} />;
  }
  if (topic === "Money Banks") {
    return <Topic data={moneyAndBanks} icon={"cash-outline"} />;
  }
  if (topic === "Communication Time") {
    return <Topic data={communicationTime} icon={"chatbubble-outline"} />;
  }
  if (topic === "Sports and fitness") {
    return <Topic data={sportsAndFitness} icon={"fitness-outline"} />;
  }
  if (topic === "Fashion and cloths") {
    return <Topic data={fashionAndClothes} icon={"shirt-outline"} />;
  }

  if (topic === "Friendship-Memories") {
    return <Topic data={friendshipMemoriesEmotions} icon={"heart-outline"} />;
  }

  if (topic === "1900 Daily/GRE Words") {
    return <GREWords />;
  }
  if (topic === "liked-gre-words") {
    return <LikedGREWords />;
  }

  return <Text> NO DATA </Text>;
}
