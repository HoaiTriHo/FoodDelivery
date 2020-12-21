import React from 'react';

import {
    Text,
    TouchableOpacity,
    StyleSheet,
}
    from 'react-native';

const BarShoppingCart = ({ numberItem, action, totalPriceItem, ...other }) => (
    <TouchableOpacity
        style={Styles.btnAdd}
        {...other}
    >
        <Text style={Styles.textBtnamount}>{numberItem} món</Text>
        <Text style={Styles.textAdd} >{action}</Text>
        <Text style={Styles.textBtnamount}>{totalPriceItem.toLocaleString('de-DE')}</Text>
    </TouchableOpacity>
)

export default BarShoppingCart;
const Styles = StyleSheet.create({
    //button
    btnAdd: {
        backgroundColor: '#57CFD1',
        borderRadius: 5,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textAdd: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    //Option
    amountWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        alignSelf: 'center'
    },
    bntamount: {
        borderColor: '#13CE66',
        borderWidth: StyleSheet.hairlineWidth,
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabledBtn: {
        borderColor: 'gray',
        opacity: 0.5
    },
    amount: {
        alignSelf: 'center',
        fontSize: 25
    },
    textamount: {
        fontSize: 30,
        color: '#13CE66'
    },
    textamountDisabled: {
        color: 'gray',
        opacity: 0.5
    },
    textBtnamount: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
});
