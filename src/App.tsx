import { useEffect, useState } from "react";
import { db } from "./utils/firebase";
import { ref, onValue } from "firebase/database";
import Dustbin from "./components/Dustbin";

const distanceRef = ref(db, "/UsersData");

const dustbinHeight = 20;

function App() {
  const [data, setData] = useState(0);
  const [depth, setDepth] = useState(0);
  useEffect(() => {
    const unsubscribe = onValue(distanceRef, (snapshot) => {
      const data = snapshot.val();
      const distance = data.distance;
      setData(distance);
      if (distance > dustbinHeight && distance < 1200) {
        setDepth(0);
      } else if (distance < 5 || distance > 1200) {
        setDepth(100);
      } else {
        const calculatedDepth =
          ((dustbinHeight - distance) / (dustbinHeight - 5)) * 100;
        setDepth(calculatedDepth);
      }
    });
    return () => unsubscribe();
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen grid items-center bg-rich_black-300 text-white ">
        <h1 className="text-xl text-center">
          Please wait while we fetch data from the server
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 flex flex-col justify-center bg-rich_black-300 text-white">
      <Dustbin depth={depth} />
    </div>
  );
}

export default App;
