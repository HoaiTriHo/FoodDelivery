import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import Styles from './style/styleGetLocation';
import imgLocation from '../images/location-2.png';
import { connect } from 'react-redux';
import { getPosition } from '../../redux/actions/userAction';
import { saveUserInfor } from '../../redux/actions/userAction';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { getAddress } from '../general/networking';

class GetLocation extends React.Component {
    async componentDidMount() {
        try {
            const granted = await request(
                Platform.select({
                    ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
                    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
                })
            );
            //If the users allow to access their location
            if (granted === RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(this.getLocation.bind(this));
                this.getUserInformation();
            }
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    //get information user from db
    async getUserInformation() {
        try {
            //get user information by token
            const response = await fetch('https://5fb744d48e07f00016642985.mockapi.io/api/infoUser')
            const responseJson = await response.json();
            const { id, fullname, email, phone, avarta, login_social } = responseJson[0];
            //save user information to store
            this.props.dispatch(saveUserInfor(id, fullname, email, phone, avarta, login_social));
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    //Get current user location
    async getLocation(coord) {
        try {
            const coordinates = [coord.coords.latitude, coord.coords.longitude];
            const resAdress = await getAddress(...coordinates);
            //save user position to store
            this.props.dispatch(getPosition(resAdress, ...coordinates, true));
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    render() {
        return (
            <SafeAreaView style={Styles.safeAreaView}>
                <View style={Styles.location}>
                    <View style={Styles.address}>
                        <Image style={Styles.iconLocation} source={imgLocation} />
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('userLocationModal');
                            }}
                            style={Styles.btnGetLocation}>
                            <Text
                                numberOfLines={1}
                                style={Styles.textAddress}>
                                {this.props.currentLocation}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => (
    {
        currentLocation: state.userReducer.address
    }
)

export default connect(mapStateToProps)(GetLocation);