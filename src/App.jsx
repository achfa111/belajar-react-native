import { View, Text } from 'react-native'
import Tombol from './Tombol'
import TextInput from './TextInput'
import Image from './assets/image'
import React from 'react'

export default function App() {
  return (
    <View>
      <Text>coba</Text>
      <Tombol/>
      <TextInput/>
      <Image
        source={require('./assets/image/img-575473348-1475702964129.png')} // Ganti dengan path gambar lokal kamu
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10, // Memberi jarak antara teks dan gambar
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

