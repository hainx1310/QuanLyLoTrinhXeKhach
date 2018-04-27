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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class LichSu extends Component{
    render(){
        return(
            <View>
                <MaterialCommunityIcons
                    name = "comment-multiple-outline"
                    size = {30} color = 'black'
                    onPress={() => {
                        // this.showPopupNhapNhanXet()
                    }}
                />
            </View>
        );
    }
}