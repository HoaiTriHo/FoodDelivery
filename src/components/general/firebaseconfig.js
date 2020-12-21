import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA71hjTFPNy4oSUIWneMgb_xsB05mR27RU",
    authDomain: "loginapp-33c59.firebaseapp.com",
    databaseURL: "https://loginapp-33c59.firebaseio.com",
    projectId: "loginapp-33c59",
    storageBucket: "loginapp-33c59.appspot.com",
    messagingSenderId: "495759989666",
    appId: "1:495759989666:web:9ab49bbe7b6e224487f0fb",
    measurementId: "G-BGMZNLQLKN"
  };
  // Initialize Firebase
  export default firebaseApp = firebase.initializeApp(firebaseConfig);