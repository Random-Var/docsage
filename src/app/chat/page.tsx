import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";

export default async function ChatPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-full h-full w-full bg-app text-app">
      {/* Hero Section */}
      <div className="mb-12 text-center mt-16">
        <h1 className="text-4xl font-extrabold text-app mb-2">Welcome to <span className="text-primary">DocSage</span></h1>
        <p className="text-lg text-muted max-w-xl mx-auto">Upload your PDFs and chat with them using advanced AI. Ask questions, get summaries, and more!</p>
      </div>
      {/* Chat Section Placeholder */}
      <div className="card-muted w-full max-w-2xl rounded-xl shadow-lg flex flex-col items-center p-8">
        <div className="text-muted text-lg mb-6">Start a new conversation!</div>
        <input
          type="text"
          className="input w-full"
          placeholder="Type your message..."
          disabled
        />
        <div className="text-xs text-muted mt-2">(Chat input coming soon)</div>
      </div>
    </div>
  );
}
