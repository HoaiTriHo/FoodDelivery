import React from 'react';
import {
    TouchableOpacity,
    Text
}
from 'react-native';
import Styles from '../style/styleGetLocation';

const ShowItemAdress = ({ name, location, ...ortherProps }) => (
    <TouchableOpacity {...ortherProps} style={Styles.itemLocation}>
        <Text style={Styles.nameLocation}>{name}</Text>
        <Text numberOfLines={2} style={Styles.textLocation}>{location}</Text>
    </TouchableOpacity>
);
export default ShowItemAdress;