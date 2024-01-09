// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs4DJUGwQgCNPuw67bl3NZKZiVWQ1mAHM",
  authDomain: "fir-test-860ec.firebaseapp.com",
  projectId: "fir-test-860ec",
  storageBucket: "fir-test-860ec.appspot.com",
  messagingSenderId: "1056493148857",
  appId: "1:1056493148857:web:044799eee36df0d052d968",
  measurementId: "G-0W9BBQ8J5B"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };