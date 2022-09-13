import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
    isStartButton: boolean,
    isTimerReset: boolean,
    isTimerStarted: boolean,
    setIsTimerStarted: (value: boolean) => void,
    setIsTimerReset: (value: boolean) => void,
}

export const RoundedButton: FC<Props> = ({ 
    isStartButton, 
    setIsTimerReset, 
    setIsTimerStarted, 
    isTimerStarted,
    isTimerReset,
}) => {

    const pauseColor = 'rgba(0, 255, 0, .1)';
    const resetColor = 'rgba(223, 71, 89, .4)';

    const handlePressButton = () => {
        if(isStartButton) {
            setIsTimerStarted(!isTimerStarted);
            setIsTimerReset(false)
            return;
        }
        setIsTimerReset(true)
    }

    const startButton = {
        borderColor: {
            borderColor: isTimerStarted ? resetColor : pauseColor
        },
        innerWrapperColor: {
            backgroundColor: isTimerStarted ? resetColor : pauseColor
        },
        textColor: {
            color: isTimerStarted ? '#df4759' : '#00ff00'
        },
        label: isTimerStarted ? 'Parar' : 'Iniciar'
    };

    const resetButton = {
        borderColor: {
            borderColor: isTimerStarted ? pauseColor : resetColor
        },
        innerWrapperColor: {
            backgroundColor: isTimerStarted ? pauseColor : resetColor
        },
        textColor: {
            color: isTimerStarted ? '#00ff00' : '#df4759'
        },
        label: 'Zerar',
    };

    return (
        <TouchableOpacity 
            style={[styles.button, isStartButton && startButton.borderColor]} 
            onPress={() => handlePressButton()}
        >
            <View style={[styles.btnInnerWrapper, isStartButton && startButton.innerWrapperColor]}>
                <Text style={[styles.btnText, isStartButton && startButton.textColor]}>
                    {
                        isStartButton ? startButton.label : resetButton.label
                    }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: '#333',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnInnerWrapper: {
        borderRadius: 50,
        backgroundColor: '#333',
        width: '95%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#bbb',
        fontFamily: 'Inter-SemiBold',
        fontSize: 16
    },
});