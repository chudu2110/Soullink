export interface MatchProfile {
    name: string;
    bio: string;
    avatarUrl: string;
    socialUrl: string;
    compatibility: number;
}

export interface MatchRequest {
    answers: Record<number, string>;
}
