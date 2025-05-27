import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login gfjghjfg
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          <div className="flex justify-end text-sm">
            <a href="#" className="text-gray-500 font-bold hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-500  text-white font-semibold rounded-lg transition duration-200"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?
          <a href="#" className="text-gray-500 font-bold hover:underline ml-1">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
