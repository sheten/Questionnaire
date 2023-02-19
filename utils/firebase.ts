import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "osndoasindoaisndoiansodn",
//   authDomain: "asdasd-asdasd.asdasd.com",
//   projectId: "asdasd-asdasda",
//   storageBucket: "asdasd-asdasd.appspot.com",
//   messagingSenderId: "asdasdas",
//   appId: "1:asdasd:web:asdasdasdasdasdasd"
// };

// const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const storage = getStorage();