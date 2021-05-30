import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Card, Header, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import db from '../config';
import firebase from 'firebase';

export default class AllFreeEducation extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      requestedBooksList: [],
    };
    this.donateRef = null;
  }

  getRequestedBooksList = () => {
    this.donateRef = db.collection('free_education').onSnapshot((snapshot) => {
      var requestedBooksList = snapshot.docs.map((doc) => doc.data());
      this.setState({
        requestedBooksList: requestedBooksList,
      });
    });
  };

  componentDidMount() {
    this.getRequestedBooksList();
  }

  componentWillUnmount() {
    this.donateRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.name + ' Free Education'}
        subtitle={item.discription}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('FreeEducationDetailsScreen', {
                details: item,
              });
            }}>
            <Text style={{ color: '#ffff' }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
 <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
          {this.state.requestedBooksList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>
                List Of All Donations to your Charity
              </Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedBooksList}
              renderItem={this.renderItem}
            />
          )}
          <TouchableOpacity
            style={styles.getStarted2}
            onPress={() => {
              this.props.navigation.navigate('AllAccessoriesDonations');
            }}>
            <MaterialIcons name="navigate-next" color="white" size={25} />
            <Text style={styles.getStartedText}>Previous Page</Text>
          </TouchableOpacity>
             <TouchableOpacity
            style={styles.getStarted}
            onPress={() => {
              this.props.navigation.navigate('CharityHomeScreen');
            }}>
            <Text style={styles.getStartedText}>Home Page</Text>
            <MaterialIcons name="navigate-next" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  getStarted: {
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 195,
    marginTop: 40,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#5dbefe',
  },
  getStarted2: {
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 225,
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
