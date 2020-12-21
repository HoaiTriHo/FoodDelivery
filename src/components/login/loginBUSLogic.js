import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image, Alert
} from 'react-native';
import Styles from '../registration/registerStyling';
import StyleLogin from './loginStyling';
import facebookLogo from '../images/facebook.png';
import { Input } from '../general/input';
import { validation } from '../general/validation';
import { Title } from '../general/title';
import { Bold } from '../general/bold';
import { checkDataLogin, getDataFromToken, saveInforFBToDB } from '../general/networking';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import storeData from '../general/Asynstorage';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions/userAction';


//Handle login
class HandleLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFieldEmpty: false,
            isLoginFail: false
        }
        this.inforUser = {
            email: null,
            password: null
        }
    }
    //Submit form
    SubmitForm() {
        //Check Email vs Password is empty
        let checkEmpty = isEmpty(this.inforUser.email) || isEmpty(this.inforUser.password);

        this.setState({
            isFieldEmpty: checkEmpty ? true : false
        }, () => this.sendUserLoginToServer());
    }
    async sendUserLoginToServer() {
        if (!this.state.isFieldEmpty) {
            try {
                const response = await checkDataLogin('http://192.168.1.126:3000/api/auth/signin', this.inforUser.email, this.inforUser.password);
                const responseJson = await response.json();
                //Check login success or fail
                //Return status 200 mean login success
                this.setState(() => {
                    if (response.status == 200) {
                        //save token
                        storeData('userToken', responseJson.token);
                        this.props.navigation.navigate('Home');

                        return { isLoginFail: false };
                    }
                    else return { isLoginFail: true }
                });
            }
            catch (error) {
                Alert.alert(error.toString());
            }
        }
    }
    //Handle login button
    async loginFB() {
        try {
            const responseFB = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (!responseFB.isCancelled) {
                //login succesfully
                const getTokenFromFB = await AccessToken.getCurrentAccessToken();
                this.getDataFromFB(getTokenFromFB.accessToken.toString());
                this.props.dispatch(logIn());
            }
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    //get data facebook from token
    async getDataFromFB(tokenFB) {
        try {
            //Get information from facebook token
            const responseFB = await getDataFromToken('https://graph.facebook.com/v8.0/me?fields=id%2Cname%2Cemail%2Cpicture&access_token=', tokenFB);
            const responseFBJson = await responseFB.json();
            //Save information to database
            const saveInforToDB = await saveInforFBToDB('http://192.168.1.126:3000/api/auth/signinwithfb', responseFBJson.email, responseFBJson.name, responseFBJson.id, responseFBJson.picture.data.url);
            //Server return token
            const tokenFromDB = await saveInforToDB.json();
            //Save token to storage
            storeData('userToken', tokenFromDB.token);
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    render() {
        return (
            <View style={Styles.containerRegister}>
                <View style={Styles.containerInput}>
                    <Title title='Sign in' />
                    {/** Message error */}
                    <Text style={StyleLogin.btnMes}>{this.state.isFieldEmpty ? validation.isEmpty : null}</Text>
                    <Text style={StyleLogin.btnMes}>{this.state.isLoginFail ? validation.statusButton : null}</Text>
                    <Input
                        label='Email: '
                        style={Styles.containerInput_Input}
                        onChangeText={(val) => {
                            this.inforUser.email = val;
                        }}
                    />

                    <Input
                        label='Password: '
                        style={Styles.containerInput_Input}
                        onChangeText={(val) => {
                            this.inforUser.password = val;
                        }}
                        secureTextEntry={true}
                    />
                    {/** Start Forgot password */}
                    <TouchableOpacity style={StyleLogin.forgot}>
                        <Text style={StyleLogin.forgot_text}>Forgot password ?</Text>
                    </TouchableOpacity>

                    {/** Button sign in */}
                    <TouchableOpacity
                        style={StyleLogin.containerForm_btn}
                        onPress={this.SubmitForm.bind(this)}
                    >
                        <Text style={StyleLogin.containerForm_text}>Sign in</Text>
                    </TouchableOpacity>

                    {/** Regis an account */}
                    <TouchableOpacity style={StyleLogin.signup}>
                        <Text>Don't have an account ?
                        <Bold
                                style={StyleLogin.signup_text}
                                onPress={() => {
                                    //this.props.navigation.navigate('SignUp');
                                }}
                            >Sign up</Bold>
                        </Text>
                    </TouchableOpacity>
                    <Text style={StyleLogin.center}>
                        <Text style={StyleLogin.textStyling}>-----------</Text>
                        Or
                        <Text style={StyleLogin.textStyling}>-----------</Text>
                    </Text>
                    {/** Button social component */}
                    <View style={StyleLogin.social}>
                        <TouchableHighlight
                            style={StyleLogin.facebook}
                            onPress={() => this.loginFB()}
                        >
                            <>
                                <Image style={StyleLogin.facebooklogo} source={facebookLogo} />
                                <Text style={StyleLogin.social_text}>Facebook</Text>
                            </>
                        </TouchableHighlight>
                    </View>
                    {/**End */}
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => (
    {
        isLogin: state.userReducer.isLogIn
    }
)
export default connect(mapStateToProps)(HandleLogin);