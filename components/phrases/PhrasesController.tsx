import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ageIdioms, animalsIdioms, bodyPartsIdioms, businessIdioms, clothesIdioms, colorsIdioms, dailyLifeIdioms, deathIdioms, directionsIdioms, emotionsIdioms, familyIdioms, feelingsIdioms, foodIdioms, friendshipIdioms, healthIdioms, learningIdioms, loveIdioms, moneyIdioms, natureIdioms, numbersIdioms, peopleIdioms, relationshipsIdioms, schoolIdioms, sportsIdioms, successIdioms, technologyIdioms, timeIdioms, travelIdioms, weatherIdioms, workIdioms } from "@/assets/data/idioms/idiomsData";
// import ShowFavoriteIdioms from "./ShowFavoritesIdioms";
import ShowPhrases from "./ShowPhrases";
import { askingForDirectionsPhrases, atTheAirportPhrases, atTheHotelPhrases, celebrationsAndHolidaysPhrases, emergencySituationsPhrases, expressingOpinionsPhrases, greetingsPhrases, healthAndWellnessPhrases, hobbiesAndInterestsPhrases, introductionsPhrases, makingRequestsPhrases, orderingFoodPhrases, politeExpressionsPhrases, shoppingPhrases, socializingPhrases, talkingAboutWeatherPhrases, timeAndDatesPhrases, transportationPhrases, travelingPhrases, workAndCareerPhrases } from "@/assets/data/phrases/phrasesData";
import ShowFavoritePhrases from "./ShowFavoritePhrases";

const PhrasesController = ({ topic }: any) => {

  switch (topic) {
    case "Greetings":
      return <ShowPhrases dataList={greetingsPhrases} storageKey="LovedPhraseGreetings" />;
    case "Introductions":
      return <ShowPhrases dataList={introductionsPhrases} storageKey="LovedPhraseIntroductions" />;
    case "Polite Expressions":
      return <ShowPhrases dataList={politeExpressionsPhrases} storageKey="LovedPhrasePoliteExpressions" />;
    case "Ordering Food":
      return <ShowPhrases dataList={orderingFoodPhrases} storageKey="LovedPhraseOrderingFood" />;
    case "Asking for Directions":
      return <ShowPhrases dataList={askingForDirectionsPhrases} storageKey="LovedPhraseDirections" />;
    case "Shopping":
      return <ShowPhrases dataList={shoppingPhrases} storageKey="LovedPhraseShopping" />;
    
    case "Making Requests":
      return <ShowPhrases dataList={makingRequestsPhrases} storageKey="LovedPhraseRequests" />;
    case "Expressing Opinions":
      return <ShowPhrases dataList={expressingOpinionsPhrases} storageKey="LovedPhraseOpinions" />;
    case "Talking About Weather":
      return <ShowPhrases dataList={talkingAboutWeatherPhrases} storageKey="LovedPhraseWeather" />;
    case "At the Airport":
      return <ShowPhrases dataList={atTheAirportPhrases} storageKey="LovedPhraseAirport" />;
      case "At the Hotel":
        return <ShowPhrases dataList={atTheHotelPhrases} storageKey="LovedPhraseHotel" />;
   
    case "Transportation":
      return <ShowPhrases dataList={transportationPhrases} storageKey="LovedPhraseTransportation" />;
    case "Emergency Situations":
      return <ShowPhrases dataList={emergencySituationsPhrases} storageKey="LovedPhraseSituations" />;
    case "Hobbies and Interests":
      return <ShowPhrases dataList={hobbiesAndInterestsPhrases} storageKey="LovedPhraseInterests" />;
    case "Traveling":
      return <ShowPhrases dataList={travelingPhrases} storageKey="LovedPhraseTraveling" />;
    case "Time and Dates":
      return <ShowPhrases dataList={timeAndDatesPhrases} storageKey="LovedPhraseDates" />;
   
    case "Health and Wellness":
      return <ShowPhrases dataList={healthAndWellnessPhrases} storageKey="LovedPhraseWellness" />;
    case "Work and Career":
      return <ShowPhrases dataList={workAndCareerPhrases} storageKey="LovedPhraseCareer" />;
    case "Socializing":
      return <ShowPhrases dataList={socializingPhrases} storageKey="LovedPhraseSocializing" />;
    case "Celebrations and Holidays":
      return <ShowPhrases dataList={celebrationsAndHolidaysPhrases} storageKey="LovedPhraseHolidays" />;
    


      case "❤️ Phrases Greetings":
        return <ShowFavoritePhrases header="Greetings"   dataList={greetingsPhrases} storageKey="LovedPhraseGreetings" />;
      case "❤️ Phrases Introductions":
        return <ShowFavoritePhrases header="Introductions" dataList={introductionsPhrases} storageKey="LovedPhraseIntroductions" />;
      case "❤️ Phrases PoliteExpressions":
        return <ShowFavoritePhrases header="Polite Expressions" dataList={politeExpressionsPhrases} storageKey="LovedPhrasePoliteExpressions" />;
      case "❤️ Phrases OrderingFood":
        return <ShowFavoritePhrases header="Ordering Food" dataList={orderingFoodPhrases} storageKey="LovedPhraseOrderingFood" />;
      case "❤️ Phrases Directions":
        return <ShowFavoritePhrases header="Asking for Directions" dataList={askingForDirectionsPhrases} storageKey="LovedPhraseDirections" />;
      case "❤️ Phrases Shopping":
        return <ShowFavoritePhrases header="Shopping" dataList={shoppingPhrases} storageKey="LovedPhraseShopping" />;
      case "❤️ Phrases Requests":
        return <ShowFavoritePhrases header="Making Requests" dataList={makingRequestsPhrases} storageKey="LovedPhraseRequests" />;
      case "❤️ Phrases Opinions":
        return <ShowFavoritePhrases header="Expressing Opinions" dataList={expressingOpinionsPhrases} storageKey="LovedPhraseOpinions" />;
      case "❤️ Phrases Weather":
        return <ShowFavoritePhrases header="Talking About Weather" dataList={talkingAboutWeatherPhrases} storageKey="LovedPhraseWeather" />;
      case "❤️ Phrases Airport":
        return <ShowFavoritePhrases header="At the Airport" dataList={atTheAirportPhrases} storageKey="LovedPhraseAirport" />;
      case "❤️ Phrases Hotel":
        return <ShowFavoritePhrases header="At the Hotel" dataList={atTheHotelPhrases} storageKey="LovedPhraseHotel" />;
      case "❤️ Phrases Transportation":
        return <ShowFavoritePhrases header="Transportation" dataList={transportationPhrases} storageKey="LovedPhraseTransportation" />;
      case "❤️ Phrases Situations":
        return <ShowFavoritePhrases header="Emergency Situations" dataList={emergencySituationsPhrases} storageKey="LovedPhraseSituations" />;
      case "❤️ Phrases Interests":
        return <ShowFavoritePhrases header="Hobbies and Interests" dataList={hobbiesAndInterestsPhrases} storageKey="LovedPhraseInterests" />;
      case "❤️ Phrases Traveling":
        return <ShowFavoritePhrases header="Traveling" dataList={travelingPhrases} storageKey="LovedPhraseTraveling" />;
      case "❤️ Phrases Dates":
        return <ShowFavoritePhrases header="Time and Dates" dataList={timeAndDatesPhrases} storageKey="LovedPhraseDates" />;
      case "❤️ Phrases Wellness":
        return <ShowFavoritePhrases header="Health and Wellness" dataList={healthAndWellnessPhrases} storageKey="LovedPhraseWellness" />;
      case "❤️ Phrases Career":
        return <ShowFavoritePhrases header="Work and Career" dataList={workAndCareerPhrases} storageKey="LovedPhraseCareer" />;
      case "❤️ Phrases Socializing":
        return <ShowFavoritePhrases header="Socializing" dataList={socializingPhrases} storageKey="LovedPhraseSocializing" />;
      case "❤️ Phrases Holidays":
        return <ShowFavoritePhrases header="Celebrations and Holidays" dataList={celebrationsAndHolidaysPhrases} storageKey="LovedPhraseHolidays" />;
    
    //   case "LovedWeather":
    //     return <ShowFavoriteIdioms dataList={weatherIdioms} storageKey="LovedWeather" />;
    //   case "LovedWork":
    //     return <ShowFavoriteIdioms dataList={workIdioms} storageKey="LovedWork" />;
    //   case "LovedBody Parts":
    //     return <ShowFavoriteIdioms dataList={bodyPartsIdioms} storageKey="LovedBody Parts" />;
    //   case "LovedDaily Life":
    //     return <ShowFavoriteIdioms dataList={dailyLifeIdioms} storageKey="LovedDaily Life" />;
    //   case "LovedDirections":
    //     return <ShowFavoriteIdioms dataList={directionsIdioms} storageKey="LovedDirections" />;
    //   case "LovedFeelings":
    //     return <ShowFavoriteIdioms dataList={feelingsIdioms} storageKey="LovedFeelings" />;
    //   case "LovedFriendship":
    //     return <ShowFavoriteIdioms dataList={friendshipIdioms} storageKey="LovedFriendship" />;
  
    //   case "LovedLearning":
    //     return <ShowFavoriteIdioms dataList={learningIdioms} storageKey="LovedLearning" />;
    //   case "LovedSuccess":
    //     return <ShowFavoriteIdioms dataList={successIdioms} storageKey="LovedSuccess" />;
  

    default:
      return <Text>No idioms available for this topic.</Text>;
      break;
  }
};

const styles = StyleSheet.create({});

export default PhrasesController;
