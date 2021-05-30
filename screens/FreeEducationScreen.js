import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

import db from '../config';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';

export default class FreeEducationSrceen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: firebase.auth().currentUser.email,
      firstName: '',
      number: '',
      adress: '',
      discription: '',
      item: '',
      sponsorValue: '',
      standard: '',
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  showPopOut = () => {
    console.log('line no 42 is working');
    if (
      this.state.firstName !== '' &&
      this.state.number !== '' &&
      this.state.adress !== '' &&
      this.state.sponsorValue !== '' &&
      this.state.standard !== ''
    ) {
      console.log('line no 51 is working');
      var randomRequestId = this.createUniqueId();

      db.collection('free_education/').add({
        userId: this.state.userId,
        name: this.state.firstName,
        phoneNo: this.state.number,
        adress: this.state.adress,
        sponsorValue: this.state.sponsorValue,
        standard: this.state.standard,
        request_id: randomRequestId,
      });
      console.log('line no 65 is working');
      alert(
        'Thank you for your valuable donation. Your donation will be reached to the needy soon...'
      );
      this.props.navigation.navigate('WhatDonateScreen');
    }
    console.log('line no 70 is working');
    if (
      this.state.firstName === '' ||
      this.state.number === '' ||
      this.state.adress === '' ||
      this.state.sponsorValue === '' ||
      this.state.standard === ''
    ) {
      alert('Please FILL THE DETAILS properly to donate');
    }
  };

  render() {
    return (
      <View
        style={{
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Animatable.Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            borderColor: 'black',
            fontSize: 25,
          }}
          resizeMode={'stretch'}
          animation="bounceIn"
          duration={4000}>
          {' '}
          🤝 D O C H A 🤝{' '}
        </Animatable.Text>

        <ScrollView>
          <View
            style={{
              backgroundColor: '#05375a',
              height: 70,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                paddingTop: 10,
                fontSize: 20,
                fontWidth: 10,
              }}>
              Free Education Page
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 10,
                marginLeft: 90,
                width: 50,
                height: 50,
              }}
              onPress={() => {
                this.props.navigation.navigate('WhatDonateScreen');
              }}>
              <Image
                style={{ width: 40, height: 40, marginLeft: 90, marginTop: 10 }}
                source={require('../assets/home.png')}
              />
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Enter name"
            value={this.state.firstName}
            onChangeText={(text) => {
              this.setState({
                firstName: text,
              });
            }}
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 230,
              height: 20,
              fontSize: 15,
              borderColor: 'black',
              color: '#05375a',
            }}
          />

          <TextInput
            placeholder="Phone.No"
            value={this.state.number}
            keyboardType={'numeric'}
            maxLength={10}
            onChangeText={(text) => {
              this.setState({
                number: text,
              });
            }}
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 230,
              height: 20,
              fontSize: 15,
              borderColor: 'black',
              color: '#05375a',
            }}
          />

          <TextInput
            placeholder="Enter Address of your Location"
            value={this.state.adress}
            onChangeText={(text) => {
              this.setState({
                adress: text,
              });
            }}
            style={{
              marginLeft: 20,
              marginTop: 20,
              width: 280,
              height: 100,
              fontSize: 15,
              borderColor: 'black',
              color: '#05375a',
            }}
          />

          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              textDecoration: 'underline red',
              fontSize: 20,
            }}>
            Details about your Sponser of Education
          </Text>

          <TextInput
            placeholder="No Of Students"
            value={this.state.sponsorValue}
            keyboardType={'numeric'}
            maxLength={5}
            onChangeText={(text) => {
              this.setState({
                sponsorValue: text,
              });
            }}
            style={{
              width: 250,
              height: 20,
              marginTop: 20,
              marginLeft: 15,
              borderRadius: 10,
              borderColor: 'black',
              color: '#05375a',
            }}
          />

          <TextInput
            placeholder="Standard"
            keyboardType={'numeric'}
            maxLength={10}
            value={this.state.standard}
            onChangeText={(text) => {
              this.setState({
                standard: text,
              });
            }}
            style={{
              width: 230,
              height: 20,
              marginTop: 20,
              marginLeft: 15,
              borderRadius: 10,
              borderColor: 'black',
              color: '#05375a',
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 100,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: 30,
              marginLeft: 100,
            }}
            onPress={() => {
              console.log('onpress is working'), this.showPopOut();
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                paddingTop: 5,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
