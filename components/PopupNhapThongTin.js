import React, {Component} from 'react';
import {
    Modal,
    Text,
    Dimensions,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

export default class PopupNhapThongTin extends Component{
    constructor(props){
        super(props)
        this.state = {
            Text:{
                text:'',
            },
            Display:{

            }
        }

        this.state = {text: ''};
    }
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return(
            <View style={{width:Dimensions.get('window').width, height: 0}}>
                <KeyboardAvoidingView behavior = 'padding' style = {{width: width, height: height}}>
                    <TouchableWithoutFeedback style = {{width: width, height: height}} onPress = {Keyboard.dismiss}>
                        <Modal
                            animationType="slide"
                            visible={this.state.modalVisible}
                            transparent={true}
                            onRequestClose={() => {
                                alert('Bạn chưa nhập thông tin!');
                            }}>
                            <View style={{
                                flex: 1,
                                width: width,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0,0,0,.5)'
                            }}>
                                <View style  = {{flex:1, width: width}}>
                                    <TouchableOpacity
                                        style = {{
                                            width: width,
                                            height:height/2,
                                        }} onPress={()=>{
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}>
                                    </TouchableOpacity>
                                </View>
                                <View style = {{
                                    flex:1,
                                    position:'absolute',
                                    bottom:0,
                                    width: width,
                                    height:300,
                                    backgroundColor:'#fff',
                                    justifyContent:'center',
                                    alignItems: 'center',
                                }}>
                                    <Text>MỜI BẠN NHẬP VÀO THÔNG CHUYẾN XE</Text>

                                    <View style={{
                                        marginTop: 20
                                    }}>
                                        <TextInput
                                            style={{height: 40, width: 300}}
                                            placeholder="Tên nhà xe"
                                            onChangeText={(text) => this.setState({text})}
                                        />

                                        <TextInput
                                            style={{height: 40}}
                                            placeholder="Biển số xe"
                                            onChangeText={(text) => this.setState({text})}
                                        />

                                        <View style = {{
                                            flexDirection: 'row'
                                        }}>
                                            <MaterialCommunityIcons
                                                style = {{flex:1}}
                                                name = "crosshairs-gps"
                                                size = {30} color = 'blue'
                                            />
                                            <TextInput
                                                style={{height: 40, flex:10}}
                                                placeholder="Điểm đầu (Tự động lấy theo GPS)"
                                                onChangeText={(text) => this.setState({text})}
                                            />
                                        </View>

                                        <TouchableOpacity
                                            placeholder = "Điểm cuối (chạm để chọn)"
                                            style={{height: 40}}
                                            onChangeText={(text) => this.setState({text})}
                                        >
                                            <Text>Chạm để chọn</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity
                                        style = {{
                                            width: width,
                                            height:30,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            backgroundColor:'green'
                                        }} onPress={()=>{
                                            this.setModalVisible(!this.state.modalVisible)
                                        }}>
                                        <View style={{position:'absolute', marginBottom: 0}}>
                                            <Text>GỬI</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
