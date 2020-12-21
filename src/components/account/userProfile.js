import React from 'react';
import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    ScrollView,
    Modal
} from 'react-native';
import Styles from './stylingAccount';
import { getData } from '../general/Asynstorage';
import * as valid from '../general/validation';
import { isEmpty } from 'lodash';
import { Input } from '../general/input'
import { sendTokenToServer, changePassword, updateUser } from '../general/networking';
import { Bold } from '../general/bold';
import { connect } from 'react-redux';
import { updateUserInfor } from '../../redux/actions/userAction';
import { ItemOption } from './accountGeneral/itemOption';


class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //Show pop up for users change their password
            showPopUpChangePassword: false,
            showUserProfile: false,

            name: null,
            email: null,
            phone: null,
            password: null,
            newPassword: null,

            //Error message
            nameErr: true,
            emailErr: true,
            phoneErr: true,
            passwordErr: true,
            newPasswordErr: true
        }
    }
    componentDidMount() {
        const { name, phone, email } = this.props;
        this.setState({
            name: name,
            phone: phone,
            email: email
        })

    }
    //Show user profile
    showProfile() {
        this.setState({
            showUserProfile: !this.state.showUserProfile
        });
    }
    validInformation(field) {
        const { name, email, phone, newPassword, password } = this.state;

        this.setState(() => {
            if (field == 'name')
                return {
                    nameErr: valid.validFullname(name) ? true : valid.validation.fullname.fail
                }
            if (field == 'email')
                return {
                    emailErr: valid.validEmail(email) ? true : valid.validation.email.fail
                }
            if (field == 'phone')
                return {
                    phoneErr: valid.validPhone(phone) ? true : valid.validation.phone.fail
                }
            if (field == 'newpassword')
                return {
                    newPasswordErr: valid.validPassword(newPassword) ? true : valid.validation.password.fail
                }
            if (field == 'password')
                return {
                    passwordErr: isEmpty(password) ? valid.validation.isEmpty : true
                }

        });
    }

    async changePassword() {
        //call api change password
        const { passwordErr, newPasswordErr, password, newPassword } = this.state;
        try {
            if (passwordErr === true && newPasswordErr === true) {
                const token = await getData('userToken');
                const response = await changePassword('http://192.168.1.126:3000/api/user/changepassword', token, password, newPassword);
                //response current password is wrong
                if (response.status == 502) {
                    this.setState({
                        passwordErr: valid.validation.password.wrong
                    })
                }
                else {
                    Alert.alert('Update password successfull!');
                }
            }
        } catch (error) {
            Alert.alert(error.toString());
        }
    }
    async updateUser() {
        try {
            const { name, email, phone } = this.state;
            const token = await getData('userToken');
            const response = await updateUser('https://5fb744d48e07f00016642985.mockapi.io/api/infoUser/1', token, name, email, phone);

            if (response.status == 200) {
                Alert.alert('Update successfully');
                this.props.dispatch(updateUserInfor(email, name,phone));
                this.setState({
                    isEmptyPhone: false,
                    showUserProfile:false
                })
            }
            else
                Alert.alert('Update fail please try again');
        }
        catch (error) {
            Alert.alert(error.toString());
        }
    }
    render() {
        return (
            <View>
                <ItemOption onPress={() => { this.showProfile() }} name='Profile' />
                {
                    this.state.showUserProfile ?
                        (<View>
                            <View style={Styles.subProfile}>
                                <Input
                                    label='Fullname'
                                    value={this.state.name}
                                    message={this.state.nameErr}
                                    messageStyle={Styles.textWrong}
                                    disbled={this.props.isLoginSocial ? Styles.disabled : null}
                                    font={Styles.itemText}

                                    onChangeText={(value) => {
                                        this.setState({ name: value })
                                    }}
                                    onBlur={() => { this.validInformation('name') }}
                                />
                            </View>
                            <View style={Styles.subProfile}>
                                <Input
                                    label='Email'
                                    value={this.state.email}
                                    message={this.state.emailErr}
                                    messageStyle={Styles.textWrong}
                                    disbled={this.props.isLoginSocial ? Styles.disabled : null}
                                    font={Styles.itemText}

                                    onChangeText={(value) => {

                                        this.setState({ email: value })
                                        this.manage.isUpdate = true;
                                    }}
                                    onBlur={() => { this.validInformation('email') }}
                                />
                            </View>
                            <View style={Styles.subProfile}>
                                {this.props.isLoginSocial ?
                                    null :
                                    (<Bold
                                        style={Styles.textChangePassword}
                                        onPress={() => {
                                            this.setState({ showPopUpChangePassword: true });
                                        }

                                        }>
                                        Change password
                                    </Bold>
                                    )}
                            </View>
                            <View style={Styles.subProfile}>
                                <Input
                                    label='Phone'
                                    message={this.state.phoneErr}
                                    messageStyle={Styles.textWrong}
                                    font={Styles.itemText}
                                    autoFocus={true}

                                    onChangeText={(value) => {
                                        this.setState({ phone: value })

                                    }}
                                    value={this.state.phone}
                                    onBlur={() => { this.validInformation('phone') }}
                                />
                            </View>
                            <ScrollView keyboardShouldPersistTaps='never'>
                                <TouchableOpacity
                                    onPress={() => this.updateUser()}
                                    style={Styles.btnUpdate}>
                                    <Text style={Styles.textUpdate}>Update</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        ) : null
                }
                {/***Pop up change password */}
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.showPopUpChangePassword}
                >
                    <View style={Styles.popup}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ showPopUpChangePassword: false });
                            }}
                            style={Styles.close}>
                            <Text style={Styles.textExist}>X</Text>
                        </TouchableOpacity>
                        <View style={Styles.subProfile}>
                            <Input
                                autoFocus={true}
                                secureTextEntry={true}
                                label='Current Password'
                                message={this.state.passwordErr}
                                messageStyle={Styles.textWrong}
                                font={Styles.itemText}
                                onChangeText={(value) => {
                                    this.setState({ password: value })
                                }}
                                onBlur={() => this.validInformation('password')}
                            />
                            <Input
                                secureTextEntry={true}
                                label='New Password'
                                value={this.state.newPassword}
                                message={this.state.newPasswordErr}
                                messageStyle={Styles.textWrong}
                                font={Styles.itemText}
                                onChangeText={(value) => {
                                    this.setState({ newPassword: value })
                                }}
                                onBlur={() => this.validInformation('newpassword')}
                            />
                            <ScrollView keyboardShouldPersistTaps='never'>
                                <TouchableOpacity
                                    onPress={() => this.changePassword()}
                                    style={Styles.btnUpdate}>
                                    <Text style={Styles.textUpdate}>Change</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
const mapStateToProps = state => (
    {
        email: state.userReducer.email,
        name: state.userReducer.name,
        phone: state.userReducer.phone,
        isLoginSocial: state.userReducer.isLoginSocial
    }
)
export default connect(mapStateToProps)(UserProfile);