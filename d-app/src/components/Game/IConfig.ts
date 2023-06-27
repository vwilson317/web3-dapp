export interface IConfig {
    id: number;
    timeLimitSec?: number;
    passingGrade: number;
    customGreetingMsgs?: string;
    customFailureMsgs?: string;
    isRandomQuestions?: boolean;
    isPredefinedQuestions?: boolean;
    questionCount?: number;
    gameId: number;
  }
  