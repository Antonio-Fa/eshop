import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRUS3YsjjvbDFeIIZhT0z5wZXUGKMSEB4",
    authDomain: "eshop-99dbf.firebaseapp.com",
    projectId: "eshop-99dbf",
    storageBucket: "eshop-99dbf.appspot.com",
    messagingSenderId: "333080170425",
    appId: "1:333080170425:web:38dbd0f546be591bc2b068",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
