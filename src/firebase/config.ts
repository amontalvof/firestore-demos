import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCAHw20pAO00_wzONM79NFRrfaha3jjZcg',
    authDomain: 'react-airbnb-clone-67a8a.firebaseapp.com',
    databaseURL: 'https://react-airbnb-clone-67a8a.firebaseio.com',
    projectId: 'react-airbnb-clone-67a8a',
    storageBucket: 'react-airbnb-clone-67a8a.appspot.com',
    messagingSenderId: '512848174839',
    appId: '1:512848174839:web:850b2275e5bfcf7133bdf2',
    measurementId: 'G-NW49Q6V0WE',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('Firebase configured!');

export default firebase.firestore();
