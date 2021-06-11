

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzPQ60NeJ46zLdPxM9mmFHYCeBn_FcY2M",
    authDomain: "todo-app-anusjc.firebaseapp.com",
    projectId: "todo-app-anusjc",
    storageBucket: "todo-app-anusjc.appspot.com",
    messagingSenderId: "428831484420",
    appId: "1:428831484420:web:cce3270fbbc2fb3ae36351",
    measurementId: "G-SMJ2808YV3"

});

const db = firebaseApp.firestore();

export default db;