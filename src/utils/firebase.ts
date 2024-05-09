import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getToken } from "firebase/messaging";
import { getMessaging } from "firebase/messaging";

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
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission == "granted") {
    console.log("this is running");
    const token = await getToken(messaging, {
      vapidKey:
        "BCv3DRg9ffcP-Pnrtnai8ixjUYBo94TPRSL6L4WkET1CSwYsRMfuNnrQR8pJkskkkXxccsZMLmhvfd31XJm1luc",
    });
    console.log("🔥🔥", token);
  }
};
