import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constantes/constantes';
import { data } from '../data/data';
import { useQuiz } from '../hooks/useQuiz';

interface Props{
    option:string
    isOptionsDisabled:boolean
    correctOption:string
    currentOptionSelected:string
    validateAnswer:(option:string)=>void
}   

export const RenderOpciones = ({option,validateAnswer,isOptionsDisabled,correctOption,currentOptionSelected}:Props)=> {

    return (
        <TouchableOpacity 
            onPress={()=> validateAnswer(option) }
            disabled={isOptionsDisabled}
            style={{
                borderWidth: 3, 
                borderColor: option==correctOption 
                ? COLORS.success
                : option==currentOptionSelected 
                ? COLORS.error 
                : COLORS.secondary+'40',
                backgroundColor: option==correctOption 
                ? COLORS.success +'20'
                : option==currentOptionSelected 
                ? COLORS.error +'20'
                : COLORS.secondary+'20',
                height: 60, borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginVertical: 10
            }}
        >
            <Text style={{fontSize: 20, color: COLORS.white}}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {
                option==correctOption ? (
                    <View style={{
                        width: 30, height: 30, borderRadius: 30/2,
                        backgroundColor: COLORS.success,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Icon name='help-outline' color={COLORS.white} size={ 20 }/>
                    </View>
                ): option == currentOptionSelected ? (
                    <View style={{
                        width: 30, height: 30, borderRadius: 30/2,
                        backgroundColor: COLORS.error,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Icon name='close-circle-outline' color={COLORS.white} size={ 20 }/>
                    </View>
                ) : null
            }

        </TouchableOpacity>
                
    )
}
