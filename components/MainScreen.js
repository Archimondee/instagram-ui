import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';
import {Icon} from 'native-base';
import {TabNavigator} from 'react-navigation';

import HomeTab from './TabNavigator/HomeTab';
import SearchTab from './TabNavigator/SearchTab';
import AddMediaTab from './TabNavigator/AddMediaTab';
import LikesTab from './TabNavigator/LikesTab';
import ProfileTab from './TabNavigator/ProfileTab';

export default class MainScreen extends Component {
    static navigationOptions ={
        headerLeft: <Icon name='ios-camera-outline' style={{
          paddingLeft:12}}/>,
          title: "Instagram",
         headerTitleStyle:{textAlign:'center', alignSelf:'center'},
        headerRight: <Icon name='ios-send-outline' style={{
          paddingRight:12}}/>
      }
    render(){
        return(
            <AppTabNavigator />
        );
    }
}
const AppTabNavigator = TabNavigator({
    HomeTab:{
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style:{
            ...Platform.select({
                android:{
                    backgroundColor:'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
})


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})