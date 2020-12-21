import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
}
    from 'react-native';
import imgRice from '../images/rice-bowl.png';
import imgDrink from '../images/mojito.png';
import Styles from './style/styleLoadingCategoryMerchant';

const Category = ({navigation}) => (
    <View style={Styles.categoryWrap}>
        <Text style={Styles.categoryText}>Category</Text>
        <View style={Styles.categoryIcon}>
            <TouchableOpacity
                style={Styles.itemCategory}
                onPress={() => {
                    navigation.navigate('categoryMerchant', {
                        category: 'rice'
                    });
                }}
            >
                <Image style={Styles.img} source={imgRice} />
                <Text style={Styles.categoryText}>Rice</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.itemCategory}
                onPress={() => {
                    navigation.navigate('categoryMerchant', {
                        category: 'drinking'
                    });
                }}
            >
                <Image style={Styles.img} source={imgDrink} />
                <Text style={Styles.categoryText}>Drinking</Text>
            </TouchableOpacity>
        </View>
        <View style={Styles.loadMerchant}>

        </View>
    </View>
);
export default Category;