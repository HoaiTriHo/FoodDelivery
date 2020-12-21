import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
}
    from 'react-native';

export const LoadMerchantItem = ({ img, nameMerchant, distance, discription, ...otherProps }) => (
    <TouchableOpacity {...otherProps}>
        <View style={Styles.itemWrap}>
            <View style={Styles.img}>
                <Image style={Styles.itemImg} source={{
                    uri: img
                }} />
            </View>
            <View style={Styles.info}>
                <Text style={Styles.nameMerchant}>{nameMerchant}</Text>
                <Text numberOfLines={1} style={Styles.discription}>{discription}</Text>
                <Text style={Styles.discription}>{distance}km</Text>
            </View>
        </View>
    </TouchableOpacity>
)
const Styles = StyleSheet.create({
    itemWrap:{
        flexDirection:'row',
        marginTop:15,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'gray',
        paddingBottom:15
    },
    img:{
        width:'27%'
    },
    info:{
        width:'73%'
    },
    itemImg:{
        width:90,
        height:90,
        borderRadius:10
    },
    nameMerchant:{
        fontWeight:'bold',
        fontSize:17
    },
    discription:{
        opacity:0.7
    }
});