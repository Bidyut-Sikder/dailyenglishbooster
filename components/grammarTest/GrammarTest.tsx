

import { useTheme } from '@/hooks/theme';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const GrammarTest = ({ questionList }: any) => {
  const { theme, bg } = useTheme();  // Get theme
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isTestCompleted, setIsTestCompleted] = useState(false); // Flag to track if test is completed

  const currentQuestion = questionList[currentQuestionIndex];

  const handleOptionPress = (option: any) => {
    setSelectedOption(option);
    setShowAnswer(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);

    if (currentQuestionIndex < questionList.length - 1) {
      // Move to the next question if it's not the last one
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // If last question, show results
      setIsTestCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setIsTestCompleted(false);
  };

  const isNextDisabled = selectedOption === null; // Disable Next if no option selected

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      justifyContent: 'center',
    },
    questionCounter: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
    },
    questionText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    optionButtonLight: {
      backgroundColor: '#e0e0e0',
      padding: 15,
      borderRadius: 8,
      marginVertical: 8,
    },
    optionButtonDark: {
      backgroundColor: '#333333',
      padding: 15,
      borderRadius: 8,
      marginVertical: 8,
    },
    correctOptionLight: {
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 8,
      marginVertical: 8,
    },
    correctOptionDark: {
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 8,
      marginVertical: 8,
    },
    wrongOptionLight: {
      backgroundColor: '#F44336',
      padding: 15,
      borderRadius: 8,
      marginVertical: 8,
    },
    wrongOptionDark: {
      backgroundColor: '#F44336',
      padding: 15,
      borderRadius: 8,
      marginVertical: 8,
    },
    optionText: {
      fontSize: 16,
    },
    button: {
      marginTop: 20,
      backgroundColor: '#3f51b5',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    finalText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    scoreText: {
      fontSize: 20,
      marginBottom: 30,
    },
    disabledButton: {
      backgroundColor: '#B0BEC5',  // Light gray to indicate it's disabled
    },
  });

  if (isTestCompleted) {
    return (
      <View style={[styles.container, { backgroundColor: bg }]}>
        <Text style={[styles.finalText, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          {score === questionList.length ? "Congratulations!" : "You need to improve!"}
        </Text>
        <Text style={[styles.scoreText, { color: theme === 'dark' ? '#fff' : '#000' }]}>
          Your Score: {score} / {questionList.length}
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme === 'dark' ? '#3f51b5' : '#3f51b5' }]}
          onPress={handleRestart}
        >
          <Text style={styles.buttonText}>Restart Test</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.questionCounter, { color: theme === 'dark' ? '#fff' : '#000' }]}>
        Question {currentQuestionIndex + 1} / {questionList.length}
      </Text>
      <Text style={[styles.questionText, { color: theme === 'dark' ? '#fff' : '#000' }]}>
        {currentQuestion.question}
      </Text>

      {currentQuestion.options.map((option: any, index: any) => {
        const isCorrect = option === currentQuestion.correctAnswer;
        const isSelected = option === selectedOption;

        let optionStyle =
          theme === 'dark' ? styles.optionButtonDark : styles.optionButtonLight;
        if (showAnswer) {
          if (isCorrect) {
            optionStyle = theme === 'dark' ? styles.correctOptionDark : styles.correctOptionLight;
          } else if (isSelected && !isCorrect) {
            optionStyle = theme === 'dark' ? styles.wrongOptionDark : styles.wrongOptionLight;
          }
        }

        return (
          <TouchableOpacity
            key={index}
            style={optionStyle}
            disabled={showAnswer}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : '#000' }]}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={[styles.button, isNextDisabled && styles.disabledButton]} // Apply disabled style if not selected
        onPress={handleNextQuestion}
        disabled={isNextDisabled} // Disable the button if no option is selected
      >
        <Text style={styles.buttonText}>
          {currentQuestionIndex >= questionList.length - 1 ? 'View Result' : 'Next'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GrammarTest;

























