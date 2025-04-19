import Conversation from "@/components/common/Conversation";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import {
  afterSchoolActivities,
  artClassFun,
  askingQuestionsInClass,
  classroomRules,
  doingHomework,
  endOfTheSchoolYear,
  fieldTrips,
  firstDayAtSchool,
  gettingGoodGrades,
  groupProjects,
  learningOnline,
  libraryVisit,
  lunchTimeAtSchool,
  meetingNewFriends,
  meetingThePrincipal,
  myFavoriteSubject,
  parentTeacherMeeting,
  recessAndBreakTime,
  schoolAssembly,
  schoolBusRide,
  schoolSupplies,
  scienceLab,
  sportsDay,
  studyingForExams,
  talkingToTheTeacher,
  wearingSchoolUniform,
  welcomeToOurSchool,
  writingEssays,
} from "@/assets/data/conversations/education";
const Education = () => {
  const { id } = useLocalSearchParams();

  const idString = Array.isArray(id) ? id[0] : id; // Ensure id is a string
  return <Conversation data={conversation(idString) || []} />;
};

export default Education;

function conversation(id: string) {
  switch (id) {
    case "1":
      return firstDayAtSchool;
    case "2":
      // handle Welcome to School
      return welcomeToOurSchool;
    case "3":
      // handle Classroom Rules
      return classroomRules;
    case "4":
      return meetingNewFriends;
    // handle Meeting New Friends
    case "5":
      return myFavoriteSubject;
    case "6":
      return schoolSupplies;
    case "7":
      return askingQuestionsInClass;
    case "8":
      return doingHomework;
    case "9":
      return talkingToTheTeacher;
    case "10":
      return gettingGoodGrades;
    case "11":
      return libraryVisit;
    case "12":
      return learningOnline;
    case "13":
      return studyingForExams;
    case "14":
      return groupProjects;
    case "15":
      return fieldTrips;
    case "16":
      return schoolAssembly;
    case "17":
      return recessAndBreakTime;
    case "18":
      return writingEssays;
    case "19":
      return scienceLab;
    case "20":
      return endOfTheSchoolYear;
    case "21":
      return schoolBusRide;
    case "22":
      return lunchTimeAtSchool;
    case "23":
      return meetingThePrincipal;
    case "24":
      return parentTeacherMeeting;
    case "25":
      return wearingSchoolUniform;
    case "26":
      return afterSchoolActivities;
    case "27":
      return sportsDay;
    case "28":
      return artClassFun;

    default:
      // handle unknown slug
      return null;
  }
}
