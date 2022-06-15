
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDC5um6MSBvg3lrSNO3faRQECmC-eiCkM",
  authDomain: "micro3d-7399c.firebaseapp.com",
  projectId: "micro3d-7399c",
  storageBucket: "micro3d-7399c.appspot.com",
  messagingSenderId: "570067140675",
  appId: "1:570067140675:web:393b9891d4b61177abd4f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)