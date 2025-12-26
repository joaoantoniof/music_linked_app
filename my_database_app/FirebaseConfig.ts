// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEHQYLSL1Dr9RmWmzqI8nMu9idofN6x4k",
  authDomain: "mydatabase-ef2fd.firebaseapp.com",
  projectId: "mydatabase-ef2fd",
  storageBucket: "mydatabase-ef2fd.firebasestorage.app",
  messagingSenderId: "261568255580",
  appId: "1:261568255580:web:c8addee489b19fe779f899"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});