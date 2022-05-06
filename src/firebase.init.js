// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8EhqpO95Uaewsfb602ePsn439WcALCA0",
  authDomain: "perfume-warehouse-17111.firebaseapp.com",
  projectId: "perfume-warehouse-17111",
  storageBucket: "perfume-warehouse-17111.appspot.com",
  messagingSenderId: "767199927243",
  appId: "1:767199927243:web:3d7e1f8d76b56fd5cef44e",
  //   apiKey: process.env.apiKey,
  //   authDomain: process.env.authDomain,
  //   projectId: process.env.projectId,
  //   storageBucket: process.env.storageBucket,
  //   messagingSenderId: process.env.messagingSenderId,
  //   appId: process.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
