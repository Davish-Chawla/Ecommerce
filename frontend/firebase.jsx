// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ-U5Tf-3GA5cslgssdmyETzbcDJ-4XXU",
  authDomain: "authe-841ad.firebaseapp.com",
  projectId: "authe-841ad",
  storageBucket: "authe-841ad.firebasestorage.app",
  messagingSenderId: "18935231159",
  appId: "1:18935231159:web:9d2b900bb914b6a26f9332",
  measurementId: "G-S83BG1H6CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In Function
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Google Sign-Out Function
export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
};

export { auth, provider };