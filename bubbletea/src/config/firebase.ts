// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB341MESsf_x0i_hZKBl2OGfD9oNAZCGsA",
  authDomain: "react-application-abdde.firebaseapp.com",
  projectId: "react-application-abdde",
  storageBucket: "react-application-abdde.appspot.com",
  messagingSenderId: "309818049672",
  appId: "1:309818049672:web:1874292d060ba833c74b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
