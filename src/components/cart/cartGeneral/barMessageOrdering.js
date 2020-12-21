import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
}
    from 'react-native';
import {addRider} from '../../../redux/actions/rider';
import {connect} from 'react-redux';

class BarMessageOrdering extends React.Component {
    async componentDidMount() {
        // setTimeout(()=>{
        //     this.props.navigation.navigate('handleOrdering');
        // }, 2000)

        /**
         * Submit ordering information to server  
         * and receive rider information
         */
        const response = await fetch('https://5fb744d48e07f00016642985.mockapi.io/api/rider');
        const responseJson = await response.json();

        const {id, name, image, motorbike} = responseJson[0];
        this.props.dispatch(addRider(id, name, image, motorbike));

        //this.props.navigation.navigate('handleOrdering');
    }
    constructor(props) {
        super(props);

        this.state = {
            statusButton: 'Searching rider...'
        }
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('searchRider');
                }}
                style={Styles.btnMessage}>
                <View style={Styles.wrapContent}>
                    <Text style={Styles.textMessage}>{this.state.statusButton}</Text>
        
                    <Image style={Styles.img} source={{ uri: 'https://media.giphy.com/media/QxB8NJ9mUsEH7L5o4D/giphy.gif' }} />
                </View>
            </TouchableOpacity>
        );
    }
}
const Styles = StyleSheet.create({
    btnMessage: {
        width: '100%',
        backgroundColor: 'rgb(87,207,209)',
        position: 'absolute',
        bottom: 0,
        zIndex: 100
    },
    wrapContent: {
        width: '90%',
        alignSelf: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    textMessage: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    img: {
        height: 80,
        width: 80,
        borderRadius: 50,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end'
    }
});
export default connect() (BarMessageOrdering);