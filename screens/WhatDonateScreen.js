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
import * as Animatable from 'react-native-animatable';

export default class WhatDonateScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
              fontSize: 30,
              fontWidth: 10,
            }}>
            Donation Page
          </Text>

          <TouchableOpacity
            style={{
              marginTop: -50,
              marginLeft: 180,
              width: 50,
              height: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('DonarHomeScreen');
            }}>
            <Image
              style={{ width: 40, height: 40, marginLeft: 75, marginTop: 15 }}
              source={require('../assets/home.png')}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            textDecoration: 'underline red',
            fontSize: 20,
          }}>
          What kind of Donation are you Intrested
        </Text>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 85,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: 10,
              marginLeft: 15,
            }}
            onPress={() => {
              this.props.navigation.navigate('FoodDonateScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                padding: 'auto',
              }}>
              Food
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 85,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: -40,
              marginLeft: 110,
            }}
            onPress={() => {
              this.props.navigation.navigate('ClothesDonateScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                padding: 'auto',
              }}>
              Clothes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 85,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: -40,
              marginLeft: 205,
            }}
            onPress={() => {
              this.props.navigation.navigate('ToysDonateScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                padding: 'auto',
              }}>
              Toys
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 85,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: 10,
              marginLeft: 15,
            }}
            onPress={() => {
              this.props.navigation.navigate('BooksDonateScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                padding: 'auto',
              }}>
              Books
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 85,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: -40,
              marginLeft: 110,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                padding: 'auto',
              }}
              onPress={() => {
                this.props.navigation.navigate('MoneyDonationScreen');
              }}>
              Money
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 150,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: 10,
              marginLeft: 80,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                padding: 'auto',
              }}
              onPress={() => {
                this.props.navigation.navigate('AccessoriesDonateScreen');
              }}>
              Accessories
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#2b7de9',
              width: 270,
              alignItems: 'center',
              borderRadius: 10,
              height: 40,
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate('FreeEducationScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                paddingTop: 5,
              }}>
              Free Education
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
