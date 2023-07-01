declare module '*.scss' {
    const content: { [styleName: string]: string };
    export default content;
}

interface LoginRequest {
    email: number;
    displayName: string;
    password: string;
}

interface User {
    id?: number;
    name: string;
    lastSearchDt?: Date;
    assets?: Asset[];
    displayName: string;
    password?: string;
    gender?: string;
}

interface Asset {
    locationUri: string; // url
    type: AssetType;
    metaData: any;
}

enum AssetType {
    LOGIN_ICON,
    PROFILE_PICTURE,
    CONVERSATION
}

interface IGame {
    id: number;
    title: string;
    createdUtc: Date;
    updatedUtc: Date;
    config: IConfig;
}

interface IConfig {
    timeLimitSec?: number;
    passingGrade: number;
    customGreetingMsgs?: string;
    customFailureMsgs?: string;
    isRandomQuestions?: boolean;
    isPredefinedQuestions?: boolean;
    questionCount?: number;
    questions?: IQuestion[];
}

// replace with db call
enum QuestionType {
    SINGLE_MULTIPLE_CHOICE = 0,
    MULTIPLE_MULTIPLE_CHOICE = 1,
    TRUE_FALSE = 2,
    SUMMARY = 3,
    FILL_IN_THE_BLANK = 4
}

interface IQuestion {
    id: number;
    questionType: number;
    value: string;
    gameId?: number;
    userId: number;
    timeLimitSecs?: number;
    orderIndex?: number;
    answers?: IAnswer[];
  }