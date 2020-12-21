import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Alert
}
    from 'react-native';
import Styles from '../style/styleLoadingCategoryMerchant';
import LoadMenuItem from '../homeGereral/loadingMenuItem';
import BarShoppingCart from '../homeGereral/barShopingCart';
import { connect } from 'react-redux'
import { getMenuMerchant } from '../../../redux/actions/merchantAction';
import { disabledButtonCancel } from '../../../redux/actions/shoppingCartAction';

class DetailMerchant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMenu: []
        }
    }
    async componentDidMount() {
        try {
            //Get id merchant from store to get menu
            const { idMerchant } = this.props;
            const getMenu = await fetch('https://5fb744d48e07f00016642985.mockapi.io/api/menuMerchants?id=' + idMerchant);
            const menuJson = await getMenu.json();
            this.setState({
                dataMenu: menuJson[0].menu
            })
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }

    render() {
        const {
            idMerchant,
            nameMerchant,
            distance,
            address,
            numberOfItem,
            idMerchantCart
        } = this.props;
        //check item in cart > 0 and the same merchant
        const statusBarShopping = numberOfItem > 0 && idMerchant == idMerchantCart;
        
        return (
            <SafeAreaView style={Styles.detailWrap}>
                <View style={Styles.header}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        >
                            <Text style={Styles.cancelText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.inforMerhant}>
                        <Text style={Styles.nameMerchant} >{nameMerchant}</Text>
                        <Text style={Styles.address}>{distance}km**{address}</Text>
                    </View>
                </View>
                <View style={statusBarShopping ? Styles.menu : Styles.menuFull}>
                    <Text style={Styles.textMenu}>Menu</Text>
                    <FlatList
                        numColumns={2}
                        data={this.state.dataMenu}
                        renderItem={({ item }) => (
                            <LoadMenuItem
                                onPress={() => {
                                    //Save information menu merchant to store
                                    this.props.dispatch(getMenuMerchant(item.id, item.image, item.nameFood, item.price, item.description));
                                    this.props.navigation.navigate('menuMerchant');
                                }}
                                img={item.image}
                                nameFood={item.nameFood}
                                price={parseFloat(item.price).toLocaleString()}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                {
                    statusBarShopping ?
                        (
                            <View style={Styles.btnCart}>
                                <BarShoppingCart
                                    numberItem={this.props.numberOfItem}
                                    totalPriceItem={this.props.totalPrice}
                                    action='Your cart'
                                    onPress={() => {
                                        this.props.dispatch(disabledButtonCancel(false));
                                        this.props.navigation.navigate('modalCart');
                                    }}
                                />
                            </View>
                        ) :
                        null
                }
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => {
    const { numberOfItem, idMerchantCart, totalPrice } = state.shoppingCartReducer;
    const { idMerchant, nameMerchant, distance, address, category } = state.merchantReducer;
    return {
        //Get data merchant from cart reducer
        numberOfItem: numberOfItem,
        idMerchantCart: idMerchantCart,
        totalPrice: totalPrice,

        //Get data merchant from merchant reducer
        idMerchant: idMerchant,
        nameMerchant: nameMerchant,
        distance: distance,
        address: address,
        category: category
    }
}
export default connect(mapStateToProps)(DetailMerchant);