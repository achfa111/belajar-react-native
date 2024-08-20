import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function SplashScreen({ navigation }) {
    const [timePassed, setTimePassed] = useState(false)

    setTimeout(function () {
        setTimePassed(true)
    }, 1000)

    if (!timePassed) {

        return (
            <View>
                <ImageBackground
                    style={styles.image}
                    source={require('../assets/images/splash.png')}>
                    <Text style={styles.text}>
                        {`TMMIN\nCAR RENTAL`}
                    </Text>
                </ImageBackground>
            </View>
        );

    }
    navigation.navigate('LoginPage')
    return null
}

const styles = StyleSheet.create({

    image: {
        widht: '100%',
        height: '100%',
    },

    text: {
        color: '#ffffff',
        textAlign: 'right',
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
})