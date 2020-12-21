import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
}
    from 'react-native';
import MainGetLocation from './getLocation';
import Category from './loadingCategoryMerchant';
import LoadingMerchant from './loadingMerchant';
import { connect } from 'react-redux';
import BarMessageOrdering from '../cart/cartGeneral/barMessageOrdering'

//Homescreen
class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ height: '100%' }}>
                <View>
                    <MainGetLocation navigation={this.props.navigation} />
                </View>
                {
                    this.props.confirmCart?<BarMessageOrdering navigation={this.props.navigation}/>:null
                }
                <View style={this.props.permission ? { display: 'flex' } : { display: 'none' }}>
                    <Category navigation={this.props.navigation} />
                    <LoadingMerchant
                        url=''
                        title='All merchant'
                        navigation={this.props.navigation}
                    />
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => (
    {
        permission: state.userReducer.permission,

        phone: state.userReducer.phone,

        confirmCart : state.shoppingCartReducer.confirmCart
    }
)
export default connect(mapStateToProps)(HomeScreen);