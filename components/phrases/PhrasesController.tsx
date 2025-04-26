import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { askingForDirectionsPhrases, atTheAirportPhrases, atTheHotelPhrases, celebrationsAndHolidaysPhrases, emergencySituationsPhrases, expressingOpinionsPhrases, greetingsPhrases, healthAndWellnessPhrases, hobbiesAndInterestsPhrases, introductionsPhrases, makingRequestsPhrases, orderingFoodPhrases, politeExpressionsPhrases, shoppingPhrases, socializingPhrases, talkingAboutWeatherPhrases, timeAndDatesPhrases, transportationPhrases, travelingPhrases, workAndCareerPhrases } from "@/assets/data/phrases/phrasesData";

import ShowData from "../common/ShowData";
import ShowLovedData from "../common/ShowLovedData";

const PhrasesController = ({ topic }: any) => {

  switch (topic) {
    case "Greetings":
      return <ShowData dataList={greetingsPhrases} storageKey="LovedPhraseGreetings" />;
    case "Introductions":
      return <ShowData dataList={introductionsPhrases} storageKey="LovedPhraseIntroductions" />;
    case "Polite Expressions":
      return <ShowData dataList={politeExpressionsPhrases} storageKey="LovedPhrasePoliteExpressions" />;
    case "Ordering Food":
      return <ShowData dataList={orderingFoodPhrases} storageKey="LovedPhraseOrderingFood" />;
    case "Asking for Directions":
      return <ShowData dataList={askingForDirectionsPhrases} storageKey="LovedPhraseDirections" />;
    case "Shopping":
      return <ShowData dataList={shoppingPhrases} storageKey="LovedPhraseShopping" />;
    
    case "Making Requests":
      return <ShowData dataList={makingRequestsPhrases} storageKey="LovedPhraseRequests" />;
    case "Expressing Opinions":
      return <ShowData dataList={expressingOpinionsPhrases} storageKey="LovedPhraseOpinions" />;
    case "Talking About Weather":
      return <ShowData dataList={talkingAboutWeatherPhrases} storageKey="LovedPhraseWeather" />;
    case "At the Airport":
      return <ShowData dataList={atTheAirportPhrases} storageKey="LovedPhraseAirport" />;
      case "At the Hotel":
        return <ShowData dataList={atTheHotelPhrases} storageKey="LovedPhraseHotel" />;
   
    case "Transportation":
      return <ShowData dataList={transportationPhrases} storageKey="LovedPhraseTransportation" />;
    case "Emergency Situations":
      return <ShowData dataList={emergencySituationsPhrases} storageKey="LovedPhraseSituations" />;
    case "Hobbies and Interests":
      return <ShowData dataList={hobbiesAndInterestsPhrases} storageKey="LovedPhraseInterests" />;
    case "Traveling":
      return <ShowData dataList={travelingPhrases} storageKey="LovedPhraseTraveling" />;
    case "Time and Dates":
      return <ShowData dataList={timeAndDatesPhrases} storageKey="LovedPhraseDates" />;
   
    case "Health and Wellness":
      return <ShowData dataList={healthAndWellnessPhrases} storageKey="LovedPhraseWellness" />;
    case "Work and Career":
      return <ShowData dataList={workAndCareerPhrases} storageKey="LovedPhraseCareer" />;
    case "Socializing":
      return <ShowData dataList={socializingPhrases} storageKey="LovedPhraseSocializing" />;
    case "Celebrations and Holidays":
      return <ShowData dataList={celebrationsAndHolidaysPhrases} storageKey="LovedPhraseHolidays" />;
    


      case "❤️ Phrases Greetings":
        return <ShowLovedData header="Greetings"   dataList={greetingsPhrases} storageKey="LovedPhraseGreetings" />;
      case "❤️ Phrases Introductions":
        return <ShowLovedData header="Introductions" dataList={introductionsPhrases} storageKey="LovedPhraseIntroductions" />;
      case "❤️ Phrases PoliteExpressions":
        return <ShowLovedData header="Polite Expressions" dataList={politeExpressionsPhrases} storageKey="LovedPhrasePoliteExpressions" />;
      case "❤️ Phrases OrderingFood":
        return <ShowLovedData header="Ordering Food" dataList={orderingFoodPhrases} storageKey="LovedPhraseOrderingFood" />;
      case "❤️ Phrases Directions":
        return <ShowLovedData header="Asking for Directions" dataList={askingForDirectionsPhrases} storageKey="LovedPhraseDirections" />;
      case "❤️ Phrases Shopping":
        return <ShowLovedData header="Shopping" dataList={shoppingPhrases} storageKey="LovedPhraseShopping" />;
      case "❤️ Phrases Requests":
        return <ShowLovedData header="Making Requests" dataList={makingRequestsPhrases} storageKey="LovedPhraseRequests" />;
      case "❤️ Phrases Opinions":
        return <ShowLovedData header="Expressing Opinions" dataList={expressingOpinionsPhrases} storageKey="LovedPhraseOpinions" />;
      case "❤️ Phrases Weather":
        return <ShowLovedData header="Talking About Weather" dataList={talkingAboutWeatherPhrases} storageKey="LovedPhraseWeather" />;
      case "❤️ Phrases Airport":
        return <ShowLovedData header="At the Airport" dataList={atTheAirportPhrases} storageKey="LovedPhraseAirport" />;
      case "❤️ Phrases Hotel":
        return <ShowLovedData header="At the Hotel" dataList={atTheHotelPhrases} storageKey="LovedPhraseHotel" />;
      case "❤️ Phrases Transportation":
        return <ShowLovedData header="Transportation" dataList={transportationPhrases} storageKey="LovedPhraseTransportation" />;
      case "❤️ Phrases Situations":
        return <ShowLovedData header="Emergency Situations" dataList={emergencySituationsPhrases} storageKey="LovedPhraseSituations" />;
      case "❤️ Phrases Interests":
        return <ShowLovedData header="Hobbies and Interests" dataList={hobbiesAndInterestsPhrases} storageKey="LovedPhraseInterests" />;
      case "❤️ Phrases Traveling":
        return <ShowLovedData header="Traveling" dataList={travelingPhrases} storageKey="LovedPhraseTraveling" />;
      case "❤️ Phrases Dates":
        return <ShowLovedData header="Time and Dates" dataList={timeAndDatesPhrases} storageKey="LovedPhraseDates" />;
      case "❤️ Phrases Wellness":
        return <ShowLovedData header="Health and Wellness" dataList={healthAndWellnessPhrases} storageKey="LovedPhraseWellness" />;
      case "❤️ Phrases Career":
        return <ShowLovedData header="Work and Career" dataList={workAndCareerPhrases} storageKey="LovedPhraseCareer" />;
      case "❤️ Phrases Socializing":
        return <ShowLovedData header="Socializing" dataList={socializingPhrases} storageKey="LovedPhraseSocializing" />;
      case "❤️ Phrases Holidays":
        return <ShowLovedData header="Celebrations and Holidays" dataList={celebrationsAndHolidaysPhrases} storageKey="LovedPhraseHolidays" />;
    
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
