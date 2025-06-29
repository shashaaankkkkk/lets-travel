
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const handleRegister = async () => {
  try {
    await createUserWithEmailAndPassword(auth, "user@example.com", "password123");
    console.log("User created");
  } catch (error) {
    console.error(error.message);
  }
};
