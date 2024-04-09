import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6-VygKdMQMI_H0eIAmCmmiTICTF6tERw",
  authDomain: "mini-project-6th-sem-7c942.firebaseapp.com",
  databaseURL:
    "https://mini-project-6th-sem-7c942-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mini-project-6th-sem-7c942",
  storageBucket: "mini-project-6th-sem-7c942.appspot.com",
  messagingSenderId: "1075242417542",
  appId: "1:1075242417542:web:2f8bfba0c3b714f8df4007",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
