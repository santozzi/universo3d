// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseUniverso3d as firebase } from '../../config/firebase.config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebase.API_KEY,
    authDomain: firebase.AUTH_DOMAIN,
    projectId: firebase.PROJECT_ID,
    storageBucket: firebase.STORAGE_BUCKET,
    messagingSenderId: firebase.MESSAGING_SENDER_ID,
    appId: firebase.APP_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
