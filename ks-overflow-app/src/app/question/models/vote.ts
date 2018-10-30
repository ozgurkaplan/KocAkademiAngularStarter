import { newGuid } from "../../shared/utility";

export class Vote{
    constructor(){
        this.id = newGuid();
    }
    id: string;
    userId: string;
    vote: number;
}

export class QuestionVote extends Vote{
    constructor(){
        super();
    }
    questionId: string;
}

export class AnswerVote extends Vote{
    constructor(){
        super();
    }
    answerId: string;
}