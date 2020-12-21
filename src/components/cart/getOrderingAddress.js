import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
}
    from 'react-native';
import Styles from './style/stylingCart';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';


const GetOrderingAddress = ({currentLocation, phone, navigation}) => (
    <View style={Styles.addressUser}>
        <View style={Styles.wrapContent}>
            <Text style={Styles.title}>Delivery the foood to</Text>
            <Text style={Styles.address} numberOfLines={2}>{currentLocation}</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('userLocationModal');
                }}
            >
                <Text style={Styles.changeAddress}>Change address</Text>
            </TouchableOpacity>
            {
                isEmpty(phone) ?
                    (
                        <Text style={{ color: 'red' }}>Please update your phone to order the food</Text>
                    ) :
                    (
                        <View>
                            <Text style={Styles.title}>Phone: {phone}</Text>
                            <Text style={Styles.title}>(You can change your phone in profile)</Text>
                        </View>
                    )
            }
        </View>
    </View>
)
const mapStateToProps = state => {
    const { address, coordinates, phone } = state.userReducer;
    return {
        currentLocation: address,
        coordinates: coordinates,
        phone: phone
    }
}
export default connect(mapStateToProps)(GetOrderingAddress);