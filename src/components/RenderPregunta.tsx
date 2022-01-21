import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../constantes/constantes'
import { data } from '../data/data';

interface Props{
    numeroPregnta:number
}

export const RenderPregunta = ({numeroPregnta}:Props)=> {
    return (
        <View style={{
            marginVertical: 40
        }}>
            {/* Question Counter */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>
                    {numeroPregnta+1}
                </Text>
                <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>
                    / {data.length}
                </Text>
            </View>

            {/* Question */}
            <Text style={{
                color: COLORS.white,
                fontSize: 30
            }}>{data[numeroPregnta]?.question}</Text>
        </View>
    )
}
