"use client";
import { signIn } from "next-auth/react"
import { FaGoogle, FaGithub } from "react-icons/fa6"

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-900">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-white mb-6">Login</h1>
        <button
          onClick={() => signIn('google')}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 mb-4 rounded-lg bg-white text-black"
        >
          <FaGoogle />
          Sign in with Google
        </button>
        <button
          onClick={() => signIn('github')}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black text-white"
        >
          <FaGithub />
          Sign in with GitHub
        </button>
      </div>
    </div>
  )
}
