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
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light content" />
        <View style={styles.header}>
          <Animatable.Image
            source={require('../assets/donate.jpg')}
            style={styles.logo}
            resizeMode={'stretch'}
            animation="bounceIn"
            duration={1500}
          />
          <Animatable.Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              borderColor: 'black',
              fontSize: 25,
              marginTop: 20,
            }}
            resizeMode={'stretch'}
            animation="bounceIn"
            duration={4000}>
            {' '}
            🤝 D O C H A 🤝{' '}
          </Animatable.Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Stay with us to Donate A Lot</Text>
          <Text style={styles.subTitle}>Sign in with DOCHA Account</Text>
          <TouchableOpacity
            style={styles.getStarted}
            onPress={() => {
              this.props.navigation.navigate('DeclarationScreen');
            }}>
            <Text style={styles.getStartedText}>Get Started</Text>
            <MaterialIcons name="navigate-next" color="white" size={25} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const { height } = Dimensions.get('screen');
const sizeoflogo = height * 0.45 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: 80,
  },
  logo: {
    width: sizeoflogo,
    height: sizeoflogo,
    marginTop: 90,
    borderColor: 'black',
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
  },
  subTitle: {
    color: 'grey',
    marginTop: 8,
    fontWeight: 'bold',
  },
  getStarted: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 130,
    marginTop: 40,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#5dbefe',
  },
  getStartedText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
