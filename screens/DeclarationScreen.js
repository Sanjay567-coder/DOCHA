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

export default class DeclarationScreen extends Component {
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
          <Text style={styles.header_text2}>Welcome to 🤝 D O C H A 🤝</Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.header_text}>Are you a?</Text>

          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button_Style}
              onPress={() => {
                this.props.navigation.navigate('LoginScreen');
              }}>
              <Text style={styles.button_Text}>Donar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.header_text3}>Or A</Text>

          <View style={styles.button_container}>
            <TouchableOpacity
              style={[styles.button_Style2, { marginTop: -40 }]}
              onPress={() => {
                this.props.navigation.navigate('CharityLoginScreen');
              }}>
              <Text style={styles.button_Text}>Charitable Trust</Text>
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
  header_text3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
  header_text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 30,
    textAlign: 'center',
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
    marginBottom: 5,
  },
  button_Style2: {
    width: '100%',
    height: 40,
    backgroundColor: '#5db8fe',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 30,
  },
  button_Text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
