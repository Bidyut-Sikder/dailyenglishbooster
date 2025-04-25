import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ShowIdioms from "./ShowIdioms";
import { ageIdioms, animalsIdioms, bodyPartsIdioms, businessIdioms, clothesIdioms, colorsIdioms, dailyLifeIdioms, deathIdioms, directionsIdioms, emotionsIdioms, familyIdioms, feelingsIdioms, foodIdioms, friendshipIdioms, healthIdioms, learningIdioms, loveIdioms, moneyIdioms, natureIdioms, numbersIdioms, peopleIdioms, relationshipsIdioms, schoolIdioms, sportsIdioms, successIdioms, technologyIdioms, timeIdioms, travelIdioms, weatherIdioms, workIdioms } from "@/assets/data/idioms/idiomsData";
import ShowFavoriteIdioms from "./ShowFavoritesIdioms";

const IdiomsController = ({ topic }: any) => {
  switch (topic) {
    case "Age":
      return <ShowIdioms dataList={ageIdioms} storageKey="LovedAge" />;
    case "Animals":
      return <ShowIdioms dataList={animalsIdioms} storageKey="LovedAnimals" />;
    case "Business":
      return <ShowIdioms dataList={businessIdioms} storageKey="LovedBusiness" />;
    case "Clothes":
      return <ShowIdioms dataList={clothesIdioms} storageKey="LovedClothes" />;
    case "Colors":
      return <ShowIdioms dataList={colorsIdioms} storageKey="LovedColors" />;
    case "Death":
      return <ShowIdioms dataList={deathIdioms} storageKey="LovedDeath" />;
    case "Emotions":
      return <ShowIdioms dataList={emotionsIdioms} storageKey="LovedEmotions" />;
    case "Family":
      return <ShowIdioms dataList={familyIdioms} storageKey="LovedFamily" />;
    case "Food":
      return <ShowIdioms dataList={foodIdioms} storageKey="LovedFood" />;
    case "Health":
      return <ShowIdioms dataList={healthIdioms} storageKey="LovedHealth" />;
      case "Love":
        return <ShowIdioms dataList={loveIdioms} storageKey="LovedLove" />;
    case "Money":
      return <ShowIdioms dataList={moneyIdioms} storageKey="LovedMoney" />;
    case "Nature":
      return <ShowIdioms dataList={natureIdioms} storageKey="LovedNature" />;
    case "Numbers":
      return <ShowIdioms dataList={numbersIdioms} storageKey="LovedNumbers" />;
    case "People":
      return <ShowIdioms dataList={peopleIdioms} storageKey="LovedPeople" />;
    case "Relationships":
      return <ShowIdioms dataList={relationshipsIdioms} storageKey="LovedRelationships" />;
    case "School":
      return <ShowIdioms dataList={schoolIdioms} storageKey="LovedSchool" />;
    case "Sports":
      return <ShowIdioms dataList={sportsIdioms} storageKey="LovedSports" />;
    case "Technology":
      return <ShowIdioms dataList={technologyIdioms} storageKey="LovedTechnology" />;
    case "Time":
      return <ShowIdioms dataList={timeIdioms} storageKey="LovedTime" />;
    case "Travel":
      return <ShowIdioms dataList={travelIdioms} storageKey="LovedTravel" />;
    case "Weather":
      return <ShowIdioms dataList={weatherIdioms} storageKey="LovedWeather" />;
    case "Work":
      return <ShowIdioms dataList={workIdioms} storageKey="LovedWork" />;
    case "Body Parts":
      return <ShowIdioms dataList={bodyPartsIdioms} storageKey="LovedBody Parts" />;
    case "Daily Life":
      return <ShowIdioms dataList={dailyLifeIdioms} storageKey="LovedDaily Life" />;
    case "Directions":
      return <ShowIdioms dataList={directionsIdioms} storageKey="LovedDirections" />;
    case "Feelings":
      return <ShowIdioms dataList={feelingsIdioms} storageKey="LovedFeelings" />;
    case "Friendship":
      return <ShowIdioms dataList={friendshipIdioms} storageKey="LovedFriendship" />;
   
    case "Learning":
      return <ShowIdioms dataList={learningIdioms} storageKey="LovedLearning" />;
    case "Success":
      return <ShowIdioms dataList={successIdioms} storageKey="LovedSuccess" />;


      case "❤️ Age":
        return <ShowFavoriteIdioms  dataList={ageIdioms} storageKey="LovedAge" />;
      case "❤️ Animals":
        return <ShowFavoriteIdioms dataList={animalsIdioms} storageKey="LovedAnimals" />;
      case "❤️ Business":
        return <ShowFavoriteIdioms dataList={businessIdioms} storageKey="LovedBusiness" />;
      case "❤️ Clothes":
        return <ShowFavoriteIdioms dataList={clothesIdioms} storageKey="LovedClothes" />;
      case "❤️ Colors":
        return <ShowFavoriteIdioms dataList={colorsIdioms} storageKey="LovedColors" />;
      case "❤️ Death":
        return <ShowFavoriteIdioms dataList={deathIdioms} storageKey="LovedDeath" />;
      case "❤️ Emotions":
        return <ShowFavoriteIdioms dataList={emotionsIdioms} storageKey="LovedEmotions" />;
      case "❤️ Family":
        return <ShowFavoriteIdioms dataList={familyIdioms} storageKey="LovedFamily" />;
      case "❤️ Food":
        return <ShowFavoriteIdioms dataList={foodIdioms} storageKey="LovedFood" />;
      case "❤️ Health":
        return <ShowFavoriteIdioms dataList={healthIdioms} storageKey="LovedHealth" />;
      case "❤️ Money":
        return <ShowFavoriteIdioms dataList={moneyIdioms} storageKey="LovedMoney" />;
      case "❤️ Nature":
        return <ShowFavoriteIdioms dataList={natureIdioms} storageKey="LovedNature" />;
      case "❤️ Numbers":
        return <ShowFavoriteIdioms dataList={numbersIdioms} storageKey="LovedNumbers" />;
      case "❤️ People":
        return <ShowFavoriteIdioms dataList={peopleIdioms} storageKey="LovedPeople" />;
      case "❤️ Relationships":
        return <ShowFavoriteIdioms dataList={relationshipsIdioms} storageKey="LovedRelationships" />;
      case "❤️ School":
        return <ShowFavoriteIdioms dataList={schoolIdioms} storageKey="LovedSchool" />;
      case "❤️ Sports":
        return <ShowFavoriteIdioms dataList={sportsIdioms} storageKey="LovedSports" />;
      case "❤️ Technology":
        return <ShowFavoriteIdioms dataList={technologyIdioms} storageKey="LovedTechnology" />;
      case "❤️ Time":
        return <ShowFavoriteIdioms dataList={timeIdioms} storageKey="LovedTime" />;
      case "❤️ Travel":
        return <ShowFavoriteIdioms dataList={travelIdioms} storageKey="LovedTravel" />;
      case "❤️ Weather":
        return <ShowFavoriteIdioms dataList={weatherIdioms} storageKey="LovedWeather" />;
      case "❤️ Work":
        return <ShowFavoriteIdioms dataList={workIdioms} storageKey="LovedWork" />;
      case "❤️ Body Parts":
        return <ShowFavoriteIdioms dataList={bodyPartsIdioms} storageKey="LovedBody Parts" />;
      case "❤️ Daily Life":
        return <ShowFavoriteIdioms dataList={dailyLifeIdioms} storageKey="LovedDaily Life" />;
      case "❤️ Directions":
        return <ShowFavoriteIdioms dataList={directionsIdioms} storageKey="LovedDirections" />;
      case "❤️ Feelings":
        return <ShowFavoriteIdioms dataList={feelingsIdioms} storageKey="LovedFeelings" />;
      case "❤️ Friendship":
        return <ShowFavoriteIdioms dataList={friendshipIdioms} storageKey="LovedFriendship" />;
  
      case "❤️ Learning":
        return <ShowFavoriteIdioms dataList={learningIdioms} storageKey="LovedLearning" />;
      case "❤️ Success":
        return <ShowFavoriteIdioms dataList={successIdioms} storageKey="LovedSuccess" />;
  

    default:
      return <Text>No idioms available for this topic.</Text>;
      break;
  }
};

const styles = StyleSheet.create({});

export default IdiomsController;
