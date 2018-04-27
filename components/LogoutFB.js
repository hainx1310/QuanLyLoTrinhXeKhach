import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    Text,
} from 'react-native';

import {
    LoginManager,
    AccessToken
} from 'react-native-fbsdk';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

export default class LogoutFacebook extends Component{

    logoutFB(){
        let navigation = this.props.navigation;
        LoginManager.logOut();
        alert('Đã đăng xuất');
        navigation.navigate({key:'Login',routeName:'Login'})
    }

    render(){

        return(
            <View>
                <Entypo
                    name = "log-out"
                    size = {30}
                    color = 'red'
                    onPress = {()=>{this.logoutFB()}}
                />
            </View>
        );
    }
}