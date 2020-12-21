import React from 'react';

import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Alert
}
    from 'react-native';
import { connect } from 'react-redux';
import BarShoppingCart from '../homeGereral/barShopingCart';
import { addItemToCart, removeCart, updateAmountItem } from '../../../redux/actions/shoppingCartAction';

class MenuMerchant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountFood: 1
        }
    }
    disabledButton() {
        this.setState({
            btnDownDisabled: this.state.amountFood > 1 ? false : true
        })
    }
    changeAmount(action) {
        if (action == 'increase')
            this.setState({
                amountFood: this.state.amountFood + 1,
            }, this.disabledButton)
        if (action == 'decrease')
            this.setState({
                amountFood: this.state.amountFood - 1,
            }, this.disabledButton)
    }
    //Add item to the cart
    addItemToCart() {
        const {
            idMerchant,
            nameMerchant,
            idFood,
            nameFood,
            price,
            address,
            menu,
            phone,
            idUser,
            nameUser
        } = this.props;

        //get index the duplicated item
        const getIndexItem = this.checkDuplicatedItem(idFood);

        if (getIndexItem !== -1) {
            const copyMenu = [
                ...menu
            ]
            copyMenu[getIndexItem].numberFood += this.state.amountFood;
            //Update the shopping cart
            this.props.dispatch(updateAmountItem(copyMenu, this.state.amountFood, price));
            this.props.navigation.goBack();
        }
        else {
            this.props.dispatch(
                addItemToCart(
                    idFood, 
                    idMerchant, 
                    idUser, 
                    nameFood, 
                    price, 
                    this.state.amountFood, 
                    address, 
                    phone,
                    nameUser,
                    nameMerchant
                )
            );
            this.props.navigation.goBack();
        }

    }
    /*
        check if users add item which exsist in the cart 
        => update amount of that item
     */
    checkDuplicatedItem(idFood) {
        const { menu } = this.props;

        let getIndexItem = -1;

        //checking the new item === existing item in the cart
        menu.map((item, index) => {
            if (idFood === item.idFood)
                return getIndexItem = index;
        });
        return getIndexItem;
    }

    //Valid item added in the cart
    isValidToAddCart() {
        const { nameMerchantCart, idMerchantCart, idMerchant } = this.props;

        //if the cart is empty, add item to the cart
        if (idMerchantCart === null) {
            this.addItemToCart();
        }
        /*
            If there is any item in the cart, check that item
            is the same merchant or not
        */
        if (idMerchantCart !== null) {
            if (idMerchantCart === idMerchant) {
                this.addItemToCart();
            }
            else
                Alert.alert(
                    'Create new cart?',
                    'Do you wanna delete the cart at ' + nameMerchantCart,
                    [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: 'Ok',
                            onPress: () => {
                                //Remove old shopping cart and create a new one
                                this.props.dispatch(removeCart())
                                this.addItemToCart();
                            }
                        }
                    ]
                );
        }

    }
    render() {
        const { image, nameFood, price, description } = this.props;
        const PRICE_FOOD = this.state.amountFood * parseFloat(price);
        return (
            <SafeAreaView style={Styles.menuWrap}>
                <TouchableOpacity
                    style={Styles.pressArea}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                >
                </TouchableOpacity>
                <View style={Styles.menu}>
                    <View style={Styles.imageWrap}>
                        <ImageBackground style={Styles.img} source={{ uri: image }}>
                            <View style={Styles.cancelArea}>
                                <TouchableOpacity
                                    style={Styles.btnCancel}
                                    onPress={() => {
                                        this.props.navigation.goBack();
                                    }}
                                >
                                    <Text style={Styles.cancel}>X</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={Styles.content}>
                        <View style={Styles.infoFood}>
                            <Text style={Styles.name}>{nameFood}</Text>
                            <Text style={Styles.description}>{description}</Text>
                            <Text style={Styles.price}>{parseFloat(price).toLocaleString('de-DE')}</Text>
                        </View>
                        <View style={Styles.infoOrder}>
                            <View style={Styles.amountWrap}>
                                <TouchableOpacity
                                    disabled={this.state.btnDownDisabled}
                                    style={this.state.btnDownDisabled ? [Styles.bntamount, Styles.disabledBtn] : Styles.bntamount}
                                    onPress={this.changeAmount.bind(this, 'decrease')}
                                >
                                    <Text style={this.state.btnDownDisabled ? [Styles.textamount, Styles.textamountDisabled] : Styles.textamount}>-</Text>
                                </TouchableOpacity>
                                <Text style={Styles.amount} >{this.state.amountFood}</Text>
                                <TouchableOpacity
                                    style={Styles.bntamount}
                                    onPress={this.changeAmount.bind(this, 'increase')}
                                >
                                    <Text style={Styles.textamount}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={Styles.btnAddItem}>
                            <BarShoppingCart
                                numberItem={this.state.amountFood}
                                totalPriceItem={PRICE_FOOD}
                                action='Add to cart'
                                onPress={this.isValidToAddCart.bind(this)}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const mapPropsToState = state => {
    const { idMerchant, nameMerchant } = state.merchantReducer;
    const { idFood, image, nameFood, price } = state.merchantReducer.menuMerchant;
    const { address, phone, id, name } = state.userReducer;
    const { idMerchantCart, nameMerchantCart, menu } = state.shoppingCartReducer;

    return {
        //get data from merchant reducer
        idMerchant: idMerchant,
        nameMerchant: nameMerchant,

        //get data from menu merchant
        idFood: idFood,
        image: image,
        nameFood: nameFood,
        price: price,

        //get data from user reducer
        address: address,
        phone: phone,
        idUser: id,
        nameUser:name,

        //get data from shopping cart
        idMerchantCart: idMerchantCart,
        nameMerchantCart: nameMerchantCart,
        menu: menu
    }
}
export default connect(mapPropsToState)(MenuMerchant);

const Styles = StyleSheet.create({
    menuWrap: {
        width: '100%',
        backgroundColor: 'red',
        flex: 1,
        backgroundColor: 'transparent'
    },
    pressArea: {
        height: '20%'
    },
    menu: {
        height: '80%',
        shadowOpacity: 0.6,
        backgroundColor: 'white'
    },
    cancel: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    imageWrap: {
        height: '30%'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20
    },
    price: {
        opacity: 0.7
    },
    description: {
        opacity: 0.7
    },
    infoFood: {
        height: '20%'
    },
    btnAddItem: {
        height: '13%'
    },
    infoOrder: {
        height: '67%',
        justifyContent: 'center'
    },
    btnCancel: {
        backgroundColor: 'white',
        width: 25,
        height: 25,
        justifyContent: 'center',
        borderRadius: 20
    },
    cancelArea: {
        width: '90%',
        alignSelf: 'center'
    },
    content: {
        width: '90%',
        alignSelf: 'center',
        height: '70%'
    },
    //Amount food
    amountWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        alignSelf: 'center'
    },
    bntamount: {
        borderColor: '#57CFD1',
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
        color: '#57CFD1'
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
