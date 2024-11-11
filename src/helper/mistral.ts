import { Mistral } from '@mistralai/mistralai';

export class MistralClient {
    private client: Mistral;

    constructor() {
        this.client = new Mistral({ apiKey: process.env.NEXT_PUBLIC_API_KEY });
    }

    async getChatResponse(model: string, userMessage: string): Promise<string> {
        try {
            const response = await this.client.chat.complete({
                model,
                messages: [{ role: 'user', content: userMessage }],
            });

            if (response.choices) {
                const content = response.choices[0].message.content;
                if (typeof content === 'string')
                    return content;
                return 'An error occurred';
            } else {
                return 'An error occurred';
            }
        } catch (error) {
            console.error('Erreur lors de la requête Mistral:', error);
            throw new Error('Impossible de récupérer une réponse');
        }
    }
}
