import React from 'react';
import MainScreen from './mainScreen';
import {connect} from 'react-redux';
import HandleLogin from '../login/loginBUSLogic';

class RootScreen extends React.Component {
    render() {
        /**if isLogin is true navigate to Mainscreen: home tab,
          account tab, cart tab.
        */
        if(this.props.isLogin) return <MainScreen/>
        //isLogin false navigate to Login screen
        else return <HandleLogin />
    }
}
const mapStateToProps = state => (
    {
        isLogin: state.userReducer.isLogIn
    }
)
export default connect(mapStateToProps) (RootScreen);