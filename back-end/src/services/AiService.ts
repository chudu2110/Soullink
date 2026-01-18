import { GoogleGenAI, Type } from "@google/genai";
import { MatchProfile } from "../types";

export class AiService {
    private client: GoogleGenAI;
    private model: string = 'gemini-2.0-flash-exp';

    constructor() {
        // Initialize with API Key from environment variables
        // If not present, we will handle it in the methods or constructor
        const apiKey = process.env.API_KEY || '';
        this.client = new GoogleGenAI({ apiKey });
    }

    public async generateMatchProfile(answers: Record<number, string>): Promise<Partial<MatchProfile>> {
        const prompt = `Based on these quiz answers: ${JSON.stringify(answers)}, create a whimsical soulmate profile. 
        Return JSON with: name, bio (short, quirky), compatibility (1-100), and socialUrl (fictional). 
        The style should be youthful and warm.`;

        try {
            const response = await this.client.models.generateContent({
                model: this.model,
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING },
                            bio: { type: Type.STRING },
                            compatibility: { type: Type.NUMBER },
                            socialUrl: { type: Type.STRING }
                        },
                        required: ["name", "bio", "compatibility", "socialUrl"]
                    }
                }
            });

            return JSON.parse(response.text?.trim() || '{}');
        } catch (error) {
            console.error("AI Generation failed:", error);
            throw error;
        }
    }
}
