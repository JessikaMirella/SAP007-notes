import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCERzq8TukvV2hZ5kTrDTNAjZVuFfxfwmk",
    authDomain: "lab-notes-c2bd4.firebaseapp.com",
    projectId: "lab-notes-c2bd4",
    storageBucket: "lab-notes-c2bd4.appspot.com",
    messagingSenderId: "605360616142",
    appId: "1:605360616142:web:fb1f40c15fa820a348569f"
};

export const app = initializeApp(firebaseConfig);