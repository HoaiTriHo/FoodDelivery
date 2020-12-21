import React from 'react';
import {
    View,
    Text
}
from 'react-native';
import Styles from '../style/stylingCart';
import {connect} from 'react-redux'

class NoticeCart extends React.Component {
    render() {
        return (
            <View style={Styles.noticeWrap}> 
                <Text style={Styles.noticeText}>{this.props.numberOfItem}</Text>
            </View>
        );
    }
}
const mapStateToProps = state => (
    {
        numberOfItem: state.shoppingCartReducer.numberOfItem
    }
)
export default connect(mapStateToProps) (NoticeCart);