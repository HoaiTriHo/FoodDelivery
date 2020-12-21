import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
}
    from 'react-native';
import Styles from '../style/stylingCart';


export const ItemOrdering = ({ amount, nameFood, price, showBtn, updateItem, deleteItem }) => (
    <TouchableOpacity
        onPress={updateItem}
    >
        <View style={Styles.itemWrap}>
            <Text style={Styles.amount}>{amount} x</Text>
            <Text style={Styles.nameFood}>{nameFood}</Text>
            <Text style={Styles.price}>{(parseFloat(price) * parseFloat(amount)).toLocaleString('de-DE')}đ</Text>
            <View style={Styles.deteleItem}>
                {
                    showBtn ?
                        (
                            <TouchableOpacity
                                onPress={deleteItem}
                                style={Styles.btnDetele}
                            >
                                <Text style={Styles.textDelete}>X</Text>
                            </TouchableOpacity>
                        ) : null
                }
            </View>
        </View>
    </TouchableOpacity>
)