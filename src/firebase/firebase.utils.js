import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEj0ppQv411E5Yx-ta1jsk7BPjlgM8aFw",
    authDomain: "crown-db-c412f.firebaseapp.com",
    databaseURL: "https://crown-db-c412f.firebaseio.com",
    projectId: "crown-db-c412f",
    storageBucket: "crown-db-c412f.appspot.com",
    messagingSenderId: "617846015887",
    appId: "1:617846015887:web:0a12244b17c2362b406dfa",
    measurementId: "G-TYDXS6FBZR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
