import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyATxewgixjgH21_ACfhc63S0HIDdl6-J1w",
  authDomain: "spiritphoto-7ed88.firebaseapp.com",
  databaseURL: "https://spiritphoto-7ed88.firebaseio.com",
  projectId: "spiritphoto-7ed88",
  storageBucket: "spiritphoto-7ed88.appspot.com",
  messagingSenderId: "800673803586"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
