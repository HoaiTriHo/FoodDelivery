import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Alert,
}
    from 'react-native';
import Styles from './style/styleLoadingAllMerchant';
import { connect } from 'react-redux';
import { LoadMerchantItem } from './homeGereral/loadingMerchantItem';
import { getInfoMerchant } from '../.././/redux/actions/merchantAction';
import { loadingMerchant } from '../general/networking';

class LoadingMerchant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataMerchant: [],
        }
    }
    async componentDidMount() {
        try {
            //loading merchant from user location
            const merchantJson = await loadingMerchant(this.props.url);
            this.setState({
                dataMerchant: merchantJson
            })
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.text}>{this.props.title}</Text>
                <FlatList
                    data={this.state.dataMerchant}
                    renderItem={({ item }) => (
                        <LoadMerchantItem
                            onPress={() => {
                                //Save information merchant to store
                                this.props.dispatch(getInfoMerchant(item.id, item.nameMerchant, item.distance, item.address, item.category));
                                this.props.navigation.navigate('detailMerchant');
                            }}
                            img={item.image}
                            nameMerchant={item.nameMerchant}
                            discription={item.discription}
                            distance={item.distance}
                        />
                    )}
                />
            </View>
        );
    }
}
/*
    Use props coordinates to send to the server 
    for getting merchant nearby user location
*/
const mapStateToProps = state => (
    {
        coordinates: state.coordinates
    }
)
export default connect(mapStateToProps)(LoadingMerchant);