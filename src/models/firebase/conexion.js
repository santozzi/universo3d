// Import the functions you need from the SDKs you need
import { firebaseUniverso3d as firebaseConf } from '../../config/firebase.config';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseConf.API_KEY,
    authDomain: firebaseConf.AUTH_DOMAIN,
    projectId: firebaseConf.PROJECT_ID,
    storageBucket: firebaseConf.STORAGE_BUCKET,
    messagingSenderId: firebaseConf.MESSAGING_SENDER_ID,
    appId: firebaseConf.APP_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);