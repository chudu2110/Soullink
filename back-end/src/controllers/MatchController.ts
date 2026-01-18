import { Request, Response } from 'express';
import { MatchService } from '../services/MatchService';

export class MatchController {
    private matchService: MatchService;

    constructor() {
        this.matchService = new MatchService();
    }

    // Using arrow function to preserve 'this' context when passed as callback
    public generateMatch = async (req: Request, res: Response): Promise<void> => {
        try {
            const { answers } = req.body;

            if (!answers) {
                res.status(400).json({ error: "Answers are required" });
                return;
            }

            const match = await this.matchService.findMatch(answers);
            res.json(match);
        } catch (error) {
            console.error("Controller Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
