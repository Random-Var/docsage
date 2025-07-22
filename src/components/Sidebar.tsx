"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { FaPlus, FaCog, FaSignOutAlt, FaUserCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const mockChats = [
  { id: "1", title: "Project Discussion" },
  { id: "2", title: "AI Brainstorm" },
  { id: "3", title: "Docs Review" },
];

export default function Sidebar() {
  const { data: session } = useSession();
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`bg-gray-900 text-white h-full flex flex-col transition-all duration-200 ${expanded ? 'w-96' : 'w-20'} border-r border-white/10`}>
      {/* Logo and Expand-Contract Button */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Image src="/globe.svg" alt="Logo" width={32} height={32} />
          {expanded && <span className="font-bold text-lg">DocSage</span>}
        </div>
        <button
          className="p-2 rounded hover:bg-gray-800"
          onClick={() => setExpanded((e) => !e)}
          aria-label="Toggle sidebar"
        >
          {expanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* New Chat */}
      <button className="flex items-center gap-2 p-4 hover:bg-gray-800 border-b border-white/10" onClick={() => {}}>
        <FaPlus />
        {expanded && <span>New Chat</span>}
      </button>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 text-xs text-gray-400 uppercase tracking-wider">{expanded && "Chat History"}</div>
        <ul>
          {mockChats.map((chat) => (
            <li key={chat.id} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer">
              <span className="truncate flex-1">{expanded ? chat.title : chat.title.charAt(0)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile - Settings - Logout */}
      <div className="p-4 border-t border-white/10 flex items-center gap-2">
        {session?.user?.image ? (
          <Image src={session.user.image} alt="Profile" width={32} height={32} className="rounded-full" />
        ) : (
          <FaUserCircle size={32} />
        )}
        {expanded && (
          <div className="flex-1">
            <div className="font-semibold">{session?.user?.name || "User"}</div>
            <div className="text-xs text-gray-400">{session?.user?.email || "user@example.com"}</div>
          </div>
        )}
        <button className="p-2 hover:bg-gray-800 rounded" aria-label="Settings">
          <FaCog />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded" onClick={() => signOut()} aria-label="Logout">
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}
