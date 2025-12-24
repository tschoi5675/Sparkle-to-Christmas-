
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFestiveContent = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Give me a ${topic} for Christmas. Keep it short (under 30 words), sweet, sparkling, and very girly/glamorous. Use emojis like ✨, 💖, ❄️, and 🎀.`,
      config: {
        systemInstruction: "You are a chic, glamorous Christmas elf who loves rose gold, sparkles, and everything girly. Your tone is upbeat, warm, and highly aesthetic.",
        temperature: 0.9,
      },
    });
    return response.text || "May your days be merry and bright with a touch of rose gold sparkle! ✨";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Wishing you a magical, pink, and sparkly Christmas! 💖❄️";
  }
};
