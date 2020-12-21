import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
}
    from 'react-native';
import Styles from '../style/stylingModalSearchRider';
import { connect } from 'react-redux';
import { ItemOrdering } from '../cartGeneral/itemOrdering';

class SearchRider extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <View style={Styles.wrapContent}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                        style={Styles.btnCancel}>
                        <Text style={Styles.textCancel}>X</Text>
                    </TouchableOpacity>
                    <View style={Styles.wrapContent}>
                        <Text style={Styles.textSearch}>Searching rider.....</Text>
                    </View>
                    <View style={Styles.imgWrap}>
                        <Image style={Styles.img} source={{ uri: 'https://media.giphy.com/media/U3IgAwhwINa57mRrL5/giphy.gif' }} />
                    </View>

                    <View style={Styles.prepairing}>
                        <Text style={Styles.textRepairing}>Repairing your order</Text>
                        <ActivityIndicator size="small" color="#0000ff" />
                    </View>
                </View>
                <View style={Styles.line}>
                    <View style={Styles.wrapContent}>
                        <Text style={Styles.textOrder}>Your ordering</Text>
                        <View style={Styles.customer}>
                            <View style={Styles.cost}>
                                <Text>Customer: </Text>
                                <Text>{this.props.nameUser}</Text>
                            </View>
                            <View style={Styles.cost}>
                                <Text>Phone: </Text>
                                <Text>{this.props.phone}</Text>
                            </View>
                            <View style={Styles.cost}>
                                <Text>Address: </Text>
                                <Text>{this.props.address}</Text>
                            </View>
                        </View>
                        <View style={Styles.order}>
                            <FlatList
                                data={this.props.menu}
                                renderItem={({ item }) => <ItemOrdering
                                    amount={item.numberFood}
                                    nameFood={item.nameFood}
                                    price={item.price}
                                    showBtn={false}
                                />}
                                keyExtractor={item => item.idFood.toString()}
                            />
                        </View>
                        <View style={Styles.billing}>
                            <View style={Styles.cost}>
                                <Text>Cost of food</Text>
                                <Text style={Styles.title}>{parseFloat(this.props.totalPrice).toLocaleString('de-DE')}đ</Text>
                            </View>
                            <View style={Styles.cost}>
                                <Text style={Styles.title}>Delivery fee</Text>
                                <Text style={Styles.title}>{parseFloat(this.props.shipFee).toLocaleString('de-DE')}đ</Text>
                            </View>
                            <View style={Styles.cost}>
                                <Text style={Styles.textTotal}>Total: </Text>
                                <Text>{(parseFloat(this.props.totalPrice) + parseFloat(this.props.shipFee)).toLocaleString('de-DE')}đ</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state => {
    const {
        menu,
        numberOfItem,
        totalPrice,
        shipFee,
        phone,
        idUser,
        address,
        nameUser
    } = state.shoppingCartReducer
    return {
        menu: menu,
        numberOfItem: numberOfItem,
        totalPrice: totalPrice,
        shipFee: shipFee,

        phone: phone,
        idUser: idUser,
        address: address,
        nameUser: nameUser
    }
}
export default connect(mapStateToProps)(SearchRider);