
// QUESTIONS
export type IQuestion = {
  id: string,
  title: string,
}

// DATE
export type ITimestampExtract = {
  day: number,
  shortMonth: string,
  longMonth: string,
  year: number
}

// GENERAL
export type ILink = {
  url: string,
  label: string,
}