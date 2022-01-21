
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProgressBar } from '../components/ProgressBar';
import { RenderPregunta } from '../components/RenderPregunta';
import { COLORS } from '../constantes/constantes';
import { data } from '../data/data';
import { useProgress } from '../hooks/useProgress';
import { RenderOpciones } from '../components/RenderOpciones';
import { useQuiz } from '../hooks/useQuiz';
import { BottonSiguiente } from '../components/BottonSiguiente';
import { ModalAlerta } from '../components/ModalAlerta';


export const HomeScreen = ()=> {

    const { progress,progressAnim } = useProgress();
    const { 
        questionIndex,
        showNextButton,
        isOptionsDisabled,
        correctOption,
        currentOptionSelected,
        score,
        showScoreModal,
        validateAnswer,
        handleNext,
        restartQuiz
    } = useQuiz();


    return (
        <SafeAreaView style={{ flex:1 }}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <View style={styles.content}>
                <ProgressBar progressAnim={ progressAnim }/>
                <RenderPregunta numeroPregnta={ questionIndex } />

                {/* //Renderiza las opciones por pregunta */}
                {
                    data[questionIndex]?.options.map( option=>(
                        <RenderOpciones 
                            key={ option }
                            option={ option } 
                            isOptionsDisabled={ isOptionsDisabled }
                            correctOption={ correctOption }
                            currentOptionSelected={ currentOptionSelected }
                            validateAnswer = {()=>validateAnswer(option)}
                        />
                    ))
                }
                
                {
                    (showNextButton)? <BottonSiguiente handleNext={ ()=> handleNext(progress) }/> : null
                }
                
                <ModalAlerta 
                    score={ score } 
                    showScoreModal={ showScoreModal } 
                    restartQuiz={()=>restartQuiz(progress) }
                />
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        position:'relative'
    }
});
