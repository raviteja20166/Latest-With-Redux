import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Actions from '../Actions/ActionTypes';

class NewScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            isNameValid: true,
            isEmailValid: true,
            isMobileNumberValid: true,
        };
    }


    saveUserAndOpenCamera = () => {

        const { name, phone, email } = this.state
        this.props.login({
            name: name,
            phone: phone,
            email: email
        })
        this.props.navigation.navigate('Camera')
    }
    validateEmail = (email) => {

        console.log('validateEmail', email)
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    validateMobile = (mobile) => {
        var re = /^[0]?[789]\d{9}$/;
        return re.test(mobile);
    }

    // property can be email, mobile
    validate = (property, value) => {

        console.log(property, value, this.state)

        this.setState({ [property]: value })

        if (property === 'email') {
            // this.setState({ isEmailValid: this.validateEmail(value) })
            this.setState({ isEmailValid: this.validateEmail(value) })
        }

        if (property === 'phone') {
            this.setState({ isMobileNumberValid: this.validateMobile(value) })
        }
    }
    validateAndnavigate = () => {
        const { phone, email, name, isNameValid, isEmailValid, isMobileNumberValid } = this.state
        console.log(isNameValid, isEmailValid, isMobileNumberValid)
        if (!name || !email || !phone) {
            return
        }
        else if (isNameValid && isEmailValid && isMobileNumberValid) {
            this.saveUserAndOpenCamera()
        }
    }



    render() {

        const { isEmailValid, isMobileNumberValid, isNameValid } = this.state

        return (
            <ImageBackground source={require('../assets/backimage.jpg')}
                style={styles.ImageBackground}>
                <ScrollView style={styles.container}>

                    <Text style={styles.TextStyle}>Last thing,</Text>
                    <Text style={{ margin: 30, fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 50 }}>We need to know you better.</Text>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', left: 25, paddingBottom: 5 }}>name</Text>

                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.validate('name', text)}
                        placeholder={'name'}
                        style={styles.input}
                    />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', left: 25, paddingBottom: 5 }}>email Address</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={(email) => { this.validate('email', email) }}
                        placeholder={'email Address'}
                        style={styles.input}
                    />
                    {!isEmailValid
                        ? <Text style={{ color: 'red', left: 20, }}>email is invalid</Text>
                        : null
                    }


                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', left: 25, paddingBottom: 5 }}>phone</Text>

                    <TextInput
                        value={this.state.mobileNumber}
                        onChangeText={(phone) => { this.validate('phone', phone) }}
                        placeholder={'phone'}
                        style={styles.input}
                        maxLength={10}
                        keyboardType={"numeric"}
                    />
                    {!isMobileNumberValid
                        ? <Text style={{ color: 'red', left: 20, }}>mobileNumber is invalid</Text>
                        : null
                    }


                    <View style={styles.Button}>

                        <Button
                            onPress={this.validateAndnavigate}
                            style={styles.Button}
                            title="I'm ready,take my photo"
                            color="red" />
                    </View>

                </ScrollView>
            </ImageBackground>




        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10
    },

    input: {
        height: 44,
        paddingTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20
        // width: 320,
        // left: 20,


    },
    ImageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'transparent'


    },

    TextStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 60,
        marginBottom: 30,
        top: 50,
        left: 30,

    },

    Button: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

        borderRadius: 10,
        marginBottom: 20,
        marginRight: 20


    }


});


// state: Redux store state (Complete App state)
const mapStateToProps = (state) => ({
    data: state.loginReducer
    // data is user-defined property, that 
});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(
        {
            type: Actions.LOGIN,
            name: user.name,
            phone: user.phone,
            email: user.email
        }
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewScreen);
