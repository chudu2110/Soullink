
export enum AppStep {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  HOW_TO = 'HOW_TO',
  AUTH = 'AUTH',
  QUIZ = 'QUIZ',
  MATCHING = 'MATCHING',
  MATCHED = 'MATCHED',
  ADVICE = 'ADVICE',
  TAROT = 'TAROT'
}

export interface Question {
  id: number;
  section: string;
  type: 'text' | 'number' | 'single' | 'multiple';
  text: {
    en: string;
    vi: string;
  };
  placeholder?: {
    en: string;
    vi: string;
  };
  options?: {
    value: string;
    label: {
      en: string;
      vi: string;
    };
  }[];
  maxOptions?: number; // For multiple choice
  required?: boolean;
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
  quizAnswers: Record<number, string | string[]>;
  match?: MatchProfile;
}
