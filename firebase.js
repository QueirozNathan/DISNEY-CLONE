import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUYV4FMO8sd9z26fWpglB8opWeffrSFpM",
  authDomain: "disneyplus-clone-a0ac6.firebaseapp.com",
  projectId: "disneyplus-clone-a0ac6",
  storageBucket: "disneyplus-clone-a0ac6.appspot.com",
  messagingSenderId: "304013801445",
  appId: "1:304013801445:web:0ff86d648744e817c8610c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
