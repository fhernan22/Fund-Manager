import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_5NOj8RDW-cvLNylHleYMi5kgSw6Osmk",
  authDomain: "fund-manager-app.firebaseapp.com",
  databaseURL: "https://fund-manager-app.firebaseio.com",
  projectId: "fund-manager-app",
  storageBucket: "fund-manager-app.appspot.com",
  messagingSenderId: "956170127072",
  appId: "1:956170127072:web:dc333a9c56496d8a40f285",
  measurementId: "G-PBC1DQRFYZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
