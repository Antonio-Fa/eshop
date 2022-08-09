import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCy-sgIrpddrK2tC9YMf23yAlpo5ejLUYY",
    authDomain: "testing-55c3d.firebaseapp.com",
    projectId: "testing-55c3d",
    storageBucket: "testing-55c3d.appspot.com",
    messagingSenderId: "801771354133",
    appId: "1:801771354133:web:df848838e01346d608361c",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
