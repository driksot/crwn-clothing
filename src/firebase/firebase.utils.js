import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBxpq7sLP3JZMiRrow9_-cvMFd6xahlTPk',
  authDomain: 'crwn-db-b54e3.firebaseapp.com',
  databaseURL: 'https://crwn-db-b54e3.firebaseio.com',
  projectId: 'crwn-db-b54e3',
  storageBucket: 'crwn-db-b54e3.appspot.com',
  messagingSenderId: '314756848317',
  appId: '1:314756848317:web:765a0bf6bfb86f847235d4',
  measurementId: 'G-6M5T6T46V5'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;