import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDt14BpJubInr9xgGQWt7JBMB3SQGgQ1pg",
    authDomain: "fb-clone-2a55f.firebaseapp.com",
    projectId: "fb-clone-2a55f",
    storageBucket: "fb-clone-2a55f.appspot.com",
    messagingSenderId: "671842234595",
    appId: "1:671842234595:web:8f99ec30916a0b75a2d5d6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;