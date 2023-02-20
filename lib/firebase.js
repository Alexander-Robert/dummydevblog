import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

import SuperJSON from 'superjson';

// import { initializeApp, getApps, getApp } from "firebase/app";
// // Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqwooGeA1G-YmDtM40OkIiRemGUs0TjrY",
  authDomain: "devblogsite-f48e0.firebaseapp.com",
  projectId: "devblogsite-f48e0",
  storageBucket: "devblogsite-f48e0.appspot.com",
  messagingSenderId: "448554435946",
  appId: "1:448554435946:web:d671ec4403e9604a509113",
  measurementId: "G-0P513Q3NB9"
};

// Initialize Firebase
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
if(!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
/// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    //define fields that are not serializable

    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  }
}