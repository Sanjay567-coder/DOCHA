import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDUb2UTJTP1wQcafywhYxT_j8pnq09cHkg",
  authDomain: "charitydonationapp.firebaseapp.com",
  projectId: "charitydonationapp",
  storageBucket: "charitydonationapp.appspot.com",
  messagingSenderId: "221741681232",
  appId: "1:221741681232:web:ed922d350e4f069ca31f55"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
