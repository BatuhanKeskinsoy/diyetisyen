import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/utils/getApp";
import { GeneralsTypes } from "@/Types";

const db = getFirestore(app);

export const getGenerals = async (): Promise<GeneralsTypes | null> => {
  const querySnapshot = await getDocs(collection(db, "generals"));
  const data: GeneralsTypes[] = querySnapshot.docs.map(
    (doc) => doc.data() as GeneralsTypes
  );
  return data.length > 0 ? data[0] : null;
};
