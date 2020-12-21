import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Bold = ({children, style, ...otherProps})=>(
    <Text style={[Styles.textBold, style]} {...otherProps}>{children}</Text>
)

const Styles = StyleSheet.create({
    textBold:{
        fontWeight:'bold',
    }
});