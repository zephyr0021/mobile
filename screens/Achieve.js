import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AchieveScreen = () => (
    <View style = {styles.container}>
        <Text>Достижения</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AchieveScreen;