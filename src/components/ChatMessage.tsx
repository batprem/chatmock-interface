
import { Message } from "@/services/chatService";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

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
          "max-w-[80%] md:max-w-[70%] rounded-lg overflow-hidden",
          isUser 
            ? "bg-chat-user-bubble text-gray-800" 
            : "bg-chat-bot-bubble text-gray-800"
        )}
      >
        <Table>
          <TableBody>
            <TableRow className="border-b border-gray-200">
              <TableCell className="font-medium p-2">
                {isUser ? "You" : "AI Assistant"}
              </TableCell>
              <TableCell className="text-right text-xs text-gray-500 p-2">
                {timeAgo}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="p-3 whitespace-pre-wrap break-words">
                {message.content}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ChatMessage;
