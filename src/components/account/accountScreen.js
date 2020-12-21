import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import InformationUser from './informationUser';
import Styles from './stylingAccount';
import UserProfile from './userProfile';
import LogOutButton from './logOutButton';

const AccountScreen = () => (
    <ScrollView>
        <View style={Styles.container}>
            <InformationUser />
            <View style={Styles.option}>
                <UserProfile />
                <LogOutButton/>
            </View>
        </View>
    </ScrollView>
)

export default AccountScreen;