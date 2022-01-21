import React, { useState } from 'react'
import { Animated } from 'react-native';
import { data } from '../data/data';

export const useQuiz = ()=> {
    const [currentOptionSelected, setCurrentOptionSelected] = useState('');
    const [correctOption, setCorrectOption] = useState('');
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0);


    const validateAnswer = (selectedOption:string) => {
        let correct_option = data[questionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);

        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true);
    }

    const handleNext = (progress:any) => {
        if(questionIndex== data.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setQuestionIndex(questionIndex+1);
            setCurrentOptionSelected('');
            setCorrectOption('');
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: questionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const restartQuiz = (progress:any) => {
        setShowScoreModal(false);

        setQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected('');
        setCorrectOption('');
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    return {
        currentOptionSelected,
        correctOption,
        isOptionsDisabled,
        score,
        showNextButton,
        showScoreModal,
        questionIndex,
        validateAnswer,
        handleNext,
        restartQuiz
    }
}
