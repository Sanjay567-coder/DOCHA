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

export default class FoodDonateScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: firebase.auth().currentUser.email,
      firstName: '',
      number: '',
      adress: '',
      message: '',
      disabled: true,
      whichMeal: '',
      date: '',
      noOfFoods: '',
      time: '',
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
      this.state.discription !== '' &&
      this.state.whichMeal !== '' &&
      this.state.date !== '' &&
      this.state.noOfFoods !== '' &&
      this.state.time !== ''
    ) {
      console.log('line no 51 is working');
      var randomRequestId = this.createUniqueId();

      db.collection('food_donations/').add({
        userId: this.state.userId,
        name: this.state.firstName,
        phoneNo: this.state.number,
        adress: this.state.adress,
        description: this.state.discription,
        whichMeal: this.state.whichMeal,
        date: this.state.date,
        request_id: randomRequestId,
        howManyPeople: this.state.noOfFoods,
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
      this.state.item === '' ||
      this.state.whichMeal === '' ||
      this.state.date === '' ||
      this.state.noOfFoods === '' ||
      this.state.time === ''
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
              Food Donation Page
            </Text>
            <TouchableOpacity
              style={{
                marginTop: -50,
                marginLeft: 180,
                width: 20,
                height: 20,
              }}
              onPress={() => {
                this.props.navigation.navigate('WhatDonateScreen');
              }}>
              <Image
                style={{ width: 40, height: 40, marginLeft: 75, marginTop: 15 }}
                source={require('../assets/home.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              style={{
                marginLeft: 20,
                marginTop: 20,
                width: 230,
                height: 20,
                fontSize: 15,
                borderColor: 'blue',
                color: 'black',
              }}
              placeholder="Enter name"
              underlineColorAndroid="transparent"
              value={this.state.firstName}
              onChangeText={(text) => {
                this.setState({
                  firstName: text,
                });
              }}
            />
          </View>

          <View>
            <TextInput
              placeholder="Phone.No"
              keyboardType={'numeric'}
              maxLength={10}
              value={this.state.number}
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
          </View>

          <View>
            <TextInput
              placeholder="Enter Address "
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
          </View>

          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              textDecoration: 'underline red',
              fontSize: 20,
            }}>
            Details about your Food Donation
          </Text>

          <View>
            <TextInput
              placeholder="Discription about Food"
              value={this.state.discription}
              onChangeText={(text) => {
                this.setState({
                  discription: text,
                });
              }}
              style={{
                width: 280,
                height: 100,
                marginTop: 20,
                marginLeft: 15,
                borderRadius: 10,
                borderColor: 'black',
                color: '#05375a',
              }}
            />
          </View>

          <View>
            <TextInput
              placeholder="No of People to Donate"
              keyboardType={'numeric'}
              maxLength={10}
              value={this.state.noOfFoods}
              onChangeText={(text) => {
                this.setState({
                  noOfFoods: text,
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
          </View>

          <View>
            <TextInput
              placeholder="Tiffin or Lunch or Dinner"
              value={this.state.whichMeal}
              onChangeText={(text) => {
                this.setState({
                  whichMeal: text,
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
          </View>

          <View>
            <TextInput
              placeholder="Date"
              keyboardType={'numeric'}
              maxLength={10}
              value={this.state.date}
              onChangeText={(text) => {
                this.setState({
                  date: text,
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
          </View>

          <View>
            <TextInput
              placeholder="Time of Donation"
              keyboardType={'numeric'}
              maxLength={10}
              value={this.state.time}
              onChangeText={(text) => {
                this.setState({
                  time: text,
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
          </View>

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
              console.log('line no 42 is working'), this.showPopOut();
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
