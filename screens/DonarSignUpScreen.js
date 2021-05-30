import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_id: '',
      password: '',
      confirmPassword: '',
    };
  }

  userSignUp = (email_id, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert('The password does not match, Please try again');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email_id, password)
        .then((response) => {
          return (
            alert('User Added SuccessFully, Now Fill details to get started '),
            this.props.navigation.navigate('UserDetailsScreen')
          );
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert('Invalid Email Address or Password, Please try Again');
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Create Account</Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.footer_text}>E-MAIL</Text>

          <View style={styles.login_box}>
            <FontAwesome name="user-o" color="#05375a" size={18} />
            <TextInput
              placeholder="Your email"
              style={styles.textInput_style}
              keyboardType="email-address"
              onChangeText={(text) => {
                console.log(this.state.email_id);
                this.setState({
                  email_id: text,
                });
              }}
            />
          </View>

          <Text style={[styles.footer_text, { marginTop: 25 }]}>Password</Text>

          <View style={styles.login_box}>
            <Feather name="lock" color="#05375a" size={18} />
            <TextInput
              placeholder=' Your Password "Atleast 6 Characters"'
              style={styles.textInput_style}
              secureTextEntry={true}
              onChangeText={(text) => {
                console.log(this.state.password);
                this.setState({
                  password: text,
                });
              }}
            />
          </View>

          <Text style={[styles.footer_text, { marginTop: 25 }]}>
            Confirm Password
          </Text>

          <View style={styles.login_box}>
            <Feather name="lock" color="#05375a" size={18} />
            <TextInput
              placeholder=" Retype Password"
              style={styles.textInput_style}
              secureTextEntry={true}
              onChangeText={(text) => {
                console.log(this.state.confirmPassword);
                this.setState({
                  confirmPassword: text,
                });
              }}
            />
          </View>

          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button_Style}
              onPress={() => {
                this.userSignUp(
                  this.state.email_id,
                  this.state.password,
                  this.state.confirmPassword
                );
              }}>
              <Text style={styles.button_Text}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.text_container}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LoginScreen');
              }}>
              <Text style={styles.login_text}>
                Already Have a account! Login
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
  },
  footer_text: {
    color: '#05375a',
    fontSize: 20,
  },
  login_box: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput_style: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button_container: {
    alignItems: 'center',
    marginTop: 30,
  },
  button_Style: {
    width: '100%',
    height: 40,
    backgroundColor: '#5db8fe',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button_Text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  login_text: {
    color: '#5db8fe',
    fontWeight: 'bold',
  },
});
