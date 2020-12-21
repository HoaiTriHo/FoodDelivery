import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Alert,
    Image,
    SafeAreaView
}
    from 'react-native';
import Styles from './style/stylingCart';
import { connect } from 'react-redux';
import { deleteItem, removeCart } from '../../redux/actions/shoppingCartAction';
import imgCash from '../images/money.png';
import { isEmpty } from 'lodash';
import { ItemOrdering } from './cartGeneral/itemOrdering';
import {changBackground} from '../../redux/actions/shoppingCartAction';


class ListOrderingItem extends React.Component {
    deleteItem(index) {
        const copyMenu = [
            ...this.props.menu
        ]
        const menuAfterDelete = copyMenu.splice(index, 1);
        //update menu after delete item
        this.props.dispatch(deleteItem(copyMenu, menuAfterDelete[0].price, menuAfterDelete[0].numberFood));
        //check if item in cart is emtpy => remove cart
        if (this.props.numberOfItem === 1)
            this.props.dispatch(removeCart());

    }
    render() {
        return (
            <View style={Styles.ordering}>
                <View style={Styles.wrapContent}>
                    <Text style={Styles.title}>Your ordering</Text>
                    <FlatList
                        data={this.props.menu}
                        renderItem={({ item, index }) => (
                            <ItemOrdering
                                amount={item.numberFood}
                                nameFood={item.nameFood}
                                price={item.price}
                                deleteItem={() => this.deleteItem(index)}
                                showBtn={true}
                                updateItem={() => {
                                    this.props.dispatch(changBackground(true));
                                    this.props.navigation.navigate('modalUpdate', { indexItem: index })
                                }}
                            />
                        )}
                        keyExtractor={item => item.idFood.toString()}
                    />
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const { menu } = state.shoppingCartReducer
    return {
        menu: menu
    }
}
export default connect(mapStateToProps)(ListOrderingItem);