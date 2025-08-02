"use client";
import { usePathname } from "next/navigation";
import { mockChats } from "@/lib/mockData";

export default function Appbar() {
  const pathname = usePathname();
  // Extract chatId from pathname
  const chatId = pathname.split('/').pop();
  const chatTitle = mockChats[chatId as keyof typeof mockChats]?.title;
  return (
    <div className="bg-header border-b border-app px-6 py-4">
      <h1 className="text-xl font-semibold text-app">
        {chatTitle || "New Chat"}
      </h1>
    </div>
  );
}
