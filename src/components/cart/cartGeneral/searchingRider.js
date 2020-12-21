import React from 'react';
import{
    View,
    Text,
    Image
}
from 'react-native';
import Styles from '../style/stylingModalSearchRider';

const SearchRider = () => (
    <View>
        <View style={Styles.wrapContent}>
            <Text style={Styles.textSearch}>Searching rider.....</Text>
        </View>
        <View style={Styles.imgWrap}>
            <Image style={Styles.img} source={{ uri: 'https://media.giphy.com/media/U3IgAwhwINa57mRrL5/giphy.gif' }} />
        </View>
    </View>
)
export default SearchRider;