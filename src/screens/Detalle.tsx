import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { useDetalle } from '../hooks/useDetalle'

export const Detalle = ()=> {
    
    const { isActive,activar,desactivar,numActivos,numDesactivos} = useDetalle();
    return (
        <View>
            {
                (isActive) ? <Button title='Activado' onPress={ activar }/> : <Button title='Desactivado' onPress={ desactivar }/>
            }

            <Text>click de activos:{ numActivos }</Text>
            <Text>click de desactivos:{ numDesactivos }</Text>
            
        </View>
    )
}
