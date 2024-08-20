import { View, Text, Image, Button } from 'react-native'
import React from 'react'
// import Tombol from '../components/Tombol'

export default function Home({ navigation }) {
    return (
        <View>
            <Image source={require('../assets/images/porsche.png')} />
            <Text>Trial React Native at Bootcamp 2nd Session Chapter 1 - TMMIN</Text>
            <Button
                title="Go to Login"
                onPress={
                    () => navigation.navigate('Login')
                }
            />
        </View>
    )
}