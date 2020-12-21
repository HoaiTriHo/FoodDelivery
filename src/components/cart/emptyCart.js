import React from 'react';
import {
    View,
    Image,
    SafeAreaView
}
    from 'react-native';
import emptyCart from '../images/empty-cart.png'
import Styles from './style/stylingCart';
import Title from './cartGeneral/title'

const EmptyCart = () => (
    <View style={Styles.emptyCart}>
        <Image style={Styles.imgEmpty} source={emptyCart} />
    </View>
)
export default EmptyCart;