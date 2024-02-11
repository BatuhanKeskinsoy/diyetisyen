import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/utils/getApp";
import { BlogsTypes } from "@/Types";

const db = getFirestore(app);

export const getBlogs = async (): Promise<BlogsTypes[] | null> => {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  if (querySnapshot.empty) {
    return null;
  }

  const convertTimestamps = (data: any): any => {
    const convertedData: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        if (value instanceof Date) {
          convertedData[key] = value;
        } else if (value?.toDate instanceof Function) {
          convertedData[key] = value.toDate();
        } else {
          convertedData[key] = value;
        }
      }
    }
    return convertedData;
  };

  const blogsArray: BlogsTypes[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    const convertedData = convertTimestamps(data);
    return { id, ...convertedData } as BlogsTypes;
  });
  return blogsArray;
};
