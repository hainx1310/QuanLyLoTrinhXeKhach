import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
} from 'react-native';
import MapView from 'react-native-maps';
import LogoutFacebook from "../components/LogoutFB";
import NhanXet from "../components/NhanXet";
import LichSu from "../components/LichSu";
import PopupNhapThongTin from "../components/PopupNhapThongTin";

const {width, height} = Dimensions.get('window');

export default class GU02 extends Component {
    constructor(props){
        super(props)
        this.state = {
            TrangThai:{
                batdau: 1,
            }
        }
    }

    showPopupNhapTT(){
        this.refs.PopupNhapThongTin.setModalVisible(true);
        this.setState = {
            batdau: !this.state.batdau
        }
    }

    render() {
        const { region } = this.props;

        return(
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>

                <View style = {{position:'absolute', bottom:60, left:10, }}>
                    <LogoutFacebook
                        navigation = {
                            this.props.navigation
                        }
                    />
                </View>

                <View style = {{position:'absolute', bottom:100, right:10, }}>
                    <NhanXet/>
                </View>

                <View style = {{position:'absolute', bottom: 60, right:10}}>
                    <LichSu/>
                </View>

                <View>
                {
                    !this.state.batdau ?
                        <TouchableOpacity
                            style = {styles.myButton}
                            onPress={() => {this.showPopupNhapTT()}}
                        >
                            <Text style={styles.textbtn}>BẮT ĐẦU</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style = {styles.myButton}
                            onPress={() => {
                                alert('abc')
                            }}
                        >
                            <Text style={styles.textbtn}>KẾT THÚC</Text>
                        </TouchableOpacity>
                }
                </View>
                <PopupNhapThongTin ref = {"PopupNhapThongTin"} parrentGU02 = {this}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    myButton:{
        backgroundColor:'green',
        width: width,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:15,
    },
    textbtn:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'
    },
});