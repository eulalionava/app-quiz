import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../constantes/constantes'
import { useQuiz } from '../hooks/useQuiz';

interface Props{
    handleNext:()=>void
}

export const BottonSiguiente = ({handleNext}:Props)=> {

    return (
        <TouchableOpacity
            onPress={ handleNext }
            style={{
                marginTop: 20, 
                width: '100%', 
                backgroundColor: COLORS.accent, 
                padding: 20, 
                borderRadius: 5
            }}>
            <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>
                Next
            </Text>

        </TouchableOpacity>
    )
}
