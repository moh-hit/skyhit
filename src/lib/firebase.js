import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB06pTTlFz8Px03SQYtk-I7Q_MKx2y4vMU",
  authDomain: "skyhit-portfolio.firebaseapp.com",
  projectId: "skyhit-portfolio",
  storageBucket: "skyhit-portfolio.appspot.com",
  messagingSenderId: "36674647611",
  appId: "1:36674647611:web:8b9b25f2e60402e1a90e1e",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
