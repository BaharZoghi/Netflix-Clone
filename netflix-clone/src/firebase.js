import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB29lhJPHN3as5rc48_rYtJyh3U2IJ1CGE",
  authDomain: "netflix-clone-8bfd4.firebaseapp.com",
  projectId: "netflix-clone-8bfd4",
  storageBucket: "netflix-clone-8bfd4.appspot.com",
  messagingSenderId: "93915161298",
  appId: "1:93915161298:web:e7a64bedaa677376e0830b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
