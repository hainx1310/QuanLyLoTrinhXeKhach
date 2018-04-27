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

const {width, height} = Dimensions.get('window');

export default class LoginFaceBook extends Component{
    _token = null;

    componentWillMount(){

    }

    loginFB(){
        let navigation = this.props.navigation;

        LoginManager.logInWithReadPermissions(['public_profile'])
            .then(
                function(result) {
                    if (result.isCancelled) {
                        alert('Đã hủy đăng nhập.');
                    } else {
                        AccessToken.getCurrentAccessToken().then(
                            (data) => {
                                this._token = data.accessToken.toString();
                            }
                        )
                        alert("Đăng nhập thành công.");
                        navigation.navigate({key:'Home', routeName: 'Home'})
                    }
                },
                function(error) {
                    alert('Đăng nhập thất bại: ' + error);
                    navigation.navigate({key:'Login', routeName:'Login'});
                }
        );
    };

    render(){
        return(
            <View>
                <TouchableOpacity
                    style = {{
                        width: width,
                        height: 30,
                        backgroundColor:'#3b5998',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    onPress = {()=>{this.loginFB()}}
                >
                    <Text style = {{color:'#fff'}}>Đăng nhập với Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}