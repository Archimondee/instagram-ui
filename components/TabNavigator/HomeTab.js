import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import CardComponent from '../CardComponent';

import {
    Icon,
    Container,
    Content
} from 'native-base';

export default class SearchTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}} />
        )
    }

    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource='1' likes='500'/>
                    <CardComponent imageSource='2' likes='340'/>
                    <CardComponent imageSource='3' likes='1654'/>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    }
})