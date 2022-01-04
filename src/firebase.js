import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOX3qrVeVfxUhosEPnCH2e3MaIQAcWfbM",
    authDomain: "disneyplus-clone-2881b.firebaseapp.com",
    projectId: "disneyplus-clone-2881b",
    storageBucket: "disneyplus-clone-2881b.appspot.com",
    messagingSenderId: "784722038747",
    appId: "1:784722038747:web:48c8fbc92e6f6ecccce1fe",
    measurementId: "G-1TFRN3HK9Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;