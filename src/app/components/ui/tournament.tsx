"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the type for timeLeft state
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const TournamentsPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const tournamentDate = new Date("2024-09-07T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = tournamentDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({});
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0b47] text-white min-h-screen" id="tournaments">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen">
        <Image
          src="/tournament2.jpeg" // Adjust path if needed
          alt="Tournament"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold">Baloch Warrior Tournament</h1>
          <p className="text-lg md:text-2xl mt-4 mb-8">
            Compete with the best and win big! Register now to secure your spot.
          </p>
          <Link href="/register">
            <Link href={""} className="inline-block px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700">
              Register Now
            </Link>
          </Link>
        </div>
      </section>

      {/* Tournament Details */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Tournament Details</h2>
        <div className="max-w-4xl mx-auto">
          <p>
            The Baloch Warrior Tournament is the ultimate showdown for the best gamers out there. With massive
            prizes and recognition, this is the tournament you don&apos;t want to miss. Here are the details:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Start Date: 7th September 2024</li>
            <li>Format: 5v5 Elimination</li>
            <li>Prizes: $10000 for the winning team</li>
            <li>Rules: No cheating, fair play enforced</li>
          </ul>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="bg-indigo-800 py-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Countdown to Tournament</h2>
        <div className="max-w-4xl mx-auto text-center">
          {timeLeft.days !== undefined ? (
            <div className="text-2xl md:text-4xl font-bold">
              {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
            </div>
          ) : (
            <p className="text-lg">The tournament has started!</p>
          )}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Leaderboard</h2>
        <div className="max-w-4xl mx-auto">
          <p>Check out the current standings of the teams.</p>
          {/* Placeholder for leaderboard */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Team A</h3>
              <p>Points: 150</p>
            </div>
            <div className="bg-indigo-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Team B</h3>
              <p>Points: 120</p>
            </div>
            <div className="bg-indigo-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Team C</h3>
              <p>Points: 100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-indigo-800 py-16 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">Register Your Team</h2>
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/mkgwowjy"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-200 text-gray-800"
              placeholder="Team Name"
              name="team-name"
              required
            />
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-200 text-gray-800"
              placeholder="Team Captain Email"
              name="email"
              required
            />
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-200 text-gray-800"
              placeholder="Phone Number"
              name="phone-number"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-700 text-white font-bold"
            >
              Register Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TournamentsPage;
