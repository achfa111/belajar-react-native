import { View, Button } from 'react-native'
import React from 'react'

export default function Tombol() {
    return (
        <View>
            <Button
                title="Learn Me More"
                color="green"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}