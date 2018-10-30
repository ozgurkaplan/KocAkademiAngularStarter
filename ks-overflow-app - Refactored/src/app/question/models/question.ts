import { User } from "../../user/models/user";

export class Question{
    id: string;
    title: string;
    tags: string[];
    body: string;
    score: number;
    answerCount: number;
    hasAccepted: boolean;
    userId: string;
    user: User;
    date: number;
    userVote: number;
}
