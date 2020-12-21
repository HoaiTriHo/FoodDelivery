import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import Styles from '../registration/registerStyling';


export const Input = ({label,message,messageStyle,defaults,defaultStyle,disbled,font, ...otherProps }) => (
    <View>
    <Text style={[Styles.containerInput_label,disbled,font]}>{label} </Text>
    <TextInput autoCapitalize='none' {...otherProps} style={[Styles.containerInput_Input, disbled,font]} />
    <Text style={messageStyle}>{message}</Text>
    <Text style={defaultStyle}>{defaults}</Text>
    </View>
)