
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

  // Function to detect and parse markdown tables in message content
  const formatMessageContent = (content: string) => {
    // Check if content contains a markdown table
    if (content.includes('|') && content.includes('\n')) {
      const lines = content.split('\n');
      const tableStart = lines.findIndex(line => line.trim().startsWith('|'));
      
      if (tableStart >= 0) {
        // Extract content before the table
        const textBeforeTable = lines.slice(0, tableStart).join('\n');
        
        // Extract table lines
        const tablePart = lines.slice(tableStart);
        const tableEnd = tablePart.findIndex(line => !line.trim().startsWith('|'));
        const tableLines = tableEnd >= 0 ? tablePart.slice(0, tableEnd) : tablePart;
        
        // Extract content after the table
        const afterTableLines = tableEnd >= 0 ? tablePart.slice(tableEnd) : [];
        
        // Parse table headers and rows
        const tableData = parseMarkdownTable(tableLines);
        
        return (
          <>
            {textBeforeTable && <p className="mb-2">{textBeforeTable}</p>}
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border">
                <thead>
                  <tr>
                    {tableData.headers.map((header, i) => (
                      <th key={i} className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className="px-3 py-2 whitespace-nowrap text-sm">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {afterTableLines.length > 0 && <p className="mt-2">{afterTableLines.join('\n')}</p>}
          </>
        );
      }
    }
    
    // If no table is found, just return the content as is
    return content;
  };

  // Function to parse markdown table into headers and rows
  const parseMarkdownTable = (tableLines: string[]) => {
    // Filter out separator lines (containing only |, -, and spaces)
    const contentLines = tableLines.filter(line => {
      const trimmed = line.trim();
      return !(trimmed.replace(/\|/g, '').replace(/-/g, '').trim() === '');
    });
    
    // Extract headers from the first line
    const headerLine = contentLines[0];
    const headers = headerLine
      .split('|')
      .filter(cell => cell.trim() !== '')
      .map(cell => cell.trim());
    
    // Extract rows (skip header)
    const rows = contentLines.slice(1).map(line => {
      return line
        .split('|')
        .filter(cell => cell.trim() !== '')
        .map(cell => cell.trim());
    });
    
    return { headers, rows };
  };

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
                {formatMessageContent(message.content)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ChatMessage;
