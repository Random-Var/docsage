import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import { mockChats, type Message } from "@/lib/mockData";
import { INPUT_SECTION_HEIGHT } from "@/lib/constants";

interface ChatIdPageProps {
  params: Promise<{
    chatId: string;
  }>;
}

export default async function ChatIdPage({
    params
}: ChatIdPageProps) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        redirect('/login');
    }

    const { chatId } = await params;
    const chat = mockChats[chatId];

    if (!chat) {
      return (
        <div className="p-8 text-center text-muted bg-app min-h-screen">Chat not found.</div>
      );
    }

    return (
      <div className="flex flex-col h-full min-h-0 w-full bg-app text-app">
        <div className="flex-1 min-h-0 overflow-y-auto px-0 md:px-32 py-8 space-y-6">
          {chat.messages.map((msg: Message) => (
            msg.sender === "user" ? (
              <div key={msg.id} className="flex justify-end">
                <div className="message-user">
                  {msg.text}
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex justify-start">
                <div className="message-bot">
                  {msg.text}
                </div>
              </div>
            )
          ))}
        </div>
        {/* Chat input (disabled for now) */}
        <div
          className="border-t border-app bg-app px-0 md:px-32 flex items-center"
          style={{ height: INPUT_SECTION_HEIGHT }}
        >
          <input
            type="text"
            className="input w-full"
            placeholder="Type your message..."
            disabled
          />
          <div className="text-xs text-muted ml-4">(Chat input coming soon)</div>
        </div>
      </div>
    );
}
