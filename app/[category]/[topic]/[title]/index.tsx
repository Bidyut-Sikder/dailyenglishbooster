// const conversations = [
//   {
//     id: 1,
//     speaker: "A",
//     icon: "🧔",
//     message: "Hey! Are you ready for your first day of school?",
//   },
//   {
//     id: 2,
//     speaker: "B",
//     icon: "👨",
//     message: "Yes, I’m both excited and a little nervous!",
//   },
//   {
//     id: 3,
//     speaker: "A",
//     icon: "🧔",
//     message: "Don’t worry, it’s going to be a great experience.",
//   },
//   {
//     id: 4,
//     speaker: "B",
//     icon: "👨",
//     message: "Thanks! Do you remember your first day?",
//   },
//   {
//     id: 5,
//     speaker: "A",
//     icon: "🧔",
//     message: "Of course! I was scared at first, but then I made new friends.",
//   },
//   {
//     id: 6,
//     speaker: "B",
//     icon: "👨",
//     message: "I hope I can make friends quickly too.",
//   },
//   {
//     id: 7,
//     speaker: "A",
//     icon: "🧔",
//     message: "Just be yourself and smile. That helps a lot!",
//   },
//   {
//     id: 8,
//     speaker: "B",
//     icon: "👨",
//     message: "Good tip! I packed all my school supplies last night.",
//   },
//   {
//     id: 9,
//     speaker: "A",
//     icon: "🧔",
//     message: "Nice! What’s your favorite item in your backpack?",
//   },
//   {
//     id: 10,
//     speaker: "B",
//     icon: "👨",
//     message: "My new notebook with a cool superhero cover!",
//   },
//   {
//     id: 11,
//     speaker: "A",
//     icon: "🧔",
//     message: "That sounds awesome! What subject are you most excited about?",
//   },
//   {
//     id: 12,
//     speaker: "B",
//     icon: "👨",
//     message: "I think I’ll like science. I love doing experiments.",
//   },
//   {
//     id: 13,
//     speaker: "A",
//     icon: "🧔",
//     message: "You’ll enjoy it! Science class is always fun.",
//   },
//   {
//     id: 14,
//     speaker: "B",
//     icon: "👨",
//     message: "Do you think the teachers will be nice?",
//   },
//   {
//     id: 15,
//     speaker: "A",
//     icon: "🧔",
//     message: "Most teachers are kind and helpful, especially on the first day.",
//   },
//   {
//     id: 16,
//     speaker: "B",
//     icon: "👨",
//     message: "That makes me feel better. Thanks!",
//   },
//   {
//     id: 17,
//     speaker: "A",
//     icon: "🧔",
//     message: "You’ll also love recess and meeting classmates.",
//   },
//   {
//     id: 18,
//     speaker: "B",
//     icon: "👨",
//     message: "Yeah, I can’t wait to play during break time!",
//   },
//   {
//     id: 19,
//     speaker: "A",
//     icon: "🧔",
//     message: "Have fun, and don’t forget to ask questions if you’re confused.",
//   },
//   {
//     id: 20,
//     speaker: "B",
//     icon: "👨",
//     message: "I will. Thanks for all the support!",
//   },
// ];

import DailyLife from "@/components/conversation/DailyLife";
import Education from "@/components/conversation/Education";
import { useLocalSearchParams } from "expo-router";

// import Conversation from "@/components/common/Conversation";
// import React from "react";
// import { useLocalSearchParams, useNavigation } from "expo-router";
// import {
//   afterSchoolActivities,
//   artClassFun,
//   askingQuestionsInClass,
//   classroomRules,
//   doingHomework,
//   endOfTheSchoolYear,
//   fieldTrips,
//   firstDayAtSchool,
//   gettingGoodGrades,
//   groupProjects,
//   learningOnline,
//   libraryVisit,
//   lunchTimeAtSchool,
//   meetingNewFriends,
//   meetingThePrincipal,
//   myFavoriteSubject,
//   parentTeacherMeeting,
//   recessAndBreakTime,
//   schoolAssembly,
//   schoolBusRide,
//   schoolSupplies,
//   scienceLab,
//   sportsDay,
//   studyingForExams,
//   talkingToTheTeacher,
//   wearingSchoolUniform,
//   welcomeToOurSchool,
//   writingEssays,
// } from "@/assets/data/conversations/education";
// const Index = () => {
//   const { title,topic } = useLocalSearchParams();

//   console.log(topic)
//   const titleString = Array.isArray(title) ? title[0] : title; // Ensure title is a string

//   return <Conversation data={conversation(titleString) || []} />;
// };

// export default Index;
// function conversation(text: string) {
//   const title = text
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w\-]+/g, "");
//   switch (title) {
//     case "first-day-of-school":
//       return firstDayAtSchool;
//     case "welcome-to-school":
//       // handle Welcome to School
//       return welcomeToOurSchool;
//     case "classroom-rules":
//       // handle Classroom Rules
//       return classroomRules;
//     case "meeting-new-friends":
//       return meetingNewFriends;
//     // handle Meeting New Friends
//     case "my-favorite-subject":
//       return myFavoriteSubject;
//     // handle My Favorite Subject
//     case "school-supplies":
//       return schoolSupplies;
//     case "asking-questions-in-class":
//       return askingQuestionsInClass;
//     // handle Asking Questions in Class
//     case "doing-homework":
//       return doingHomework;
//     // handle Doing Homework
//     case "talking-to-the-teacher":
//       return talkingToTheTeacher;
//     // handle Talking to the Teacher
//     case "getting-good-grades":
//       return gettingGoodGrades;
//     // handle Getting Good Grades
//     case "library-visit":
//       return libraryVisit;
//     // handle Library Visit
//     case "learning-online":
//       return learningOnline;
//     // handle Learning Online
//     case "studying-for-exams":
//       return studyingForExams;
//     // handle Studying for Exams
//     case "group-projects":
//       return groupProjects;
//     // handle Group Projects
//     case "field-trips":
//       return fieldTrips;
//     // handle Field Trips
//     case "school-assembly":
//       return schoolAssembly;
//     // handle School Assembly
//     case "recess-and-break-time":
//       return recessAndBreakTime;
//     // handle Recess and Break Time
//     case "writing-essays":
//       return writingEssays;
//     // handle Writing Essays
//     case "science-lab":
//       return scienceLab;
//     // handle Science Lab
//     case "end-of-the-school-year":
//       return endOfTheSchoolYear;
//     // handle End of the School Year
//     case "school-bus-ride":
//       return schoolBusRide;
//     // handle School Bus Ride
//     case "lunch-time-at-school":
//       return lunchTimeAtSchool;
//     // handle Lunch Time at School
//     case "meeting-the-principal":
//       return meetingThePrincipal;
//     // handle Meeting the Principal
//     case "parent-teacher-meeting":
//       return parentTeacherMeeting;
//     // handle Parent-Teacher Meeting
//     case "wearing-school-uniform":
//       return wearingSchoolUniform;
//     // handle Wearing School Uniform
//     case "after-school-activities":
//       return afterSchoolActivities;
//     // handle After School Activities
//     case "sports-day":
//       return sportsDay;
//     // handle Sports Day
//     case "art-class-fun":
//       return artClassFun;
//     // handle Art Class Fun

//     default:
//       // handle unknown slug
//       return conversations;
//   }
// }

const Index = () => {
  const { topic,id } = useLocalSearchParams();
console.log(topic)
  if (topic === "Education") {
    return <Education />;
  }
if(topic === "Daily Life") {
  return <DailyLife />;
}

  return <Education />;
};


export default Index;