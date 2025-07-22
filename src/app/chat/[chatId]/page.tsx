import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";

interface ChatIdPageProps {
  params: {
    chatId: string;
  };
}

// Mock chat data
const mockChats = {
  "1": {
    title: "Project Discussion",
    messages: [
      { id: 1, text: "Hey, let's discuss the project requirements." },
      { id: 2, text: "Sure! I think we should start with the user stories." },
      { id: 3, text: "Agreed. I'll draft them and share for review." },
    ],
  },
  "2": {
    title: "AI Brainstorm",
    messages: [
      { id: 1, text: "What are some cool AI features we can add?" },
      { id: 2, text: "How about document summarization?" },
      { id: 3, text: "Or maybe a chatbot that answers questions from PDFs!" },
    ],
  },
  "3": {
    title: "Docs Review",
    messages: [
      { id: 1, text: "Did you review the latest documentation?" },
      { id: 2, text: "Yes, I left some comments on the API section." },
      { id: 3, text: "Great, I'll address them today." },
    ],
  },
};

export default async function ChatIdPage({
    params
}: ChatIdPageProps) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        redirect('/login');
    }

    const { chatId } = params;
    const chat = mockChats[chatId as keyof typeof mockChats];

    if (!chat) {
      return (
        <div className="p-8 text-center text-gray-400">Chat not found.</div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{chat.title}</h1>
        <ul className="space-y-4">
          {chat.messages.map((msg: { id: number; text: string }) => (
            <li key={msg.id} className="bg-gray-100 text-gray-900 rounded-lg px-4 py-2 shadow">
              {msg.text}
            </li>
          ))}
        </ul>
      </div>
    );
}
