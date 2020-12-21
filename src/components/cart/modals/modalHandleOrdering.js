import React from 'react';
import {
    View,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    Image
}
    from 'react-native';
import Styles from '../style/stylingModalSearchRider';
import SearchRider from '../cartGeneral/searchingRider';
import { connect } from 'react-redux';

class HandleOrdering extends React.Component {
    constructor(props) {
        super(props);



    }
    render() {
        console.log('Ten cua rider: '+this.props.name);
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
                    <SearchRider />
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => {
    const { id, name, image, motorbike } = state.riderReducer;

    return {
        id: id,
        name: name,
        image: image,
        motorbike: motorbike
    }
}
export default connect(mapStateToProps)(HandleOrdering);