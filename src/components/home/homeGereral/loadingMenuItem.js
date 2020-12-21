import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
}
    from 'react-native';

const LoadMenuItem = ({ img, nameFood, price, ...other }) => (
    <TouchableOpacity {...other} style={Styles.menuWrap}>
        <Image style={Styles.imgMenu} source={{ uri: img }} />
        <Text style={Styles.nameFood}>{nameFood}</Text>
        <Text style={Styles.price}>{price}</Text>
    </TouchableOpacity>
)
const Styles = StyleSheet.create({
    menuWrap: {
        width: '50%',
        marginTop: 15
    },
    imgMenu: {
        width: '90%',
        height: 150,
        borderRadius: 10,
        alignSelf: 'center'
    },
    nameFood: {
        textAlign: 'center'
    },
    price: {
        textAlign: 'center',
        opacity: 0.7
    }
});
export default LoadMenuItem;