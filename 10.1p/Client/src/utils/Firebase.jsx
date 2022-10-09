import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyC6I3_p_XjZ5KPDlnwC7xN2EyQzJG8JKvo",
  
    authDomain: "seven-point-one-p.firebaseapp.com",
  
    projectId: "seven-point-one-p",
  
    storageBucket: "seven-point-one-p.appspot.com",
  
    messagingSenderId: "419026750133",
  
    appId: "1:419026750133:web:cd727cea9794a7f8d0ccfc"
  
  };
  
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = new doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if(! userSnapshot.exists())
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        })
    } catch (error) {
        console.log('error is creating ' + error.message)
    }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password ) => {
    if(!email || !password)
    {
        return;
    }

    return await createUserWithEmailAndPassword(auth, email, password)
}