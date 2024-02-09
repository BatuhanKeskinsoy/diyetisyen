import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/utils/getApp";
import { GeneralsTypes } from "@/Types";

const db = getFirestore(app);

export const getGenerals = async () => {
  const querySnapshot = await getDocs(collection(db, "generals"));
  if (querySnapshot.empty) {
    return null;
  } else {
    const doc = querySnapshot.docs[0];
    const data = doc.data() as GeneralsTypes;
    return data;
  }
};
