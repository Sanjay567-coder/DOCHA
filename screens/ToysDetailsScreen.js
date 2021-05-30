import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config.js';

export default class ToysDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      name: '',
      recieverId: this.props.navigation.getParam('details')['name'],
      requestId: this.props.navigation.getParam('details')['request_id'],
      nooOfToys: this.props.navigation.getParam('details')['noOfToys'],
      mobileNo: this.props.navigation.getParam('details')['phoneNo'],
      address: this.props.navigation.getParam('details')['adress'],
      description: this.props.navigation.getParam('details')['description'],
      oldOrNew: this.props.navigation.getParam('details')['oldorNew'],
      recieverName: '',
      recieverContact: '',
      recieverAddress: '',
      recieverRequestDocId: '',
    };
  }

  getRecieverDetails() {
    db.collection('users')
      .where('email_id', '==', this.state.recieverId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            recieverName: doc.data().name,
            recieverContact: doc.data().phoneNo,
            recieverAddress: doc.data().adress,
          });
        });
      });

    db.collection('toys_donations')
      .where('request_id', '==', this.state.requestId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {});
      });
    console.log(this.state.requestId);
  }

  getUserDetails = (userId) => {
    db.collection('users')
      .where('email_id', '==', userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            userName: doc.data().first_name,
          });
        });
      });
  };

  addNotification = () => {
    var message = this.state.userName + ' has shown interest in donating books';
    db.collection('all_notifications').add({
      donor_id: this.state.userId,
      request_id: this.state.requestId,
      name: this.state.recieverId,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      notification_status: 'unread',
      message: message,
    });
  };

  componentDidMount() {
    this.getRecieverDetails();
    this.getUserDetails(this.state.userId);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          <Header
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="#ffffff"
                onPress={() =>
                  this.props.navigation.navigate('AllFreeEducation')
                }
              />
            }
            centerComponent={{
              text: 'Book Donations for Charity',
              style: {
                color: '#ffffff',
                fontSize: RFValue(20),
                fontWeight: 'bold',
              },
            }}
            backgroundColor="#32867d"
          />
        </View>
        <View style={{ flex: 0.9 }}>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              paddingTop: RFValue(30),
              paddingLeft: RFValue(10),
            }}>
            <View
              style={{
                flex: 0.6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: RFValue(25),
                  textAlign: 'center',
                }}>
                {this.state.recieverId}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: RFValue(20),
                  textAlign: 'center',
                  marginTop: RFValue(15),
                }}>
                Old Or New : {this.state.oldOrNew}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: RFValue(20),
                  textAlign: 'center',
                  marginTop: RFValue(15),
                }}>
                No Of Toys : {this.state.nooOfToys}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.7,
              padding: RFValue(20),
            }}>
            <View
              style={{
                flex: 0.7,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: RFValue(50),
                borderWidth: 1,
                borderColor: '#deeedd',
                padding: RFValue(10),
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: RFValue(30),
                }}>
                Reciever Information
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}>
                Name : {this.state.recieverId}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}>
                Contact: {this.state.mobileNo}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: RFValue(20),
                  marginTop: RFValue(30),
                }}>
                Address: {this.state.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '75%',
    height: RFValue(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(60),
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 16,
  },
});
