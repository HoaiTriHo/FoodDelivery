import React from 'react';
import {
    View,
    Image,
    Text
}
    from 'react-native';
import Styles from './stylingAccount';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import * as valid from '../general/validation';

class InformationUser extends React.Component {
    render() {
        const { avarta, name, phone } = this.props;
        console.log('The avarta: '+avarta);
        console.log('isLoginSocial: '+this.props.isLoginSocial);
        console.log('my name: '+this.props.name);
        return (
            <View style={Styles.inforUser}>
                {/**Image of user */}
                <View style={Styles.image_wrap}>
                    <Image style={Styles.image} source={{ uri: avarta }} />
                </View>
                {/** Information*/}
                <View style={Styles.text_wrap}>
                    <Text style={Styles.profile}>{name}</Text>
                </View>
                <View style={Styles.textMes}>
                    <Text style={Styles.textWrong}>{isEmpty(phone) ? valid.validation.isPhone : null}</Text>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => (
    {
        avarta: state.userReducer.avarta,
        name: state.userReducer.name,
        phone: state.userReducer.phone,
        isLoginSocial: state.userReducer.isLoginSocial,
        
        id: state.userReducer.id,
        isLogIn: state.userReducer.isLogIn
    }
)
export default connect(mapStateToProps)(InformationUser);