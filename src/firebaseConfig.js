import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwkT9E0889RA6-O7G13tp9Qu_VACL4i_g",
    authDomain: "fir-basics-a1b02.firebaseapp.com",
    projectId: "fir-basics-a1b02",
    storageBucket: "fir-basics-a1b02.appspot.com",
    messagingSenderId: "531760146185",
    appId: "1:531760146185:web:2854dcc4716415b6b395d8",
    measurementId: "G-PLMRS1LSCD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
