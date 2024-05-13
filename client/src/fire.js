// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCPU4mnPiob8l3la-gX3YED_pcO2BE4w8",
  authDomain: "studysphere-ec2ef.firebaseapp.com",
  projectId: "studysphere-ec2ef",
  storageBucket: "studysphere-ec2ef.appspot.com",
  messagingSenderId: "711215833663",
  appId: "1:711215833663:web:0c6d0e118b0bd41e94ce8a",
  measurementId: "G-SZC1GN9MB6"
};
        
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);