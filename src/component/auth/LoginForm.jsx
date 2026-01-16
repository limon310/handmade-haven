"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock Credentials (Hardcoded)
    const mockEmail = "admin@handmade.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      // Login logic: Set a mock cookie or localStorage
      document.cookie = "isLoggedIn=true; path=/"; 
      
      // Redirect to Items page
      Swal.fire("success", "login successfull", "success");
      router.push("/items");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-box shadow-xl border border-brand-accent/20">
        
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-secondary">Welcome Back</h2>
          <p className="text-neutral/60 mt-2">Login to your Artisan account</p>
        </div>

        {error && (
          <div className="alert alert-error mb-6 py-2 rounded-md text-sm">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-secondary">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="admin@handmade.com"
              className="input input-bordered focus:border-primary outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-secondary">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered focus:border-primary outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="pt-2">
            <button type="submit" className="btn btn-primary w-full text-white">
              Login
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm">
          <p className="text-neutral/50">
            Forgot password? <span className="text-primary cursor-pointer hover:underline">Contact Support</span>
          </p>
        </div>
      </div>
    </div>
  );
}