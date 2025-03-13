
import { MessageCircle } from "lucide-react";

const ChatHeader = () => {
  return (
    <header className="flex items-center gap-3 p-4 border-b border-gray-200 bg-white">
      <div className="bg-purple-100 p-2 rounded-full">
        <MessageCircle className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h1 className="font-medium text-lg">AI Assistant</h1>
        <p className="text-sm text-gray-500">Online</p>
      </div>
    </header>
  );
};

export default ChatHeader;
