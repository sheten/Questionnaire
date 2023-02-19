import { setDoc, doc, Timestamp } from "firebase/firestore";
import { firestore } from "utils/firebase";

export const createRegisteredUserFirestore = async (props: { userID: string, email: string, fullName: string }): Promise<void> => {
  const userDocRef = doc(firestore, 'Users', props.userID);
  await setDoc(userDocRef, {
    email: props.email,
    fullName: props.fullName,
  });

  const userAnswersDocRef = doc(firestore, 'Users', props.userID, 'Answers', '2023');
  await setDoc(userAnswersDocRef, {});
}

export const createFirestoreUserNewAnswersDoc = async (props: { userID: string, dayAnswers: any[] }): Promise<void> => {
  const ref = doc(firestore, 'Users', props.userID, 'Answers', '2023');
  await setDoc(ref, {
    'Feb12': {
      dayAnswers: props.dayAnswers,
      uploadTime: Timestamp.now()
    }
  });
}