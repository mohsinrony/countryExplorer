import { initializeApp } from "firebase/app"; // Import the initializeApp function
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Get access the auth and firestore services
const auth = getAuth(app);

// Here we get access to the Firestore database
const db = getFirestore(app);

const createUserWithEmailAndPassword = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: user.email,
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.error("Error signing in: ", error);
    alert("Invalid email or password. Please try again.");
  }
};

export const logout = () => {
  auth.signOut();
};

export const getNameOfUser = async (user) => {
  if (user) {
    const userRef = query(
      collection(db, "users"),
      where("uid", "==", user.uid)
    );
    const snapshot = await getDocs(userRef);
    snapshot.forEach((doc) => {
      const name = doc.data().name;
      console.log("name of user: ", name);
      return name;
    });
  }
};

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
