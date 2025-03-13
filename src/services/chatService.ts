
// Mock responses for the chatbot
const BOT_RESPONSES = [
  "Hello! How can I help you today?",
  "That's an interesting question. Let me think about that.",
  "I'm an AI assistant here to help answer your questions.",
  "Could you provide more details about your question?",
  "I understand your concern. Here's what I can suggest...",
  "Thank you for sharing that information with me.",
  "I'm sorry, but I don't have enough information to answer that question.",
  "Is there anything else you'd like to know?",
  "Let me know if you need further clarification on this topic.",
  "I appreciate your patience while I process this information."
];

// Mock initial messages
export const INITIAL_MESSAGES = [
  {
    id: "1",
    content: "Hello! I'm your AI assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(Date.now() - 60000).toISOString()
  }
];

// Delay to simulate network latency
const TYPING_DELAY = 1500;
const RESPONSE_DELAY = 3000;

export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: string;
}

export const sendMessage = async (message: string): Promise<Message> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Randomly select a response from the mock responses
      const responseIndex = Math.floor(Math.random() * BOT_RESPONSES.length);
      
      resolve({
        id: Date.now().toString(),
        content: BOT_RESPONSES[responseIndex],
        sender: "bot",
        timestamp: new Date().toISOString()
      });
    }, RESPONSE_DELAY);
  });
};

export const getTypingDelay = (): number => {
  return TYPING_DELAY;
};
