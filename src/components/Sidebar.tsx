"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { FaCog, FaSignOutAlt, FaUserCircle, FaChevronLeft, FaChevronRight, FaComments, FaPlusSquare } from "react-icons/fa";
import { useState } from "react";
import { mockChatList } from "@/lib/mockData";
import { TOP_SECTION_HEIGHT, PROFILE_SECTION_HEIGHT } from "@/lib/constants";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Sidebar() {
  const { data: session } = useSession();
  const [expanded, setExpanded] = useState(true);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showChatHistoryPopup, setShowChatHistoryPopup] = useState(false);

  return (
    <div className={`sidebar text-app h-full flex flex-col transition-all duration-200 ${expanded ? 'sidebar-expanded' : 'sidebar-collapsed'} relative`}>
      {/* Top Section: Logo and Expand-Contract Button */}
      <div
        className="flex items-center justify-between border-b border-app px-4"
        style={{ height: TOP_SECTION_HEIGHT }}
      >
        <div className="flex items-center gap-2">
          <Image src="/file.svg" alt="Logo" width={32} height={32} />
          {expanded && <span className="font-bold text-lg">DocSage</span>}
        </div>
        {expanded && (
          <button
            className="btn btn-ghost p-2 rounded"
            onClick={() => setExpanded(false)}
            aria-label="Collapse sidebar"
          >
            <FaChevronLeft />
          </button>
        )}
      </div>

      {/* New Chat */}
      <Link href="/chat" className="flex items-center gap-2 p-4 hover-bg border-b border-app transition-colors">
        &nbsp;
        <FaPlusSquare />
        {expanded && <span>New Chat</span>}
      </Link>

      {/* Chat History */}
      {expanded ? (
        <div className="flex-1 overflow-y-auto">
          <div className="p-2 text-xs text-muted uppercase tracking-wider">Chat History</div>
          <ul>
            {mockChatList.map((chat) => (
              <li key={chat.id}>
                <Link
                  href={`/chat/${chat.id}`}
                  className="flex items-center gap-2 px-4 py-2 hover-bg cursor-pointer transition-colors"
                >
                  <span className="truncate flex-1">{chat.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-start pt-4">
          <button
            className="btn btn-ghost p-2 rounded"
            aria-label="Show chat history"
            onClick={() => setShowChatHistoryPopup(true)}
          >
            <FaComments size={24} />
          </button>
          {/* Chat History Popup */}
          {showChatHistoryPopup && (
            <div className="popup absolute left-full top-8 w-64 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted uppercase tracking-wider">Chat History</span>
                <button
                  className="btn btn-ghost p-1 rounded"
                  onClick={() => setShowChatHistoryPopup(false)}
                  aria-label="Close chat history"
                >
                  <FaChevronLeft />
                </button>
              </div>
              <ul>
                {mockChatList.map((chat) => (
                  <li key={chat.id}>
                    <Link
                      href={`/chat/${chat.id}`}
                      className="flex items-center gap-2 px-2 py-2 hover-bg cursor-pointer transition-colors rounded"
                      onClick={() => setShowChatHistoryPopup(false)}
                    >
                      <span className="truncate flex-1">{chat.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Profile Section (always at the bottom) */}
      <div
        className={`border-t border-app relative flex items-center ${expanded ? 'gap-2 px-4' : 'justify-center px-0'} cursor-pointer hover-bg transition-colors`}
        style={{ height: PROFILE_SECTION_HEIGHT }}
        onClick={() => setShowProfilePopup(!showProfilePopup)}
      >
        {session?.user?.image ? (
          <Image src={session.user.image} alt="Profile" width={40} height={40} className="rounded-full" />
        ) : (
          <FaUserCircle size={40} />
        )}
        {expanded && (
          <div className="flex-1">
            <div className="font-semibold">{session?.user?.name || "User"}</div>
          </div>
        )}
        {/* Profile Popup */}
        {showProfilePopup && (
          <div className="popup absolute bottom-full left-0 right-0 mb-2">
            <div className="p-2">
              <ThemeSwitcher />
            </div>
            <button
              className="w-full flex items-center gap-2 px-4 py-2 hover-bg transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowProfilePopup(false);
                // Add settings logic here
              }}
            >
              <FaCog />
              <span>Settings</span>
            </button>
            <button
              className="w-full flex items-center gap-2 px-4 py-2 hover-bg transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowProfilePopup(false);
                signOut();
              }}
            >
              <FaSignOutAlt />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>

      {/* Expand button when collapsed */}
      {!expanded && (
        <div className="absolute top-4 left-4 opacity-0 hover:opacity-100 transition-opacity">
          <button
            className="btn btn-secondary p-2 rounded"
            onClick={() => setExpanded(true)}
            aria-label="Expand sidebar"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
