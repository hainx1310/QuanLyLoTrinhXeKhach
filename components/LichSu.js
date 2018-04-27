//=============================================
//
//      Create by Hainx on 03/20/2018
//
//=============================================
import React, {Component} from 'react';
import {
    View,
    Dimensions,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class LichSu extends Component{
    render(){
        return(
            <View>
                <FontAwesome
                    name = "history"
                    size = {30}
                    color = 'black'
                    //onPress={() => {this.showPopupXemLichSu()}}
                />
            </View>
        );
    }
}