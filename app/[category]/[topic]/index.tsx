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

import ShowWords from "@/components/common/ShowWords";
import { commonWords } from "@/assets/data/vocabularies/commonWords";
import { grewords } from "@/assets/data/vocabularies/grewords";
import ShowLikedWords from "@/components/common/ShowLikedWords";
import { ieltsWords } from "@/assets/data/vocabularies/ielts";
import ShowSentences from "@/components/sentences/ShowSentences";
import {
  adjectivesAndOpposites,
  agreeingAndDisagreeing,
  animals,
  apologizing,
  askingForHelp,
  atSchool,
  atTheDoctor,
  atTheMarket,
  atTheRestaurant,
  clothingAndFashion,
  colorsAndShapes,
  commonQuestions,
  conjunctions,
  dailyRoutine,
  describingPeople,
  describingThings,
  directions,
  emotionsAndFeelings,
  environment,
  familyMembers,
  foodAndDrink,
  futurePlans,
  givingOpinions,
  greetings,
  healthAndIllness,
  hobbies,
  holidaysAndCelebrations,
  homeAndFurniture,
  hopesAndDreams,
  inTheClassroom,
  jobsAndWorkplaces,
  makingInvitations,
  makingSuggestions,
  numberMoney,
  occupations,
  onlineCommunication,
  pastEvents,
  phoneConversations,
  prepositions,
  roomsInAHouse,
  schoolSubjects,
  shoppingSentences,
  sports,
  technology,
  tellingStories,
  timeAndDate,
  transportation,
  travelAndPlaces,
  verbsAndActions,
  weather,
} from "@/assets/data/sentences/sentences";
import SentenceController from "@/components/sentences/SentenceController";

export default function App() {
  const navigation = useNavigation();
  const { category, topic } = useLocalSearchParams() as {
    category: string;
    topic: string;
  };

  console.log(category, ",", topic);

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

  if (topic === "500 Daily/GRE Words") {
    return <ShowWords wordList={grewords} storageKey={"lovedGreWords"} />;
  }
  if (topic === "liked-gre-words") {
    return (
      <ShowLikedWords
        wordList={grewords}
        title={"GRE"}
        storageKey={"lovedGreWords"}
      />
    );
  }
  if (topic === "450 Common Words") {
    return <ShowWords wordList={commonWords} storageKey={"lovedCommonWords"} />;
  }
  if (topic === "liked-common-words") {
    return (
      <ShowLikedWords
        wordList={commonWords}
        title={"Common"}
        storageKey={"lovedCommonWords"}
      />
    );
  }

  if (topic === "650 IELTS Words") {
    return <ShowWords wordList={ieltsWords} storageKey={"lovedIeltsWords"} />;
  }
  if (topic === "liked-ielts-words") {
    return (
      <ShowLikedWords
        wordList={ieltsWords}
        title={"IELTS"}
        storageKey={"lovedIeltsWords"}
      />
    );
  }

  /////////////////////////////
  if(category==='Everyday Sentences' ){
    return <SentenceController  topic={topic}/>

  }
    

  return <Text> NO DATA </Text>;
}
