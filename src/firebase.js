import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTIM-uoUSG7z0SK-07JjBxgNTj-bCgABs",
  authDomain: "nflix-clone.firebaseapp.com",
  projectId: "nflix-clone",
  storageBucket: "nflix-clone.appspot.com",
  messagingSenderId: "1068706824817",
  appId: "1:1068706824817:web:b73d1de1e0bca64f6351d0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
