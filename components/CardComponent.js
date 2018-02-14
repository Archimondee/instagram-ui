import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    Card,
    CardItem,
    Thumbnail,
    Body,
    Left,
    Right,
    Button,
    Icon
}from 'native-base';

export default class CardComponent extends Component{
    render(){

        const images = {
            '1' : require('./assets/img/feed.jpg'),
            '2' : require('./assets/img/feed2.png'),
            '3' : require('./assets/img/feed3.jpg'),
        };

        return(
            <Card pointerEvent='none'>
                <CardItem>
               <Left>
                    <Thumbnail source={require('./assets/img/pic1.jpg')}/>
                    <Body>
                        <Text> Sora Aoi </Text>
                        <Text note> Japanese </Text>
                    </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} 
                        style={{height:200, width:null, flex:1}}
                    />
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart-outline' style={{ color:'black'}}/>
                        </Button>
                        <Button transparent >
                            <Icon name='ios-chatbubbles-outline' style={{color:'black'}}/>
                        </Button>
                        <Button transparent >
                            <Icon name='ios-send-outline' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:20}}>
                    <Text> {this.props.likes} Likes </Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}> Aoi Sora </Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis augue eget nunc egestas aliquet. Donec tortor tortor, tincidunt in odio in, porta pharetra enim. Aenean faucibus tempor orci, sed tincidunt quam varius sed.
                    </Text>
                </CardItem>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})