import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, Alert,
    SafeAreaView,
    Keyboard,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import Styles from '../registration/registerStyling';
import { Input } from '../general/input';
import * as valid from '../general/validation';
import { sendDataToServer } from '../general/networking';
import { Title } from '../general/title';
import { Bold } from '../general/bold';
import { isEmpty } from 'lodash';


//input component
export default class FormValidate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupButtonDisabled: true,
            messageEmail: false,
            messagePhone: false,
            messageFullname: false,
            messagePassword: false
        }
        this.inforUser = {
            email: '',
            phone: '',
            fullname: '',
            password: ''
        }
    }
    //check empty
    statusButton(value) {
        if (isEmpty(value) || ! /\S/.test(value))
            this.setState({ signupButtonDisabled: true });
        else
            this.disabled_btn();
    }
    //Manage button disable
    disabled_btn() {
        if (!isEmpty(this.inforUser.email) && !isEmpty(this.inforUser.phone) && !isEmpty(this.inforUser.fullname) &&
            !isEmpty(this.inforUser.password)) {
            this.setState({ signupButtonDisabled: false });
        }
    }
    //validate form      
    validateForm(field) {
        this.setState(() => {
            if (field == 'email') {
                let validEmail = valid.validEmail(this.inforUser.email),
                    emailError = valid.validation.email.fail;

                return { messageEmail: validEmail ? true : emailError }
            }
            else if (field == 'phone') {
                let validPhone = valid.validPhone(this.inforUser.phone),
                    phoneError = valid.validation.phone.fail;

                return { messagePhone: validPhone ? true : phoneError }
            }
            else if (field == 'fullname') {
                let validFullname = valid.validFullname(this.inforUser.fullname),
                    fullnameError = valid.validation.fullname.fail;

                return { messageFullname: validFullname ? true : fullnameError }
            }
            else if (field == 'password') {
                let validPassword = valid.validPassword(this.inforUser.password),
                    passwordError = valid.validation.password.fail;

                return { messagePassword: validPassword ? true : passwordError }
            }
        });
    }
    //Submit form
    async submitForm() {
        if (this.state.messageEmail === true && this.state.messagePhone === true &&
            this.state.messageFullname === true && this.state.messagePassword === true) {
            //Call API if form is valid
            try {
                const response = await sendDataToServer('http://192.168.1.140:3000/api/auth/signup', this.inforUser.email, this.inforUser.phone, this.inforUser.fullname, this.inforUser.password, null, 'https://firebasestorage.googleapis.com/v0/b/foodapp-292706.appspot.com/o/EyXZ5.png?alt=media&token=42615efd-ba6a-40c4-bfb1-231a398bbee0');
                if (response.status == 201) {
                    Alert.alert('Notification !', 'Sign up successfully');
                    this.props.navigation.navigate('Login');
                }
                //Duplicate email
                else if (response.status == 409) {
                    Alert.alert('Notification !', 'Email is duplicated');
                }
            }
            catch (error) {
                Alert.alert(error.toString());
            }
        }
    }
    render() {
        return (
            <SafeAreaView style={Styles.container}>
                <View style={Styles.container}>
                    <View style={Styles.cancelArea}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Login');
                            }}>
                            <Bold style={{ fontSize: 30 }}>X</Bold>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.containerForm}>
                        <Title title='Sign up' subtitle='Please fill out the information' />

                        <Input
                            label='Email: '
                            style={Styles.containerInput_Input}
                            onChangeText={(val) => {
                                this.inforUser.email = val;
                                this.statusButton(this.inforUser.email);
                            }}
                            onBlur={() => { this.validateForm('email') }}
                            message={this.state.messageEmail}
                            messageStyle={Styles.containerInput_message}
                        />

                        <Input
                            label='Phone: '
                            style={Styles.containerInput_Input}
                            onChangeText={(val) => {
                                this.inforUser.phone = val;
                                this.statusButton(this.inforUser.phone);
                            }}
                            onBlur={() => { this.validateForm('phone') }}
                            message={this.state.messagePhone}
                            messageStyle={Styles.containerInput_message}
                        />
                        <Input
                            label='Fullname: '
                            style={Styles.containerInput_Input}
                            onChangeText={(val) => {
                                this.inforUser.fullname = val;
                                this.statusButton(this.inforUser.fullname);
                            }}
                            onBlur={() => { this.validateForm('fullname') }}
                            message={this.state.messageFullname}
                            messageStyle={Styles.containerInput_message}
                        />

                        <Input
                            label='Password: '
                            style={Styles.containerInput_Input}
                            onChangeText={(val) => {
                                this.inforUser.password = val;
                                this.statusButton(this.inforUser.password);
                            }}
                            onBlur={() => { this.validateForm('password') }}
                            secureTextEntry={true}
                            message={this.state.messagePassword}
                            messageStyle={Styles.containerInput_message}
                        />
                        <ScrollView keyboardShouldPersistTaps='never'>
                            {/**Button signup */}
                            <TouchableOpacity
                                onPress={() => {
                                    this.submitForm();
                                }}
                                disabled={this.state.signupButtonDisabled}
                                style={this.state.signupButtonDisabled ? [Styles.containerForm_btn, Styles.disabled_btn] : Styles.containerForm_btn}
                            >
                                <Text style={Styles.containerForm_text}>Sign up</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}