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
      email_id: firebase.auth().currentUser.email,
      name: '',
      last_name: '',
      phone_no: '',
      address: '',
    };
  }

  addUserDetails = () => {
    db.collection('users').add({
      first_name: this.state.name,
      last_name: this.state.last_name,
      phone_no: this.state.phone_no,
      email_id: this.state.email_id,
    });

    alert('SucessFully Logined');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Fill Details</Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.footer_text}>First Name</Text>

          <View style={styles.login_box}>
            <FontAwesome name="user-o" color="#05375a" size={18} />
            <TextInput
              placeholder="Your First Name"
              maxLength={12}
              style={styles.textInput_style}
              onChangeText={(text) => {
                console.log(this.state.name);
                this.setState({
                  name: text,
                });
              }}
            />
          </View>

          <Text style={[styles.footer_text, { marginTop: 25 }]}>Last Name</Text>

          <View style={styles.login_box}>
            <Feather name="lock" color="#05375a" size={18} />
            <TextInput
              placeholder=" Your Last Name"
              maxLength={12}
              style={styles.textInput_style}
              onChangeText={(text) => {
                console.log(this.state.last_name);
                this.setState({
                  last_name: text,
                });
              }}
            />
          </View>

          <Text style={[styles.footer_text, { marginTop: 25 }]}>
            Mobile No.
          </Text>

          <View style={styles.login_box}>
            <Feather name="phone" color="#05375a" size={18} />
            <TextInput
              placeholder=" Your Mobile No"
              keyboardType={'numeric'}
              maxLength={10}
              style={styles.textInput_style}
              onChangeText={(text) => {
                console.log(this.state.phone_no);
                this.setState({
                  phone_no: text,
                });
              }}
            />
          </View>

          <Text style={[styles.footer_text, { marginTop: 25 }]}>Address</Text>

          <View style={styles.login_box}>
            <Feather name="user-o" color="#05375a" size={18} />
            <TextInput
              placeholder=" Your Address"
              multiline={10}
              style={styles.textInput_style}
              onChangeText={(text) => {
                console.log(this.state.address);
                this.setState({
                  address: text,
                });
              }}
            />
          </View>

          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button_Style}
              onPress={() => {
                this.props.navigation.navigate('DonarLoginScreen'),
                  this.addUserDetails();
              }}>
              <Text style={styles.button_Text}>Get Started</Text>
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
});
