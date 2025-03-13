
import { Message } from "@/services/chatService";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === "user";
  const timestamp = new Date(message.timestamp);
  const timeAgo = formatDistanceToNow(timestamp, { addSuffix: true });

  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] md:max-w-[70%] px-4 py-3 rounded-lg",
          isUser 
            ? "bg-chat-user-bubble text-gray-800 rounded-tr-none" 
            : "bg-chat-bot-bubble text-gray-800 rounded-tl-none"
        )}
      >
        <div className="text-sm md:text-base whitespace-pre-wrap break-words">
          {message.content}
        </div>
        <div className="text-xs text-gray-500 mt-1 text-right">
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
