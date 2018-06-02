import firebase from '@firebase/app';
import '@firebase/firestore'
import"@firebase/auth";
import"@firebase/database";
import"@firebase/messaging";
import"@firebase/functions";

export function loadDB() {
    try {
        var config = {
            apiKey: "AIzaSyB_KUPcgPMPbOQye26JayYGFXTYMaCB29k",
            authDomain: "ptracking-1525093706720.firebaseapp.com",
            databaseURL: "https://ptracking-1525093706720.firebaseio.com",
            projectId: "ptracking-1525093706720",
            storageBucket: "ptracking-1525093706720.appspot.com",
            messagingSenderId: "1068548956610",
        };
        firebase.initializeApp(config);
    } catch (err) {
        // we skip the "already exists" message which is
        // not an actual error when we're hot-reloading
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
        }
    }

    return firebase;
}