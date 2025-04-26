import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ageIdioms, animalsIdioms, bodyPartsIdioms, businessIdioms, clothesIdioms, colorsIdioms, dailyLifeIdioms, deathIdioms, directionsIdioms, emotionsIdioms, familyIdioms, feelingsIdioms, foodIdioms, friendshipIdioms, healthIdioms, learningIdioms, loveIdioms, moneyIdioms, natureIdioms, numbersIdioms, peopleIdioms, relationshipsIdioms, schoolIdioms, sportsIdioms, successIdioms, technologyIdioms, timeIdioms, travelIdioms, weatherIdioms, workIdioms } from "@/assets/data/idioms/idiomsData";

import ShowData from "../common/ShowData";
import ShowLovedData from "../common/ShowLovedData";

const IdiomsController = ({ topic }: any) => {
  switch (topic) {
    case "Age":
      return <ShowData dataList={ageIdioms} storageKey="LovedAge" />;
    case "Animals":
      return <ShowData dataList={animalsIdioms} storageKey="LovedAnimals" />;
    case "Business":
      return <ShowData dataList={businessIdioms} storageKey="LovedBusiness" />;
    case "Clothes":
      return <ShowData dataList={clothesIdioms} storageKey="LovedClothes" />;
    case "Colors":
      return <ShowData dataList={colorsIdioms} storageKey="LovedColors" />;
    case "Death":
      return <ShowData dataList={deathIdioms} storageKey="LovedDeath" />;
    case "Emotions":
      return <ShowData dataList={emotionsIdioms} storageKey="LovedEmotions" />;
    case "Family":
      return <ShowData dataList={familyIdioms} storageKey="LovedFamily" />;
    case "Food":
      return <ShowData dataList={foodIdioms} storageKey="LovedFood" />;
    case "Health":
      return <ShowData dataList={healthIdioms} storageKey="LovedHealth" />;
      case "Love":
        return <ShowData dataList={loveIdioms} storageKey="LovedLove" />;
    case "Money":
      return <ShowData dataList={moneyIdioms} storageKey="LovedMoney" />;
    case "Nature":
      return <ShowData dataList={natureIdioms} storageKey="LovedNature" />;
    case "Numbers":
      return <ShowData dataList={numbersIdioms} storageKey="LovedNumbers" />;
    case "People":
      return <ShowData dataList={peopleIdioms} storageKey="LovedPeople" />;
    case "Relationships":
      return <ShowData dataList={relationshipsIdioms} storageKey="LovedRelationships" />;
    case "School":
      return <ShowData dataList={schoolIdioms} storageKey="LovedSchool" />;
    case "Sports":
      return <ShowData dataList={sportsIdioms} storageKey="LovedSports" />;
    case "Technology":
      return <ShowData dataList={technologyIdioms} storageKey="LovedTechnology" />;
    case "Time":
      return <ShowData dataList={timeIdioms} storageKey="LovedTime" />;
    case "Travel":
      return <ShowData dataList={travelIdioms} storageKey="LovedTravel" />;
    case "Weather":
      return <ShowData dataList={weatherIdioms} storageKey="LovedWeather" />;
    case "Work":
      return <ShowData dataList={workIdioms} storageKey="LovedWork" />;
    case "Body Parts":
      return <ShowData dataList={bodyPartsIdioms} storageKey="LovedBody Parts" />;
    case "Daily Life":
      return <ShowData dataList={dailyLifeIdioms} storageKey="LovedDaily Life" />;
    case "Directions":
      return <ShowData dataList={directionsIdioms} storageKey="LovedDirections" />;
    case "Feelings":
      return <ShowData dataList={feelingsIdioms} storageKey="LovedFeelings" />;
    case "Friendship":
      return <ShowData dataList={friendshipIdioms} storageKey="LovedFriendship" />;
   
    case "Learning":
      return <ShowData dataList={learningIdioms} storageKey="LovedLearning" />;
    case "Success":
      return <ShowData dataList={successIdioms} storageKey="LovedSuccess" />;


      case "❤️ Age":
        return <ShowLovedData  dataList={ageIdioms} storageKey="LovedAge" />;
      case "❤️ Animals":
        return <ShowLovedData dataList={animalsIdioms} storageKey="LovedAnimals" />;
      case "❤️ Business":
        return <ShowLovedData dataList={businessIdioms} storageKey="LovedBusiness" />;
      case "❤️ Clothes":
        return <ShowLovedData dataList={clothesIdioms} storageKey="LovedClothes" />;
      case "❤️ Colors":
        return <ShowLovedData dataList={colorsIdioms} storageKey="LovedColors" />;
      case "❤️ Death":
        return <ShowLovedData dataList={deathIdioms} storageKey="LovedDeath" />;
      case "❤️ Emotions":
        return <ShowLovedData dataList={emotionsIdioms} storageKey="LovedEmotions" />;
      case "❤️ Family":
        return <ShowLovedData dataList={familyIdioms} storageKey="LovedFamily" />;
      case "❤️ Food":
        return <ShowLovedData dataList={foodIdioms} storageKey="LovedFood" />;
      case "❤️ Health":
        return <ShowLovedData dataList={healthIdioms} storageKey="LovedHealth" />;
      case "❤️ Money":
        return <ShowLovedData dataList={moneyIdioms} storageKey="LovedMoney" />;
      case "❤️ Nature":
        return <ShowLovedData dataList={natureIdioms} storageKey="LovedNature" />;
      case "❤️ Numbers":
        return <ShowLovedData dataList={numbersIdioms} storageKey="LovedNumbers" />;
      case "❤️ People":
        return <ShowLovedData dataList={peopleIdioms} storageKey="LovedPeople" />;
      case "❤️ Relationships":
        return <ShowLovedData dataList={relationshipsIdioms} storageKey="LovedRelationships" />;
      case "❤️ School":
        return <ShowLovedData dataList={schoolIdioms} storageKey="LovedSchool" />;
      case "❤️ Sports":
        return <ShowLovedData dataList={sportsIdioms} storageKey="LovedSports" />;
      case "❤️ Technology":
        return <ShowLovedData dataList={technologyIdioms} storageKey="LovedTechnology" />;
      case "❤️ Time":
        return <ShowLovedData dataList={timeIdioms} storageKey="LovedTime" />;
      case "❤️ Travel":
        return <ShowLovedData dataList={travelIdioms} storageKey="LovedTravel" />;
      case "❤️ Weather":
        return <ShowLovedData dataList={weatherIdioms} storageKey="LovedWeather" />;
      case "❤️ Work":
        return <ShowLovedData dataList={workIdioms} storageKey="LovedWork" />;
      case "❤️ Body Parts":
        return <ShowLovedData dataList={bodyPartsIdioms} storageKey="LovedBody Parts" />;
      case "❤️ Daily Life":
        return <ShowLovedData dataList={dailyLifeIdioms} storageKey="LovedDaily Life" />;
      case "❤️ Directions":
        return <ShowLovedData dataList={directionsIdioms} storageKey="LovedDirections" />;
      case "❤️ Feelings":
        return <ShowLovedData dataList={feelingsIdioms} storageKey="LovedFeelings" />;
      case "❤️ Friendship":
        return <ShowLovedData dataList={friendshipIdioms} storageKey="LovedFriendship" />;
  
      case "❤️ Learning":
        return <ShowLovedData dataList={learningIdioms} storageKey="LovedLearning" />;
      case "❤️ Success":
        return <ShowLovedData dataList={successIdioms} storageKey="LovedSuccess" />;
  

    default:
      return <Text>No idioms available for this topic.</Text>;
      break;
  }
};

const styles = StyleSheet.create({});

export default IdiomsController;
