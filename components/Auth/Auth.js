import React,{ Component } from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Input, Button, Image } from 'react-native-elements';
import Cookies from 'js-cookie'

class Auth extends Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.inputLog = React.createRef();
        this.state = {
            'token': ''
        }
    }
    render() {
        return(
            <Card>
                <Card.Title>Авторизация</Card.Title>
                <Card.Divider/>
                <Image
                source={require('../../img/logo.png')}
                style={{width:156, height: 130, marginLeft: 70}}
                />
                <Input
                ref = {this.inputLog}
                placeholder=' your login'
                leftIcon={
                    <Icon
                    name='at'
                    size={18}
                    color='black'
                    />
                }
                onChangeText = {value => this.valueLogin = value}
                />
                <Input
                ref = {this.input}
                placeholder=' your pass'
                leftIcon={
                    <Icon
                    name='lock'
                    size={18}
                    color='black'
                    />
                }
                secureTextEntry={true}
                onChangeText = {value => this.valuePass = value}
                />
                <Button
                    title = "   Вход"
                    icon={
                        <Icon
                            name="sign-in"
                            size={15}
                            color="white"
                        />
                    }
                    onPress = {()=> {
                        console.log(`passwordValue = ${this.valuePass} and login value = ${this.valueLogin}`);
                        if (this.valuePass && this.valueLogin) {
                            fetch('https://skills.future-mission.ru/api/auth',
                                  {
                                    method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({username : this.valueLogin,
                                                          password: this.valuePass})}
                                )  
                            .then((response) => {  
                                if ((response.status === 401) || (response.status === 404)) {
                                    this.input.current.clear();
                                    this.inputLog.current.clear();
                                    this.valueLogin = '';
                                    this.valuePass = '';
                                    Alert.alert('Ошибка', 'Введите верный логин и пароль')
                                } else {
                                    this.input.current.clear();
                                    this.inputLog.current.clear();
                                    this.valueLogin = '';
                                    this.valuePass = '';
                                    this.props.navigation.navigate('SignedIn')
                                }
                                return response.json()
                            }).then(data => {
                            })
                        }
                    }
                }/>
            </Card>
        );
    }
}

export default Auth;