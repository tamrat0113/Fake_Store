// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAXT5MjISBJLgdisV5B2quBJhJtf_Ng4kg",
    authDomain: "bwproject-9e131.firebaseapp.com",
    projectId: "bwproject-9e131",
    storageBucket: "bwproject-9e131.appspot.com",
    messagingSenderId: "203495079317",
    appId: "1:203495079317:web:88f963fabc4f7818e8ca9c",
    measurementId: "G-7P7SYTTQPP"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };