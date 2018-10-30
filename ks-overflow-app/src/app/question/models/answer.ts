import { User } from "../../user/models/user";
import { newGuid } from "../../shared/utility";

export class Answer {
    constructor() {
        this.id = newGuid();
        this.isCorrect = false;
        this.score = 0;
    }
    id: string;
    body: string;
    userId: string;
    score: number;
    isCorrect: boolean;
    questionId: string;
    date: number;
    user: User;
    userVote: number;
}