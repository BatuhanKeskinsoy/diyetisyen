import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/utils/getApp";
import { SocialsTypes } from "@/Types";

const db = getFirestore(app);

export const getSocials = async (): Promise<SocialsTypes[] | null> => {
  const querySnapshot = await getDocs(collection(db, "socials"));
  if (querySnapshot.empty) {
    return null;
  }

  const socialsArray: SocialsTypes[] = querySnapshot.docs.map(
    (doc) => doc.data() as SocialsTypes
  );
  return socialsArray;
};
