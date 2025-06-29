import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const handleAdd = async () => {
  await addDoc(collection(db, "users"), {
    name: "Shashank",
    age: 22
  });
};

const handleRead = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  snapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
};