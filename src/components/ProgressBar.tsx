import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { COLORS } from '../constantes/constantes';

interface Props{
    progressAnim:any
}

export const ProgressBar = ({progressAnim}:Props)=> {
    return (
        <View style={styles.progresContainer}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor: COLORS.accent
            },{
                width: progressAnim
            }]}>

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    progresContainer:{
        width: '100%',
        height: 20,
        borderRadius: 20,
        backgroundColor: '#00000020',
    }
});
