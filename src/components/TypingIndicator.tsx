
import { cn } from "@/lib/utils";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="bg-chat-bot-bubble text-gray-800 px-4 py-3 rounded-lg rounded-tl-none">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot [animation-delay:0.2s]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
