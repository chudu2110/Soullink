
export enum AppStep {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  HOW_TO = 'HOW_TO',
  AUTH = 'AUTH',
  QUIZ = 'QUIZ',
  MATCHING = 'MATCHING',
  MATCHED = 'MATCHED',
  ADVICE = 'ADVICE'
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface MatchProfile {
  name: string;
  bio: string;
  avatarUrl: string;
  socialUrl: string;
  compatibility: number;
}

export interface UserState {
  name: string;
  hasMatched: boolean;
  quizAnswers: Record<number, string>;
  match?: MatchProfile;
}
