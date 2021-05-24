import React from 'react'
import Auth from '../components/Auth/Auth';
import TabScreen from '../screens/TabScreen'
import { createAppContainer } from 'react-navigation'
import { createSwitchNavigator } from 'react-navigation'


 const RootNavigator = createSwitchNavigator(
        {
            SignedIn: {
                screen: TabScreen
            },
            SignedOut: {
                screen: Auth
            }
        },
            {
                initialRouteName: "SignedOut" 
            }
    );
export default createAppContainer(RootNavigator);