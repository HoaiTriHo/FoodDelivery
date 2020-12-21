import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
}
    from 'react-native';
import { connect } from 'react-redux';
import { changBackground } from '../../../redux/actions/shoppingCartAction';
import BarShoppingCart from '../../home/homeGereral/barShopingCart';
import { updateAmountItem } from '../../../redux/actions/shoppingCartAction';


class UpdateItem extends React.Component {
    constructor(props) {
        super(props);
        const { indexItem } = this.props.route.params;
        this.state = {
            amountUpdate: this.props.menu[indexItem].numberFood,
            btnDownDisabled: false
        }
    }
    disabledButton() {
        this.setState({
            btnDownDisabled: this.state.amountUpdate > 1 ? false : true
        })
    }
    changeAmount(action) {
        if (action == 'increase')
            this.setState({
                amountUpdate: this.state.amountUpdate + 1,
            }, this.disabledButton)
        if (action == 'decrease')
            this.setState({
                amountUpdate: this.state.amountUpdate - 1,
            }, this.disabledButton)
    }
    goBack() {
        this.props.dispatch(changBackground(false));
        this.props.navigation.goBack()
    }
    updateItem(){
        const {menu} = this.props;
        const { indexItem } = this.props.route.params;
        //Get nunber to update 
        const amountNeedUpdate = this.state.amountUpdate - menu[indexItem].numberFood;
        const copyMenu = [
            ...menu
        ]
        copyMenu[indexItem].numberFood = this.state.amountUpdate;
        this.props.dispatch(updateAmountItem(copyMenu,amountNeedUpdate,menu[indexItem].price));
        this.goBack();
    }
    render() {
        const {menu} = this.props;
        const { indexItem } = this.props.route.params;
        const TOTAL_PRICE = this.state.amountUpdate *parseFloat(menu[indexItem].price);
        return (
            <SafeAreaView style={Styles.safeView}>
                <TouchableOpacity
                    style={Styles.existArea}
                    onPress={this.goBack}
                >
                </TouchableOpacity>
                <View style={Styles.updateArea}>
                    <View style={Styles.title}>
                        <View style={Styles.wrapContent}>
                            <TouchableOpacity
                                onPress={this.goBack.bind(this)}
                            >
                                <Text style={Styles.textCancel}>X</Text>
                            </TouchableOpacity>
                            <View style={Styles.infoFood}>
                                <Text style={Styles.nameFood}>{menu[indexItem].name}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={Styles.amountUpdate}>
                        <View style={Styles.wrapAmount}>
                            <TouchableOpacity
                                disabled={this.state.btnDownDisabled}
                                onPress={this.changeAmount.bind(this, 'decrease')}
                                style={this.state.btnDownDisabled?[Styles.btnAmount, Styles.disabled]:Styles.btnAmount}
                            >
                                <Text style={Styles.textAmount}>-</Text>
                            </TouchableOpacity>
                            <Text style={Styles.textUpdate}>{this.state.amountUpdate}</Text>
                            <TouchableOpacity
                                onPress={this.changeAmount.bind(this, 'increase')}
                                style={Styles.btnAmount}>
                                <Text style={Styles.textAmount}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.updateButton}>
                        
                        <BarShoppingCart
                            numberItem={this.state.amountUpdate}
                            action='Update'
                            totalPriceItem={TOTAL_PRICE}
                            onPress={this.updateItem.bind(this)}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => {
    const { menu } = state.shoppingCartReducer;
    return {
        menu: menu
    }
}
export default connect(mapStateToProps)(UpdateItem);
const Styles = StyleSheet.create({
    safeView: {
        // backgroundColor:'red'
    },
    existArea: {
        height: '50%'
    },
    updateArea: {
        backgroundColor: 'white',
        height: '50%',
        //borderRadius: 20
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    wrapContent: {
        width: '95%',
        alignSelf: 'center'
    },
    textCancel: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    nameFood: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20
    },
    btnAmount: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#26BBC3'
    },
    textAmount: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#26BBC3'
    },
    amountUpdate: {
        height: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        height: '30%'
    },
    updateButton: {
        height: '15%',
        width:'90%',
        alignSelf:'center'
    },
    textUpdate: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#26BBC3'
    },
    wrapAmount: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
        justifyContent: 'space-around'
    },
    disabled:{
       opacity:0.3
    }
});