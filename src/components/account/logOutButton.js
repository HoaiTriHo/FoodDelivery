import React from 'react';
import { connect } from 'react-redux';
import { ItemOption } from './accountGeneral/itemOption';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {logOut} from '../../redux/actions/userAction';

const LogOutButton = ({dispatch}) => {
    return (
        <ItemOption
            onPress={() => {
                AsyncStorage.removeItem('userToken');
                Alert.alert('Log out successfully');
                dispatch(logOut());
            }}
            name='Log out' />
    )
}
export default connect() (LogOutButton);