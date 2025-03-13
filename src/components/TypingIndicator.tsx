
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4 animate-fade-in">
      <div className="bg-chat-bot-bubble text-gray-800 rounded-lg overflow-hidden max-w-[80%] md:max-w-[70%]">
        <Table>
          <TableBody>
            <TableRow className="border-b border-gray-200">
              <TableCell className="font-medium p-2">
                AI Assistant
              </TableCell>
              <TableCell className="text-right text-xs text-gray-500 p-2">
                now
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-typing-dot [animation-delay:0.4s]"></div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TypingIndicator;
