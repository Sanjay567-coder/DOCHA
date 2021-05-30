import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen'
import DonarLoginScreen from './screens/DonarLoginScreen'
import DonarSignUpScreen from './screens/DonarSignUpScreen'
import DonarUserDetailsScreen from './screens/DonarUserDetailsScreen'
import DeclarationScreen from './screens/DeclarationScreen'
import CharityLoginScreen from './screens/CharityLoginScreen'
import CharitySignUpScreen from './screens/CharitySignUpScreen'
import CharityDetailsScreen from './screens/CharityDetailsScreen'
import CharityHomeScreen from './screens/CharityHomeScreen'
import DonarHomeScreen from './screens/DonarHomeScreen'
import WhatDonateScreen from './screens/WhatDonateScreen'
import FoodDonateScreen from './screens/FoodDonateScreen'
import ClothesDonateScreen from './screens/ClothesDonateScreen'
import AccessoriesDonateScreen from './screens/AccessoriesDonateScreen'
import ToysDonateScreen from './screens/ToysDonateScreen'
import BooksDonateScreen from './screens/BooksDonateScreen'
import MoneyDonationScreen from './screens/MoneyDonationScreen'
import FreeEducationScreen from './screens/FreeEducationScreen'
import AllBookDonations from './screens/AllBookDonations'
import AllClothesDonations from './screens/AllClothesDonations'
import AllFoodDonations from './screens/AllFoodDonations'
import AllFreeEducation from './screens/AllFreeEducation'
import AllMoneyDonations from './screens/AllMoneyDonations'
import AllToysDonations from './screens/AllToysDonations'
import AllAccessoriesDonations from './screens/AllAccessoriesDonations'
import BooksDetailsScreen from './screens/BooksDetailsScreen'
import ClothesDetailsScreen from './screens/ClothesDetailsScreen'
import FoodDetailsScreen from './screens/FoodDetailsScreen'
import FreeEducationDetailsScreen from './screens/FreeEducationDetailsScreen'
import MoneyDetailsScreen from './screens/MoneyDetailsScreen'
import AccessoriesDetailsScreen from './screens/AccessoriesDetailsScreen'

export default function App() {
  return (
       <AppContainer/>
  );
}

  const switchNavigator = createSwitchNavigator({
  
  WelcomeScreen:{screen: WelcomeScreen},
  FoodDonateScreen: {screen:FoodDonateScreen},
  DeclarationScreen:{screen:DeclarationScreen},
  LoginScreen:{screen: DonarLoginScreen},
  SignUpScreen: {screen: DonarSignUpScreen},
  UserDetailsScreen: {screen: DonarUserDetailsScreen},
  CharityLoginScreen: {screen: CharityLoginScreen},
  CharitySignUpScreen: {screen:CharitySignUpScreen},
  CharityDetailsScreen: {screen:CharityDetailsScreen},
  DonarHomeScreen: {screen:DonarHomeScreen},
  CharityHomeScreen: {screen:CharityHomeScreen},
  WhatDonateScreen: {screen:WhatDonateScreen},
  ClothesDonateScreen: {screen:ClothesDonateScreen},
  ToysDonateScreen: {screen:ToysDonateScreen},
  BooksDonateScreen: {screen:BooksDonateScreen},
  MoneyDonationScreen: {screen:MoneyDonationScreen},
  FreeEducationScreen: {screen:FreeEducationScreen},
  AllBookDonations:{screen:AllBookDonations},
  AllClothesDonations:{screen:AllClothesDonations},
  AllFoodDonations:{screen:AllFoodDonations},
  AllFreeEducation:{screen:AllFreeEducation},
  AllMoneyDonations:{screen:AllMoneyDonations},
  AllToysDonations:{screen:AllToysDonations},
  BooksDetailsScreen:{screen:BooksDetailsScreen},
  ClothesDetailsScreen:{screen:ClothesDetailsScreen},
  FoodDetailsScreen:{screen:FoodDetailsScreen},
  FreeEducationDetailsScreen:{screen:FreeEducationDetailsScreen},
  AccessoriesDonateScreen:{screen:AccessoriesDonateScreen},
  AllAccessoriesDonations:{screen:AllAccessoriesDonations},
  MoneyDetailsScreen:{screen:MoneyDetailsScreen},
  AccessoriesDetailsScreen:{screen:AccessoriesDetailsScreen}
})

const AppContainer =  createAppContainer(switchNavigator);