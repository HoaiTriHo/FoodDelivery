import React from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    Image
} from 'react-native';
import logo from '../images/light.png';
import {getData} from '../general/Asynstorage';
import {connect} from 'react-redux';
import { isEmpty } from 'lodash';
import {logIn} from '../../redux/actions/userAction';

class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={Styles.loading}>
                <Image source={logo} />
                <ActivityIndicator size='large' color='white' />
            </View>
        )
    }
    async componentDidMount() {
        const tokenUser = await getData('userToken');
        setTimeout(() => { 
            //this.props.navigation.navigate(token != null?'Home':'Login');
            
            if(!isEmpty(tokenUser))
                this.props.dispatch(logIn());
            this.props.navigation.navigate('RootScreen');
        }, 3000)
    }
}

export default connect() (LoadingScreen);

const Styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: '#84DEDD',
        justifyContent: 'center',
        alignItems: 'center'
    }
});