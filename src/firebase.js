import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBq9kheAWNg7-beQAmRS5cA9snVsUr9vTw",
    authDomain: "tinder-ymmy-clone.firebaseapp.com",
    projectId: "tinder-ymmy-clone",
    storageBucket: "tinder-ymmy-clone.appspot.com",
    messagingSenderId: "427996470076",
    appId: "1:427996470076:web:d6c94515fbae54fe4f9c39",
    measurementId: "G-CSH7PT3QBF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database