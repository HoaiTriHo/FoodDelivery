import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Styles from '../stylingAccount';

export const ItemOption = ({ name, ...otherProps }) => (
    <View style={Styles.item}>
        <Text {...otherProps} style={Styles.itemText}>{name}</Text>
    </View>
)
          