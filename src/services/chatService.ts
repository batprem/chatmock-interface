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

// Example table data responses
const TABLE_RESPONSES = [
  `Here's a summary of your recent transactions:
  
| Date       | Description           | Amount   |
|------------|-----------------------|----------|
| 2023-09-15 | Coffee Shop           | $4.50    |
| 2023-09-14 | Grocery Store         | $65.27   |
| 2023-09-10 | Monthly Subscription  | $12.99   |
| 2023-09-05 | Restaurant            | $28.65   |`,

  `I've analyzed your website traffic:
  
| Source      | Users  | Conv. Rate |
|-------------|--------|------------|
| Google      | 12,542 | 3.4%       |
| Facebook    | 8,725  | 2.1%       |
| Twitter     | 3,642  | 1.7%       |
| Direct      | 5,811  | 4.2%       |`,

  `Here are the weather forecasts for the upcoming week:
  
| Day       | Condition | Temp (°C) | Humidity |
|-----------|-----------|-----------|----------|
| Monday    | Sunny     | 24°       | 45%      |
| Tuesday   | Cloudy    | 21°       | 62%      |
| Wednesday | Rainy     | 18°       | 78%      |
| Thursday  | Sunny     | 26°       | 40%      |
| Friday    | Partly Cloudy | 23°   | 55%      |`,

  `Here's a comparison of our pricing plans:
  
| Plan      | Price    | Features               |
|-----------|----------|------------------------|
| Basic     | $9.99    | Core functionality     |
| Standard  | $19.99   | + Advanced features    |
| Premium   | $29.99   | + Priority support     |
| Enterprise| Custom   | + Dedicated resources  |`
];

// Mock initial messages
export const INITIAL_MESSAGES = [
  {
    id: "1",
    content: "Hello! I'm your AI assistant. How can I help you today?",
    sender: "bot" as const,
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
      // Randomly determine if we should send a table response (20% chance)
      const shouldSendTable = Math.random() < 0.2;
      
      let content;
      if (shouldSendTable) {
        // If table response, select a random table
        const tableIndex = Math.floor(Math.random() * TABLE_RESPONSES.length);
        content = TABLE_RESPONSES[tableIndex];
      } else {
        // Otherwise select a standard response
        const responseIndex = Math.floor(Math.random() * BOT_RESPONSES.length);
        content = BOT_RESPONSES[responseIndex];
      }
      
      resolve({
        id: Date.now().toString(),
        content,
        sender: "bot" as const,
        timestamp: new Date().toISOString()
      });
    }, RESPONSE_DELAY);
  });
};

export const getTypingDelay = (): number => {
  return TYPING_DELAY;
};
