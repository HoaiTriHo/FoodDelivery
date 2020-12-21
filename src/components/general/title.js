import React from 'react';
import {
    View,
    Text
}from 'react-native';
import Styles from '../registration/registerStyling';

export const Title = (props) => {
    return (
        <View style={Styles.containerTitle}>
            <Text style={Styles.containerTitle_Text1}>{props.title}</Text>
            <Text style={Styles.containerTitle_Text2}>{props.subtitle}</Text>
        </View>
    );
}