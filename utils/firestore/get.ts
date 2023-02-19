import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "utils/firebase";

export const fetchAllUsers = async (): Promise<any[] | undefined> => {
  try {
    var userDocs: any[] = [];
    const usersCollection = await getDocs(collection(firestore, "Users"));
    usersCollection.forEach((doc) => {
      userDocs.push({ ...doc.data(), uid: doc.id } as any);
    });
    return userDocs;
  } catch (e) {
    console.error("Caught the fetchAllUsers error: ", e);
    return;
  }
}

export const fetchUserByID = async (userID: string): Promise<any | undefined> => {
  try {
    const docRef = doc(firestore, 'Users', userID);
    const userDoc = await getDoc(docRef);
    const data = { ...userDoc.data(), uid: docRef.id } as any;
    return data;
  } catch (e) {
    console.error("Caught the fetchUserByID error: ", e);
    return;
  }
}