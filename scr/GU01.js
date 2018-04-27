import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
} from 'react-native';
import LoginFaceBook from "../components/LoginFB";

const {width, height} = Dimensions.get('window');

export default class GU01 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    render(){
        return(
            <View style = {styles.container}>
                <Image
                    source={require('../img/logo.png')}
                    style={
                        styles.image
                    }
                />

                <View style = {styles.btnFB}>
                    <LoginFaceBook
                        navigation={
                            this.props.navigation
                        }
                    />
                </View>

                <View style = {styles.btnGG}>
                    <LoginFaceBook
                        navigation = {
                            this.props.navigation
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width: width,
        height: height,
    },
    btnFB:{
        width: width,
        position:'absolute',
        bottom: 60,
    },
    btnGG:{
        width: width,
        position:'absolute',
        bottom: 20,
    }
})