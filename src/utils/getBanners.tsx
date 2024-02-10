import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/utils/getApp";
import { BannersTypes } from "@/Types";

const db = getFirestore(app);

export const getBanners = async (): Promise<BannersTypes[] | null> => {
  const querySnapshot = await getDocs(collection(db, "banners"));
  if (querySnapshot.empty) {
    return null;
  }

  const bannersArray: BannersTypes[] = querySnapshot.docs.map(
    (doc) => doc.data() as BannersTypes
  );
  return bannersArray;
};
