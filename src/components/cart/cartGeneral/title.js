import React from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text
}
    from 'react-native';
import Styles from '../style/stylingCart';
import { connect } from 'react-redux';


const Title = ({ buttonCancelNone, navigation }) => (
    <View style={Styles.cartTitle}>
        {
            buttonCancelNone ?
                null :
                (
                    <TouchableOpacity
                        style={Styles.btnCancel}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Text style={Styles.textCancel}>X</Text>
                    </TouchableOpacity>
                )
        }
        <Text style={Styles.cartText}>Check out</Text>
    </View>
)

const mapStateToProps = state => {
    const { buttonCancelNone } = state.shoppingCartReducer;
    return {
        buttonCancelNone: buttonCancelNone
    }
}
export default connect(mapStateToProps)(Title);