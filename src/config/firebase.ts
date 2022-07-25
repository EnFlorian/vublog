import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {};
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const fireStore = getStorage(app);
const fireAuth = getAuth(app);

export { fireDb, fireStore, fireAuth };
