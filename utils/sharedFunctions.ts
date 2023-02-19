import { customAlphabet } from "nanoid";
import { ITimestampExtract } from "interfaces";
import { Timestamp } from "firebase/firestore"

export const generateID = (): string => {
  const nanoid = customAlphabet('123456789ABCDEFGHIJKLMNPQRSTUVWXYZ', 10);
  const customID = nanoid();
  return customID;
}

export const extractTimestamp = (timestamp: Timestamp): ITimestampExtract => {
  const date = new Date(timestamp.toString());
  const day = date.getUTCDate();
  const longMonth = date.toLocaleString('default', { month: 'long' });
  const shortMonth = date.toLocaleString('default', { month: 'short' });
  const year = date.getUTCFullYear();
  const formatted: ITimestampExtract = { day, longMonth, shortMonth, year };
  return formatted
}