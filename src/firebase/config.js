import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBf_wS-LoOqUd0wbMnwzn3fXwZ9Poi85UE",
    authDomain: "chat-app-338e2.firebaseapp.com",
    projectId: "chat-app-338e2",
    storageBucket: "chat-app-338e2.appspot.com",
    messagingSenderId: "509405316230",
    appId: "1:509405316230:web:1c1ff4052371e4d1e9fd07",
    measurementId: "G-8TG1F2XRR1",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// auth.useEmulator("http://localhost:9099");
// if (window.location.hostname === "localhost") {
//     db.useEmulator("localhost", "8080");
// }
export { db, auth };
export default firebase;
