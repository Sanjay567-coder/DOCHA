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
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import db from '../config';
import firebase from 'firebase';

export default class CharityDetailsScreen extends Component {
  constructor() {
    super();
    this.state = {
      email_id: firebase.auth().currentUser.email,
      name: '',
      last_name: '',
      phone_no: '',
      address: '',
      landline: '',
      landmark: '',
      trusteeName: '',
    };
  }

  addUserDetails = () => {
    db.collection('users').add({
      first_name: this.state.name,
      address: this.state.address,
      landmark: this.state.landmark,
      trustee_name: this.state.trustee_name,
      phone_no: this.state.phone_no,
      landline: this.state.landline,
      email_id: this.state.email_id,
    });

    alert('SucessFully Logined');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header_text}>Fill Details</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.footer_text}>Charity Name</Text>

            <View style={styles.login_box}>
              <FontAwesome name="user-o" color="#05375a" size={18} />
              <TextInput
                placeholder=" Charity Name"
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

            <Text style={[styles.footer_text, { marginTop: 25 }]}>Address</Text>

            <View style={styles.login_box}>
              <Feather name="user-o" color="#05375a" size={18} />
              <TextInput
                placeholder=" Address"
                multiline={true}
                style={styles.textInput_style}
                onChangeText={(text) => {
                  console.log(this.state.address);
                  this.setState({
                    address: text,
                  });
                }}
              />
            </View>

            <Text style={[styles.footer_text, { marginTop: 25 }]}>
              Landmark
            </Text>

            <View style={styles.login_box}>
              <Feather name="user-o" color="#05375a" size={18} />
              <TextInput
                placeholder=" Landmark Nearby"
                multiline={true}
                style={styles.textInput_style}
                onChangeText={(text) => {
                  console.log(this.state.landmark);
                  this.setState({
                    landmark: text,
                  });
                }}
              />
            </View>

            <Text style={[styles.footer_text, { marginTop: 25 }]}>
              Trustee Name
            </Text>

            <View style={styles.login_box}>
              <Feather name="user-o" color="#05375a" size={18} />
              <TextInput
                placeholder=" Trustee Name"
                maxLength={20}
                style={styles.textInput_style}
                onChangeText={(text) => {
                  console.log(this.state.trustee_name);
                  this.setState({
                    trustee_name: text,
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
                placeholder=" Mobile No"
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

            <Text style={[styles.footer_text, { marginTop: 25 }]}>
              Charity Landline No.
            </Text>

            <View style={styles.login_box}>
              <Feather name="phone" color="#05375a" size={18} />
              <TextInput
                placeholder=" Charity Landline No"
                keyboardType={'numeric'}
                maxLength={10}
                style={styles.textInput_style}
                onChangeText={(text) => {
                  console.log(this.state.landline);
                  this.setState({
                    landline: text,
                  });
                }}
              />
            </View>

            <View style={styles.button_container}>
              <TouchableOpacity
                style={styles.button_Style}
                onPress={() => {
                  this.addUserDetails(),
                    this.props.navigation.navigate('CharityLoginScreen');
                }}>
                <Text style={styles.button_Text}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
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
