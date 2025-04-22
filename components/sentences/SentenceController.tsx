import React from "react";
import { StyleSheet, View } from "react-native";
import ShowSentences from "./ShowSentences";
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

const SentenceController = ({ topic }: { topic: string }) => {
  switch (topic) {
    case "Greetings":
      return <ShowSentences sentences={greetings} />;
    case "Common Questions":
      return <ShowSentences sentences={commonQuestions} />;
    case "Number, Money":
      return <ShowSentences sentences={numberMoney} />;
    case "Time and Date":
      return <ShowSentences sentences={timeAndDate} />;
    case "Weather":
      return <ShowSentences sentences={weather} />;
    case "Family Members":
      return <ShowSentences sentences={familyMembers} />;
    case "Occupations":
      return <ShowSentences sentences={occupations} />;
    case "Daily Routine":
      return <ShowSentences sentences={dailyRoutine} />;
    case "Hobbies":
      return <ShowSentences sentences={hobbies} />;
    case "Food and Drink":
      return <ShowSentences sentences={foodAndDrink} />;
    case "Shopping":
      return <ShowSentences sentences={shoppingSentences} />;
    case "Directions":
      return <ShowSentences sentences={directions} />;
    case "Transportation":
      return <ShowSentences sentences={transportation} />;
    case "At School":
      return <ShowSentences sentences={atSchool} />;
    case "In the Classroom":
      return <ShowSentences sentences={inTheClassroom} />;
    case "Health and Illness":
      return <ShowSentences sentences={healthAndIllness} />;
    case "At the Doctor":
      return <ShowSentences sentences={atTheDoctor} />;
    case "At the Market":
      return <ShowSentences sentences={atTheMarket} />;
    case "At the Restaurant":
      return <ShowSentences sentences={atTheRestaurant} />;
    case "Clothing and Fashion":
      return <ShowSentences sentences={clothingAndFashion} />;
    case "Holidays and Celebrations":
      return <ShowSentences sentences={holidaysAndCelebrations} />;
    case "Emotions and Feelings":
      return <ShowSentences sentences={emotionsAndFeelings} />;
    case "Technology":
      return <ShowSentences sentences={technology} />;
    case "Sports":
      return <ShowSentences sentences={sports} />;
    case "Travel and Places":
      return <ShowSentences sentences={travelAndPlaces} />;
    case "Describing People":
      return <ShowSentences sentences={describingPeople} />;
    case "Describing Things":
      return <ShowSentences sentences={describingThings} />;
    case "Animals":
      return <ShowSentences sentences={animals} />;
    case "Environment":
      return <ShowSentences sentences={environment} />;
    case "Colors and Shapes":
      return <ShowSentences sentences={colorsAndShapes} />;
    case "Home and Furniture":
      return <ShowSentences sentences={homeAndFurniture} />;
    case "Rooms in a House":
      return <ShowSentences sentences={roomsInAHouse} />;
    case "Jobs and Workplaces":
      return <ShowSentences sentences={jobsAndWorkplaces} />;
    case "School Subjects":
      return <ShowSentences sentences={schoolSubjects} />;
    case "Verbs and Actions":
      return <ShowSentences sentences={verbsAndActions} />;
    case "Adjectives and Opposites":
      return <ShowSentences sentences={adjectivesAndOpposites} />;
    case "Prepositions":
      return <ShowSentences sentences={prepositions} />;
    case "Conjunctions":
      return <ShowSentences sentences={conjunctions} />;
    case "Making Suggestions":
      return <ShowSentences sentences={makingSuggestions} />;
    case "Asking for Help":
      return <ShowSentences sentences={askingForHelp} />;
    case "Apologizing":
      return <ShowSentences sentences={apologizing} />;
    case "Making Invitations":
      return <ShowSentences sentences={makingInvitations} />;
    case "Agreeing and Disagreeing":
      return <ShowSentences sentences={agreeingAndDisagreeing} />;
    case "Giving Opinions":
      return <ShowSentences sentences={givingOpinions} />;
    case "Telling Stories":
      return <ShowSentences sentences={tellingStories} />;
    case "Future Plans":
      return <ShowSentences sentences={futurePlans} />;
    case "Past Events":
      return <ShowSentences sentences={pastEvents} />;
    case "Hopes and Dreams":
      return <ShowSentences sentences={hopesAndDreams} />;
    case "Phone Conversations":
      return <ShowSentences sentences={phoneConversations} />;
    case "Online Communication":
      return <ShowSentences sentences={onlineCommunication} />;
    default:
      return <div>Topic not found</div>;
  }
};

const styles = StyleSheet.create({});

export default SentenceController;
