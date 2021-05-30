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

export default class CharityLoginScreen extends Component {
  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return (
          alert('SuccessFully Logined'), console.log('Logined SuccessFully')
        );
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return (
          alert(
            'Invalid Email_Id or Password, Please Re-Login with correct User Id and Password'
          ),
          this.props.navigation.navigate('CharityLoginScreen')
        );
      });
  };

  constructor() {
    super();
    this.state = {
      email_id: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Welcome to 🤝 D O C H A 🤝</Text>
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
          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button_Style}
              onPress={() => {
                this.userLogin(this.state.email_id, this.state.password),
                  this.props.navigation.navigate('CharityHomeScreen');
              }}>
              <Text style={styles.button_Text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity
              style={[styles.button_Style, { marginTop: -40 }]}
              onPress={() => {
                this.props.navigation.navigate('CharitySignUpScreen');
              }}>
              <Text style={styles.button_Text}>Sign Up</Text>
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
    fontSize: 19,
    marginTop: 30,
    textAlign: 'center',
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
    marginTop: 50,
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
});
