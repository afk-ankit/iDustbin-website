import { useEffect, useState } from "react";
import { db } from "./utils/firebase";
import { ref, onValue } from "firebase/database";
import Dustbin from "./components/Dustbin";
import { Trash2 } from "lucide-react";
import addNotification, { Notifications } from "react-push-notification";

const distanceRef = ref(db, "/UsersData");

const dustbinHeight = 19.38;

function App() {
  const [data, setData] = useState(null);
  const [depth, setDepth] = useState(0);
  useEffect(() => {
    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const data = snapshot.val();
      const distance = data.distance;
      setData(distance);
      if (distance > dustbinHeight && distance < 1200) {
        setDepth(0);
      } else if (distance < 2 || distance > 1200) {
        setDepth(100);
      } else {
        const calculatedDepth =
          ((dustbinHeight - distance) / (dustbinHeight - 2)) * 100;
        if (calculatedDepth > 95) {
          setDepth(100);
          return;
        }
        setDepth(Math.floor(calculatedDepth / 5) * 5);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (depth > 75) {
      addNotification({
        title: "i Dustbin",
        subtitle: "something",
        message: "Dustbin is full please empty the dustbin",
        duration: 4000,
        native: true,
        onClick: () => "Notification",
      });
    }
  }, [depth]);

  if (data === null) {
    return (
      <div className="min-h-screen grid items-center bg-rich_black-300 text-white px-4">
        <h1 className="text-xl text-center">
          Please wait while we fetch data from the server
        </h1>
      </div>
    );
  }

  return (
    <>
      <nav className="p-4">
        <Notifications />
        <div className="flex gap-2 justify-center sm:justify-start">
          <Trash2 />
          <h1 className="text-white text-xl font-bold">iDustbin</h1>
        </div>
      </nav>
      <div className="min-h-[90dvh] p-4 flex flex-col justify-center  text-white">
        <Dustbin depth={depth} />
      </div>
    </>
  );
}

export default App;
