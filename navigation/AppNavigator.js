import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import CourseScreen from '../screens/MainCourse'
import AchieveScreen from '../screens/Achieve'
import ProfileScreen from '../screens/Profile'
import Auth from '../components/Auth/Auth';

const AppNavigator = createBottomTabNavigator({
    Course: {
        screen: CourseScreen,
        navigationOptions: {
            title: 'Мои курсы',
            tabBarIcon: () => (
                <Icon
                    name='eye'
                    size={18}
                />
            )
        }
    },
    Achieve: {
        screen: AchieveScreen,
        navigationOptions: {
            title: 'Мои достижения',
            tabBarIcon: () => (
                <Icon
                    name='trophy'
                    size={18}
                />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Мой профиль',
            tabBarIcon: () => (
                <Icon
                    name='id-badge'
                    size={18}
                />
            )
        }
    }
})

export default createAppContainer(AppNavigator)