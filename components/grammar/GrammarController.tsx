import { ActionSheetIOS, StyleSheet, Text, View } from "react-native";
import React from "react";
import Nouns from "./Nouns";
import Pronouns from "./Pronouns";
import Verbs from "./Verbs";
import Adjectives from "./Adjectives";
import Adverbs from "./Adverbs";
import Prepositions from "./Prepositions";
import Conjunctions from "./Conjunctions";
import Interjections from "./Interjections";
import Articles from "./Articles";
import Tenses from "./Tenses";
import SubjectVerbAgreement from "./SubjectVerbAgreement";
import ActivePassiveVoice from "./Voice";
import DirectIndirectSpeech from "./IndirectSpeech";
import Punctuation from "./Punctuation";
import SentenceStructure from "./SentenceStructure";
import ConditionalSentences from "./ConditionalSentences";
import QuestionForms from "./QuestionForms";
import Modals from "./Modals";
import GerundsAndInfinitives from "./GerundsAndInfinitives";
import ComparativesAndSuperlatives from "./ComparativesAndSuperlative";
import RelativeClauses from "./RelativeClauses";
import Determiners from "./Determiners";
import CountableUncountableNouns from "./CountableAndUncountableNouns";
import Possessives from "./Possessives";
import QuestionTags from "./QuestionTags";
import Inversion from "./Inversion";
import CausativeVerbs from "./CausativeVerbs";
import ReportedQuestions from "./ReportedQuestions";
import EllipsisAndSubstitution from "./EllipsisAndSubstitution";
import Nominalisation from "./Nominalisation";
import DiscourseMarkers from "./DiscourseMarkers";
import ParallelStructure from "./ParallelStructure";
import Emphasis from "./Emphasis";
import WordOrder from "./WordOrder";
import CommonGrammaticalErrors from "./CommonGrammaticalErrors";

export default function GrammarController({ topic }: any) {
  switch (topic) {
    case "Nouns":
      return <Nouns />;
    // code for Nouns

    case "Pronouns":
      return <Pronouns />;

    // code for Pronouns

    case "Verbs":
      return <Verbs />;
    // code for Verbs

    case "Adjectives":
      return <Adjectives />;
    // code for Adjectives

    case "Adverbs":
      return <Adverbs />;
    // code for Adverbs

    case "Prepositions":
      return <Prepositions />;
    // code for Prepositions

    case "Conjunctions":
      return <Conjunctions />;
    // code for Conjunctions

    case "Interjections":
      return <Interjections />;
    // code for Interjections

    case "Articles":
      return <Articles />;
    // code for Articles

    case "Tenses":
      return <Tenses />;
    // code for Tenses

    case "Subject-Verb Agreement":
      return <SubjectVerbAgreement />;
    // code for Subject-Verb Agreement

    case "Active and Passive Voice":
      return <ActivePassiveVoice />;
    // code for Active and Passive Voice

    case "Direct and Indirect Speech":
      return <DirectIndirectSpeech />;
    // code for Direct and Indirect Speech

    case "Punctuation":
      return <Punctuation />;
    // code for Punctuation

    case "Sentence Structure":
      return <SentenceStructure />;
    // code for Sentence Structure

    case "Conditional Sentences":
      return <ConditionalSentences />;
    // code for Conditional Sentences

    case "Question Forms":
      return <QuestionForms />;
    // code for Question Forms

    case "Modals":
      return <Modals />;
    // code for Modals

    case "Gerunds and Infinitives":
      return <GerundsAndInfinitives />;
    // code for Gerunds and Infinitives

    case "Comparatives and Superlatives":
      return <ComparativesAndSuperlatives />;
    // code for Comparatives and Superlatives

    case "Relative Clauses":
      return <RelativeClauses />;
    // code for Relative Clauses

    case "Determiners":
      return <Determiners />;
    // code for Determiners

    case "Countable and Uncountable Nouns":
      return <CountableUncountableNouns />;
    // code for Countable and Uncountable Nouns

    case "Possessives":
      return <Possessives />;
    // code for Possessives

    case "Question Tags":
      return <QuestionTags />;
    // code for Question Tags

    case "Inversion":
      return <Inversion />;
    // code for Inversion

    case "Causative Verbs":
      return <CausativeVerbs />;
    // code for Causative Verbs

    case "Reported Questions":
      return <ReportedQuestions />;
    // code for Reported Questions

    case "Ellipsis and Substitution":
      return <EllipsisAndSubstitution />;
    // code for Ellipsis and Substitution

    case "Nominalisation":
      return <Nominalisation />;
    // code for Nominalisation

    case "Discourse Markers":
      return <DiscourseMarkers />;
    // code for Discourse Markers

    case "Parallel Structure":
      return <ParallelStructure />;
    // code for Parallel Structure

    case "Emphasis":
      return <Emphasis />;
    // code for Emphasis

    case "Word Order":
      return <WordOrder />;
    // code for Word Order

    case "Common Grammatical Errors":
      return <CommonGrammaticalErrors />;
    // code for Common Grammatical Errors

    default:
      return null;
  }
}

const styles = StyleSheet.create({});
