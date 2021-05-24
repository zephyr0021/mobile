import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'

const ProfileScreen = () => (
    <View style = {styles.container}>
        <Text>Профиль</Text>
        <Button
        title = "Получить данные профиля"
        onPress = {() => {
            fetch('http://192.168.0.103:9994/api/auth', {
                method: 'GET'
            }).then(responce => responce.json()).then(data => console.log(data));
        }
        }/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProfileScreen;