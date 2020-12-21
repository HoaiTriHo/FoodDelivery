import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView
}
    from 'react-native';
import Styles from '../style/styleLoadingCategoryMerchant';
import LoadingMerchant from '../loadingMerchant';

export class CategoryMerchant extends React.Component {
    render() {
        const { category } = this.props.route.params;
        return (
            <SafeAreaView style={Styles.merchantWrap}>
                <View style={Styles.bartool}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                        style={Styles.cancel}>
                        <Text style={Styles.cancelText}>X</Text>
                    </TouchableOpacity>
                </View>
                <LoadingMerchant navigation={this.props.navigation} url={`?category=${category}`} title={category}/>
            </SafeAreaView>
        );
    }
}
export default CategoryMerchant;