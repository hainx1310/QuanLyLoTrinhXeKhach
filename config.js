/**
 * Created by TrangLT on 03/02/2018.
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import GU01 from './scr/GU01';
import GU02 from './scr/GU02';

console.ignoredYellowBox = ['Remote debugger'];

const RootStack = StackNavigator(
    {
        Login: {
            screen: GU01,
        },
        Home: {
            screen: GU02,
        },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login',
    }
);

export default class RootLayout extends React.Component{
    render(){
        return(
            <RootStack/>
        );
    }
}