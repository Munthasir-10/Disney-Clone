import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxt5bgISeDpQxV_YJpPrsysSQAKT8d30o",
  authDomain: "disneyplus-clone-7da4a.firebaseapp.com",
  projectId: "disneyplus-clone-7da4a",
  storageBucket: "disneyplus-clone-7da4a.appspot.com",
  messagingSenderId: "177733173976",
  appId: "1:177733173976:web:871d7c6885424b1b218dad",
  measurementId: "G-090HHW064R",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
