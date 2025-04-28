import { ActionSheetIOS, StyleSheet, Text, View } from "react-native";
import React from "react";
import GrammarTest from "./GrammarTest";
import { activePassiveVoiceTest, adjectivesTest, adverbsTest, articlesTest, causativeVerbsTest, commonGrammaticalErrorsTest, comparativesAndSuperlativesTest, conditionalSentencesTest, conjunctionsTest, countableUncountableNounsTest, determinersTest, directIndirectSpeechTest, discourseMarkersTest, ellipsisAndSubstitutionTest, emphasisTest, gerundsAndInfinitivesTest, interjectionsTest, inversionTest, modalsTest, nominalisationTest, nounsTest, parallelStructureTest, possessivesTest, prepositionsTest, pronounsTest, punctuationTest, questionFormsTest, questionTagsTest, relativeClausesTest, reportedQuestionsTest, sentenceStructureTest, subjectVerbAgreementTest, tensesTest, verbsTest, wordOrderTest } from "@/assets/data/grammarTest/grammarTesData";
import { academicVocabulary } from "@/assets/data/sentences/moreSentences";



export default function GrammarTestController({ topic }: any) {
  switch (topic) {
    case "Nouns":
      return <GrammarTest questionList={nounsTest} />
    // code for Nouns

    case "Pronouns":
      return <GrammarTest questionList={pronounsTest} />

    // // code for Pronouns

    case "Verbs":
      return <GrammarTest questionList={verbsTest} />
    // code for Verbs

    case "Adjectives":
      return <GrammarTest questionList={adjectivesTest} />
    // code for Adjectives

    case "Adverbs":
      return <GrammarTest questionList={adverbsTest} />
    // code for Adverbs

    case "Prepositions":
      return <GrammarTest questionList={prepositionsTest} />
    // code for Prepositions

    case "Conjunctions":
      return <GrammarTest questionList={conjunctionsTest} />
    // code for Conjunctions

    case "Interjections":
      return <GrammarTest questionList={interjectionsTest} />
    // code for Interjections

    case "Articles":
      return <GrammarTest questionList={articlesTest} />
    // code for Articles

    case "Tenses":
      return <GrammarTest questionList={tensesTest} />
    // code for Tenses

    case "Subject-Verb Agreement":
      return <GrammarTest questionList={subjectVerbAgreementTest} />
    // code for Subject-Verb Agreement

    case "Active and Passive Voice":
      return <GrammarTest questionList={activePassiveVoiceTest} />
    // code for Active and Passive Voice

    case "Direct and Indirect Speech":
      return  <GrammarTest questionList={directIndirectSpeechTest} />
    // // code for Direct and Indirect Speech

    case "Punctuation":
      return <GrammarTest questionList={punctuationTest} />
    // code for Punctuation

    case "Sentence Structure":
      return <GrammarTest questionList={sentenceStructureTest} />
    // code for Sentence Structure

    case "Conditional Sentences":
      return <GrammarTest questionList={conditionalSentencesTest} />
    // code for Conditional Sentences

    case "Question Forms":
      return <GrammarTest questionList={questionFormsTest} />
    // code for Question Forms

    case "Modals":
      return <GrammarTest questionList={modalsTest} />
    // code for Modals

    case "Gerunds and Infinitives":
      return <GrammarTest questionList={gerundsAndInfinitivesTest} />
    // code for Gerunds and Infinitives

    case "Comparatives and Superlatives":
      return <GrammarTest questionList={comparativesAndSuperlativesTest} />
    // code for Comparatives and Superlatives

    case "Relative Clauses":
      return <GrammarTest questionList={relativeClausesTest} />
    // code for Relative Clauses

    case "Determiners":
      return <GrammarTest questionList={determinersTest} />
    // code for Determiners

    case "Countable and Uncountable Nouns":
      return <GrammarTest questionList={countableUncountableNounsTest} />
    // code for Countable and Uncountable Nouns

    case "Possessives":
      return <GrammarTest questionList={possessivesTest} />
    // code for Possessives

    case "Question Tags":
      return <GrammarTest questionList={questionTagsTest} />
    // code for Question Tags

    case "Inversion":
      return <GrammarTest questionList={inversionTest} />
    // code for Inversion

    case "Causative Verbs":
      return <GrammarTest questionList={causativeVerbsTest} />
    // code for Causative Verbs

    case "Reported Questions":
      return <GrammarTest questionList={reportedQuestionsTest} />
    // code for Reported Questions

    case "Ellipsis and Substitution":
      return <GrammarTest questionList={ellipsisAndSubstitutionTest} />
    // code for Ellipsis and Substitution

    case "Nominalisation":
      return <GrammarTest questionList={nominalisationTest} />
    // code for Nominalisation

    case "Discourse Markers":
      return <GrammarTest questionList={discourseMarkersTest} />
    // code for Discourse Markers

    case "Parallel Structure":
      return <GrammarTest questionList={parallelStructureTest} />
    // code for Parallel Structure

    case "Emphasis":
      return <GrammarTest questionList={emphasisTest} />
    // code for Emphasis

    case "Word Order":
      return <GrammarTest questionList={wordOrderTest} />
    // code for Word Order

    case "Common Grammatical Errors":
      return <GrammarTest questionList={commonGrammaticalErrorsTest} />
    // code for Common Grammatical Errors

    default:
      return null;
  }
}

const styles = StyleSheet.create({});
