"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === "labibaltasfi1@gmail.com" && password === "Asdf@1234") {
      localStorage.setItem("auth", "true");
      window.location.href = "/products";
    }

    else {

    }
  }

  return <div className="min-h-screen flex items-center justify-center px-4 py-10">
    <div className="bg-white text-gray-800 py-8 px-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-3xl shadow-2xl">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
        Login to your account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8">

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="p-3 sm:p-4 rounded-xl border border-[#192489] text-black focus:ring-2 focus:ring-[#192489]"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="p-3 sm:p-4 rounded-xl border border-[#192489] text-black focus:ring-2 focus:ring-[#192489]"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 sm:py-4 rounded-xl bg-[#192489] text-white font-semibold hover:bg-[#141d6f] transition"
        >
          Login
        </button>
      </form>

    </div>
  </div>

}