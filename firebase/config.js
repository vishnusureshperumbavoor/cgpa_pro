import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4dRmJlpaQgiLp4Wh6P5FEvmiuF2-aSAI",
  authDomain: "corporate-criminal.firebaseapp.com",
  projectId: "corporate-criminal",
  storageBucket: "corporate-criminal.appspot.com",
  messagingSenderId: "135151103038",
  appId: "1:135151103038:web:c5aaf322b6087cb862756f",
  measurementId: "G-1502KRXVQH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
