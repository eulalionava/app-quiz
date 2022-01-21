import React from 'react'
import { Text, TouchableOpacity, View,Modal } from 'react-native'
import { COLORS } from '../constantes/constantes'
import { data } from '../data/data';

interface Props{
    score:number,
    showScoreModal:boolean,
    restartQuiz:()=>void
}

export const ModalAlerta = ({score,showScoreModal,restartQuiz}:Props)=> {
    return (
        <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score > (data.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score > (data.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { data.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                                onPress={ restartQuiz }
                                style={{
                                    backgroundColor: COLORS.accent,
                                    padding: 20, width: '100%', borderRadius: 20
                                }
                           }>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Retry Quiz</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>
    )
}
