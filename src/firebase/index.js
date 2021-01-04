import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCjtGgss7-B7tKHSDhYuuGW3WQJ5_9vCx0",
  authDomain: "snapthathome-dev.firebaseapp.com",
  databaseURL: "https://snapthathome-dev.firebaseio.com",
  projectId: "snapthathome-dev",
  storageBucket: "snapthathome-dev.appspot.com",
  messagingSenderId: "335949246640",
  appId: "1:335949246640:web:9c29fe97f023ce52cecb75",
  measurementId: "G-B3BTC46S00"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
