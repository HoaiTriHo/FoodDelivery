import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    FlatList,
    Alert
} from 'react-native';
import Styles from '../style/styleGetLocation';
import { Bold } from '../../general/bold';
import MapView from 'react-native-maps';
import { getAddress } from '../../general/networking';
import imgMarker1 from '../../images/icons8-marker.png';
import { connect } from 'react-redux';
import { getPosition } from '../../../redux/actions/userAction';
import ShowItemAdress from '../homeGereral/loadItemAdress';

class UserPositionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMapNone: false,
            searchFocus: true,
            location: [],
            displaySearchLocation: true
        }
    }
    //change location when choose address
    changeLocation(item) {
        this.setState({
            displayMapNone: false,
            searchFocus: true,
            displaySearchLocation: false
        });
        //update user location
        this.props.dispatch(getPosition(item.formatted_address, item.geometry.location.lat, item.geometry.location.lng, true))
    }
    //Search address
    async searchLocation(stringLocation) {
        try {
            const responseAddress = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + stringLocation + '&key=AIzaSyBQeoXvCkcv7FolXpk7A_nhV-oYm9xmljw' + '&language=Vietnamese' + '&location=10.82302, 106.62965' + '&radius=100000');
            const json = await responseAddress.json();

            this.setState({ location: json.results });
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    //get Realtime user location
    async regionChange(region) {
        try {
            const address = await getAddress(region.latitude, region.longitude);
            //update location
            this.props.dispatch(getPosition(address, region.latitude, region.longitude, true));
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    render() {
        return (
            <SafeAreaView style={Styles.searchLocationWrap}>
                <View style={Styles.bar}>
                    <View style={Styles.searchLocation}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                            style={Styles.btnBack}>
                            <Text style={Styles.btnBack}>X</Text>
                        </TouchableOpacity>
                        <Bold style={Styles.text_location}>Enter an address</Bold>
                    </View>
                    <View style={Styles.searchForm}>
                        <TextInput
                            onChangeText={val => {
                                this.searchLocation(val);
                            }}
                            onFocus={() => {
                                this.setState({
                                    searchFocus: false,
                                    displayMapNone: true,
                                    displaySearchLocation: true
                                })
                            }}
                            value={this.state.searchFocus ? this.props.currentLocation : null}
                            placeholder='Where is your current location'
                            style={Styles.search} />

                        <View style={this.state.displaySearchLocation ? Styles.showLocation : Styles.hidden}>
                            <FlatList
                                data={this.state.location}
                                renderItem={
                                    ({ item }) => (
                                        <ShowItemAdress
                                            onPress={() => this.changeLocation(item)}
                                            name={item.name}
                                            location={item.formatted_address}
                                        />
                                    )
                                }
                                keyExtractor={item => item.place_id}
                            />
                        </View>
                    </View>
                </View>
                <View style={this.state.displayMapNone ? Styles.hidden : Styles.contentLocation}>
                    <MapView style={Styles.map}
                        region={this.props.coordinates}
                        showsUserLocation={true}
                        scrollEnabled={true}
                        onRegionChangeComplete={(region) => {
                            this.regionChange(region);
                        }}
                    >
                        <Image style={Styles.marker} source={imgMarker1} />
                    </MapView>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                        style={Styles.btnConfirm} >
                        <Text style={Styles.text}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => (
    {
        currentLocation: state.userReducer.address,
        coordinates: state.userReducer.coordinates
    }
)
export default connect(mapStateToProps)(UserPositionModal);