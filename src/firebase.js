import firebase from 'firebase/app';
import 'firebase/auth';


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCL-Y2feUHOpGSOsxWqTy3y1vZ42eq3qRw",
    authDomain: "chatter-box-64df7.firebaseapp.com",
    projectId: "chatter-box-64df7",
    storageBucket: "chatter-box-64df7.appspot.com",
    messagingSenderId: "974070104311",
    appId: "1:974070104311:web:8142f34dd66b21018d53f2"
  }).auth();