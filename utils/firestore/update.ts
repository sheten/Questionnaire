import { IQuestion } from "@/interfaces";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestore } from "utils/firebase";
import { generateID } from "../sharedFunctions";

export const addNewStreak = async (props: { userID: string, questionId: string }): Promise<void> => {
  const ref = doc(firestore, 'Users', props.userID);
  await updateDoc(ref, {
    streaks: arrayUnion({
      id: generateID(),
      questionId: props.questionId,
      streakDays: 0
    })
  });
}

export const deleteSelectedQuestion = async (props: { userID: string, question: IQuestion }): Promise<void> => {
  const ref = doc(firestore, 'Users', props.userID);
  await updateDoc(ref, {
    questions: arrayRemove({
      title: props.question.title,
      id: props.question.id
    })
  });
}

export const updateUserUpdatesID = async (props: { userID: string, updateId: string }): Promise<void> => {
  const ref = doc(firestore, 'Users', props.userID);
  await updateDoc(ref, {
    confirmedUpdateId: props.updateId,
  });
}