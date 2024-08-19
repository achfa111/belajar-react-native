import { View, Text, Image, ActivityIndicator } from 'react-native'
import Tombol from './components/Tombol'
import TextInput from './components/TextInput'
import React from 'react'

export default function App() {
  return (
    <View>
      <Text>Trial React Native at Bootcamp 2nd Session Chapter 1 - SDI</Text>
      <Tombol/>
      <TextInput/>
      <Image
        source={require('./assets/YarisCross.png')} // Path ke gambar lokal
      />
      <ActivityIndicator/>
      <Image
        source={require('./assets/YarisCrossRadaGede.png')} // Path ke gambar lokal
      />
    </View>
  )
}