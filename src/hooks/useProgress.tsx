import React, { useState } from 'react'
import { Animated } from 'react-native';
import { data } from '../data/data';

export const useProgress = ()=> {

    const [progress, setProgress] = useState(new Animated.Value(0));

    const progressAnim = progress.interpolate({
        inputRange: [0, data.length],
        outputRange: ['0%','100%']
    })


    return {
        progress,
        progressAnim
    }
}
