import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({});

export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
