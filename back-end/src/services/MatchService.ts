import { AiService } from "./AiService";
import { MatchProfile } from "../types";

export class MatchService {
    private aiService: AiService;

    constructor() {
        this.aiService = new AiService();
    }

    public async findMatch(answers: Record<number, string>): Promise<MatchProfile> {
        try {
            const matchData = await this.aiService.generateMatchProfile(answers);

            return {
                name: matchData.name || "Unknown",
                bio: matchData.bio || "No bio available.",
                compatibility: matchData.compatibility || 50,
                socialUrl: matchData.socialUrl || "#",
                avatarUrl: `https://picsum.photos/seed/${Math.random()}/400/400`
            };

        } catch (error) {
            console.error("MatchService error, using fallback:", error);
            return this.getFallbackProfile();
        }
    }

    private getFallbackProfile(): MatchProfile {
        return {
            name: "Cloudy Joe",
            bio: "A professional dreamer who loves drinking rain tea. You both matched over a shared love for quiet Sunday mornings.",
            compatibility: 98,
            socialUrl: "https://soul.link/cloudyjoe",
            avatarUrl: "https://picsum.photos/seed/fallback/400/400"
        };
    }
}
