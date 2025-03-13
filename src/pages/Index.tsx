
import ChatContainer from "@/components/ChatContainer";
import ChatHeader from "@/components/ChatHeader";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="container mx-auto max-w-3xl h-full p-4 md:p-6 flex flex-col">
        <div className="flex flex-col flex-1 overflow-hidden rounded-xl shadow-lg bg-white">
          <ChatHeader />
          <div className="flex-1 overflow-hidden">
            <ChatContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
