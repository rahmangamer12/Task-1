"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Importing Google and Facebook icons
import Navbar from './ui/Navbar';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();

    // Example login logic (replace with your own)
    if (email === 'test@example.com' && password === 'password') {
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleOAuthSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
    <div className="bg-[#0a0b47] h-screen flex flex-col">
      <Navbar /> {/* Navbar is now fixed at the top */}
      <div className="flex justify-center items-center flex-grow">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 space-y-4">
            <button
              onClick={() => handleOAuthSignIn('google')}
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FaGoogle className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
            <button
              onClick={() => handleOAuthSignIn('facebook')}
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaFacebook className="w-5 h-5 mr-2" />
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
