// Mock data - to be replaced with database later

export type Message = { id: number; text: string; sender: "user" | "bot" };
export type Chat = { id: string; title: string; messages: Message[] };

export const mockChats: { [key: string]: Chat } = {
  "1": {
    id: "1",
    title: "Project Discussion",
    messages: [
      { id: 1, text: "Hey, let's discuss the project requirements.", sender: "user" },
      { id: 2, text: "Sure! I think we should start with the user stories.", sender: "bot" },
      { id: 3, text: "Agreed. I'll draft them and share for review.", sender: "user" },
    ],
  },
  "2": {
    id: "2", 
    title: "AI Brainstorm",
    messages: [
      { id: 1, text: "What are some cool AI features we can add?", sender: "user" },
      { id: 2, text: "How about document summarization?", sender: "bot" },
      { id: 3, text: "Or maybe a chatbot that answers questions from PDFs!", sender: "user" },
    ],
  },
  "3": {
    id: "3",
    title: "Docs Review", 
    messages: [
      { id: 1, text: "Did you review the latest documentation?", sender: "user" },
      { id: 2, text: "Yes, I left some comments on the API section.", sender: "bot" },
      { id: 3, text: "Great, I'll address them today.", sender: "user" },
    ],
  },
};

export const mockChatList = [
  { id: "1", title: "Project Discussion" },
  { id: "2", title: "AI Brainstorm" },
  { id: "3", title: "Docs Review" },
]; 