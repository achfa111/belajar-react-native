import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';

const LoginPage = () => {
    // State untuk menyimpan email dan password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Fungsi untuk menangani saat tombol ditekan
    const handleLogin = () => {
        // Implementasikan logika login di sini
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/images/LogoTMMIN.png')}
            />

            <Text
                style={styles.title}>Sign Up
            </Text>

            <Text style={styles.text}>
                {`Name*`}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                fontColor='#A5A5A5'
                fontWeight='bold'
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />


            <Text style={styles.text}>
                {`Email*`}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Contoh: johndee@gmail.com"
                fontColor='#A5A5A5'
                fontWeight='bold'
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.text}>
                {`Create Password`}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="6+ karakter"
                fontColor='#A5A5A5'
                fontWeight='bold'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <Button
                title="Sign in"
                color='#3D7B3F'
                fontColor='#ffffff'
                fontWeight='bold'
                TextInput='absolute'
                autoCapitalize="none"
                onPress={handleLogin} />

            {/* <Text
                style={styles.title2}>Don’t have an account?
            </Text>

            <Text
                style={styles.title3}>Sign Up for free
            </Text> */}

            <Text style={styles.baseText}>
                Don’t have an account?
                <Text style={styles.innerText}> Sign Up for free</Text>
            </Text>

            {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.linkText}> Sign Up for free</Text>
            </TouchableOpacity> */}


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#ffffff',
    },

    text: {
        fontFamily: 'Poppins',
        fontColor: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
    },

    title: {
        fontFamily: 'Poppins',
        fontColor: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        paddingVertical: 30,
    },

    title2: {
        fontFamily: 'Poppins',
        fontColor: '#000000',
        fontSize: 14,
        textAlign: 'left',
        paddingVertical: 10,
    },

    title3: {
        fontFamily: 'Poppins',
        fontColor: '#0D28A6',
        fontSize: 14,
        textAlign: 'right',
        paddingVertical: 10,
    },

    input: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 0.5,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        paddingVertical: 12,
    },

    baseText: {
        fontFamily: 'Poppins',
        fontColor: '#000000',
        fontSize: 14,
        paddingVertical: 20,
    },

    innerText: {
        fontFamily: 'Poppins',
        fontColor: '#0D28A6',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingVertical: 20,
    },

    // TextInput: {
    //     fontFamily: 'Poppins',
    //     fontSize: 12,
    //     fontWeight: 'bold',
    //     fontColor: '#A5A5A5'
    // },
});

export default LoginPage;
