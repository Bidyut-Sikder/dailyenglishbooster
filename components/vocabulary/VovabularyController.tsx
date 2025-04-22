import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShowWords from '../common/ShowWords';
import ShowLikedWords from '../common/ShowLikedWords';
import { grewords } from '@/assets/data/vocabularies/grewords';
import { commonWords } from '@/assets/data/vocabularies/commonWords';
import { ieltsWords } from '@/assets/data/vocabularies/ielts';

const VovabularyController = ({topic}:{topic:string}) => {
    switch (topic) {
        case "500 Daily/GRE Words":
          return <ShowWords wordList={grewords} storageKey="lovedGreWords" />;
        case "liked-gre-words":
          return (
            <ShowLikedWords
              wordList={grewords}
              title="GRE"
              storageKey="lovedGreWords"
            />
          );
        case "450 Common Words":
          return <ShowWords wordList={commonWords} storageKey="lovedCommonWords" />;
        case "liked-common-words":
          return (
            <ShowLikedWords
              wordList={commonWords}
              title="Common"
              storageKey="lovedCommonWords"
            />
          );
        case "650 IELTS Words":
          return <ShowWords wordList={ieltsWords} storageKey="lovedIeltsWords" />;
        case "liked-ielts-words":
          return (
            <ShowLikedWords
              wordList={ieltsWords}
              title="IELTS"
              storageKey="lovedIeltsWords"
            />
          );
        default:
          return <div>Topic not found</div>;
      }
      
}

const styles = StyleSheet.create({})

export default VovabularyController;
