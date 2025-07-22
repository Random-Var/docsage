import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";

export default async function ChatPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Welcome to the Chat</h1>
      <p>Your session is active. Enjoy using the chat!</p>
    </div>
  );
}
