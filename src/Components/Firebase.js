import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCks6QHUn4TMgT64fg2tN8WCLBbck1wJQg",
  authDomain: "calvin-klein-project.firebaseapp.com",
  projectId: "calvin-klein-project",
  storageBucket: "calvin-klein-project.appspot.com",
  messagingSenderId: "636891109717",
  appId: "1:636891109717:web:2021464e1b9ec7d84177dc",
  measurementId: "G-1YT9KMZ0NY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAXT5MjISBJLgdisV5B2quBJhJtf_Ng4kg",
//     authDomain: "bwproject-9e131.firebaseapp.com",
//     projectId: "bwproject-9e131",
//     storageBucket: "bwproject-9e131.appspot.com",
//     messagingSenderId: "203495079317",
//     appId: "1:203495079317:web:88f963fabc4f7818e8ca9c",
//     measurementId: "G-7P7SYTTQPP"
//   };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };