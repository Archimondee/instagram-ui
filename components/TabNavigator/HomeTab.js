import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import CardComponent from '../CardComponent';

import {
    Icon,
    Container,
    Content,
    Thumbnail
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
                    <View style={{height:100}}>
                        <View style={{
                            flex:1,
                            flexDirection: 'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingHorizontal: 7
                        }}>
                            <Text style={{fontWeight:'bold', marginTop:5}}> Stories </Text>
                            <View style={{flexDirection:'row', alignItems:'center', marginTop:5}}>
                                <Icon name='md-play' style={{fontSize: 14,}} ></Icon>
                                <Text style={{fontWeight:'bold'}}> Watch All </Text>
                            </View>
                        </View>
                        <View style={{flex:3}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}>

                                <Thumbnail 
                                    style={{
                                        marginHorizontal:5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={
                                        require('../assets/img/pic1.jpg')
                                    }
                                />
                                <Thumbnail 
                                    style={{
                                        marginHorizontal:5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={
                                        require('../assets/img/pic2.jpg')
                                    }
                                />
                                <Thumbnail 
                                    style={{
                                        marginHorizontal:5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={
                                        require('../assets/img/pic3.jpg')
                                    }
                                />
                                <Thumbnail 
                                    style={{
                                        marginHorizontal:5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={
                                        require('../assets/img/pic4.jpg')
                                    }
                                />
                                <Thumbnail 
                                    style={{
                                        marginHorizontal:5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={
                                        require('../assets/img/pic5.jpg')
                                    }
                                />
                                <Thumbnail 
                                    style={{
                                        marginHorizontal:5,
                                        borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={
                                        require('../assets/img/pic1.jpg')
                                    }
                                />
                            </ScrollView>
                        </View>
                    </View>

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