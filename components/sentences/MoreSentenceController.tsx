import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ShowSentences from "./ShowSentences";
import {
  academicVocabulary,
  airportConversations,
  artificialIntelligence,
  askingForFeedback,
  businessMeetings,
  conflictResolution,
  culturalSensitivity,
  customerServiceScenarios,
  cybersecurityVocabulary,
  debateSkills,
  describingExperiences,
  disagreeingPolitely,
  emailEtiquette,
  environmentalIssues,
  eventPlanning,
  explainingProcedures,
  financialEnglish,
  futurePredictions,
  givingFeedback,
  givingPresentations,
  hostingGuests,
  hotelAndTravelBooking,
  immigrationAndCustoms,
  insuranceAndClaims,
  jobInterviews,
  leadershipAndManagement,
  legalConversations,
  makingApologies,
  marketingAndAdvertising,
  medicalEnglish,
  mentalHealthConversations,
  negotiationSkills,
  networkingEvents,
  officeAndAdminVocabulary,
  orderingOnline,
  persuasiveSpeaking,
  phoneAndChatSupport,
  projectManagement,
  remoteWorkEnglish,
  restaurantCafeEnglish,
  resumeAndCVWriting,
  scientificDiscussions,
  shoppingInMalls,
  socialMediaLanguage,
  startupAndEntrepreneurship,
  teamCollaboration,
  technologyAndInnovation,
  techSupportConversations,
  tourGuideEnglish,
  workplaceCommunication,
} from "@/assets/data/sentences/moreSentences";

const MoreSentenceController = ({ topic }: { topic: string }) => {
  switch (topic) {
    case "Academic Vocabulary in Use":
      return <ShowSentences sentences={academicVocabulary} />;
    case "Business Meetings":
      return <ShowSentences sentences={businessMeetings} />;
    case "Startup and Entrepreneurship":
      return <ShowSentences sentences={startupAndEntrepreneurship} />;

    case "Marketing and Advertising":
      return <ShowSentences sentences={marketingAndAdvertising} />;
    case "Job Interviews":
      return <ShowSentences sentences={jobInterviews} />;
    case "Resume and CV Writing":
      return <ShowSentences sentences={resumeAndCVWriting} />;
    case "Networking Events":
      return <ShowSentences sentences={networkingEvents} />;
    case "Project Management":
      return <ShowSentences sentences={projectManagement} />;
    case "Workplace Communication":
      return <ShowSentences sentences={workplaceCommunication} />;
    case "Email Etiquette":
      return <ShowSentences sentences={emailEtiquette} />;
    case "Giving Presentations":
      return <ShowSentences sentences={givingPresentations} />;
    case "Customer Service Scenarios":
      return <ShowSentences sentences={customerServiceScenarios} />;
    case "Conflict Resolution":
      return <ShowSentences sentences={conflictResolution} />;
    case "Team Collaboration":
      return <ShowSentences sentences={teamCollaboration} />;
    case "Office and Admin Vocabulary":
      return <ShowSentences sentences={officeAndAdminVocabulary} />;
    case "Leadership and Management":
      return <ShowSentences sentences={leadershipAndManagement} />;
    case "Financial English":
      return <ShowSentences sentences={financialEnglish} />;
    case "Legal Conversations":
      return <ShowSentences sentences={legalConversations} />;
    case "Insurance and Claims":
      return <ShowSentences sentences={insuranceAndClaims} />;
    case "Medical English":
      return <ShowSentences sentences={medicalEnglish} />;
    case "Mental Health Conversations":
      return <ShowSentences sentences={mentalHealthConversations} />;
    case "Hotel and Travel Booking":
      return <ShowSentences sentences={hotelAndTravelBooking} />;
    case "Airport Conversations":
      return <ShowSentences sentences={airportConversations} />;
    case "Immigration and Customs":
      return <ShowSentences sentences={immigrationAndCustoms} />;
    case "Tour Guide English":
      return <ShowSentences sentences={tourGuideEnglish} />;
    case "Restaurant and Café English":
      return <ShowSentences sentences={restaurantCafeEnglish} />;
    case "Shopping in Malls":
      return <ShowSentences sentences={shoppingInMalls} />;
    case "Ordering Online":
      return <ShowSentences sentences={orderingOnline} />;
    case "Tech Support Conversations":
      return <ShowSentences sentences={techSupportConversations} />;
    case "Phone and Chat Support":
      return <ShowSentences sentences={phoneAndChatSupport} />;
    case "Asking for Feedback":
      return <ShowSentences sentences={askingForFeedback} />;
    case "Giving Feedback":
      return <ShowSentences sentences={givingFeedback} />;
    case "Event Planning":
      return <ShowSentences sentences={eventPlanning} />;
    case "Hosting Guests":
      return <ShowSentences sentences={hostingGuests} />;
    case "Describing Experiences":
      return <ShowSentences sentences={describingExperiences} />;
    case "Explaining Procedures":
      return <ShowSentences sentences={explainingProcedures} />;
    case "Making Apologies":
      return <ShowSentences sentences={makingApologies} />;
    case "Disagreeing Politely":
      return <ShowSentences sentences={disagreeingPolitely} />;
    case "Negotiation Skills":
      return <ShowSentences sentences={negotiationSkills} />;
    case "Persuasive Speaking":
      return <ShowSentences sentences={persuasiveSpeaking} />;
    case "Debate Skills":
      return <ShowSentences sentences={debateSkills} />;
    case "Scientific Discussions":
      return <ShowSentences sentences={scientificDiscussions} />;
    case "Environmental Issues":
      return <ShowSentences sentences={environmentalIssues} />;
    case "Technology and Innovation":
      return <ShowSentences sentences={technologyAndInnovation} />;
    case "Social Media Language":
      return <ShowSentences sentences={socialMediaLanguage} />;
    case "Cybersecurity Vocabulary":
      return <ShowSentences sentences={cybersecurityVocabulary} />;
    case "Artificial Intelligence":
      return <ShowSentences sentences={artificialIntelligence} />;
    case "Remote Work English":
      return <ShowSentences sentences={remoteWorkEnglish} />;
    case "Cultural Sensitivity":
      return <ShowSentences sentences={culturalSensitivity} />;
    case "Future Predictions":
      return <ShowSentences sentences={futurePredictions} />;

    default:
      return <Text>Topic not found</Text>;
  }
};

const styles = StyleSheet.create({});

export default MoreSentenceController;
