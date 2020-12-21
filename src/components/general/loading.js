import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Image
} from 'react-native';
import logo from '../images/light.png';
import {getData} from '../general/Asynstorage';
import {connect} from 'react-redux';


class Loading extends React.Component {
    render() {
        console.log('in screen loading: '+this.props.isLogOut);
        return (
            <View style={Styles.loading}>
                <Image source={logo} />
                <ActivityIndicator size='large' color='white' />
            </View>
        )
    }
    componentDidMount() {
        getData('userToken').then((token)=>{
            setTimeout(() => { 
                this.props.navigation.navigate(token != null?'Home':'Login'); 
            }, 3000)
        });
    }
}
const mapStateToProps = state => (
    {
        currentLocation: state.userReducer.address,
        coordinates: state.userReducer.coordinates,
        isLogOut: state.userReducer.isLogOut,
        permission: state.userReducer.permission,
    }
)
export default connect(mapStateToProps) (Loading);

const Styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: '#13CE66',
        justifyContent: 'center',
        alignItems: 'center'
    }
});