"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    router.push("/login"); // Navigate to the login page
  };

  const handleSignupClick = () => {
    router.push("/signup"); // Navigate to the signup page
  };

  return (
    <div className="w-screen bg-[#0a0b47] relative z-50">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image
            src={require("../../../../public/Logo.png")}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-white text-lg font-bold ml-3">
            Baloch Warrior Gaming
          </div>
        </div>

        <nav className="hidden md:flex justify-center items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#tournaments" className="text-gray-400 hover:text-white">
                Tournaments
              </Link>
            </li>
            <li>
              <Link href="#teams" className="text-gray-400 hover:text-white">
                Teams
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-white bg-blue-700 border-2 border-blue-500 px-3 py-1"
            onClick={handleSignupClick}
          >
            Sign Up
          </button>
          <button
            className="text-white bg-blue-600 border-2 border-blue-400 px-3 py-1"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </header>

      <div
        className={`fixed top-0 right-0 h-full bg-[#0a0b47] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 ${
          isMenuOpen ? 'w-3/4 md:w-1/2' : '' // Adjusts width based on screen size
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-lg">Menu</h2>
          <button className="text-white" onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-4 mt-10">
          <ul>
            <li className="mb-4">
              <Link href="/" className="text-gray-400 hover:text-white" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#about" className="text-gray-400 hover:text-white" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#tournaments" className="text-gray-400 hover:text-white" onClick={toggleMenu}>
                Tournaments
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#teams" className="text-gray-400 hover:text-white" onClick={toggleMenu}>
                Teams
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#contact" className="text-gray-400 hover:text-white" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-4 mt-8">
            <button
              className="text-white bg-blue-700 border-2 border-blue-500 px-6 py-2"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
            <button
              className="text-white bg-blue-600 border-2 border-blue-400 px-6 py-2"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
